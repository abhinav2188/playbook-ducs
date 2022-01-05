import React, { useState,useEffect, useContext } from 'react'
import TreeMenu from "../UI/TreeMenu"
import notesImg from "../svgs/notes-img.svg"
import styles from "./notes.module.scss"
import {UserContext} from "../providers/UserProvider";
import {firebaseStorage} from  "../services/firebase";
import PdfRender from "./pdfRender";
import Modal from 'react-modal';
import WithAnimationLoad from "../HOC/WithAnimationLoad";
import {FormControl,InputLabel,Select,MenuItem,FormGroup,CircularProgress,List,ListItemAvatar,ListItem,Divider,ListItemText,Chip, ButtonUnstyled} from "@mui/material"
import { getStudyMaterial, getFileUrl } from '../services/StudyMaterial';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import {Paper} from "@material-ui/core"

const materialTypes = [
    "Notes","PYPs","Ebooks"
];
const subjects = [
    "Database Concepts",
    "Operating Systems",
    "Algorithms",
    "Compiler Design",
    "Theory of Computation",
    "Discrete Mathematics",
];
const courses = ["All","MCA","MSc"];
const semesters = ["All","1st","2nd","3rd","4th","5th","6th"];



const NotesPage = () => {       

    const [semester,setSemester] = useState(semesters[0]);
    const [subject,setSubject] = useState(subjects[0]);
    const [course,setCourse] = useState(courses[0]);
    const [materialType, setMaterialType] = useState(materialTypes[0]);

    const [viewData,setViewData] = useState([]);
    const [loading,setLoading] = useState(true);

    const [currentFilePath, setCurrentFilePath] = useState("");
    const [pdfURL,setpdfURL] = useState('');

    const [notes,setNotes] = useState([]);
    const [showIndex,setShowIndex] = useState(false);
    
   




    const [modal,setModal] = useState(false);
    Modal.setAppElement('#root');




    const user = useContext(UserContext);

    useEffect(async ()=>{
        setLoading(true);
        getStudyMaterial(materialType,subject).then(data =>  setViewData(data)).catch(error => {
            console.log(error);
        });
        setLoading(false);
    },[materialType,subject]);
    
    useEffect( async ()=> {
        getFileUrl(currentFilePath).then(url => setpdfURL(url))
        .catch(error => console.log(error));
    },[currentFilePath])

    const customStyles = {  
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          width                 : 'fit-content',
          height                : '80%',
          minWidth              : '50%',
          transform             : 'translate(-50%, -50%)'
        }
      };

    useEffect(()=>{
        if(user){
            fetchNotes();
            setLoading(false);   
        }
        setModal(false);
    },[]);

    function openModal() {
        setModal(true);
      }
    
      function closeModal(){
        setModal(false);
      }

      // fetch notes url for given semester
    async function fetchNotes(){

        let notesUrl = [];  
       await firebaseStorage.child(`notes/${semester}`).listAll().then(function(res) {
            res.items.forEach(function(folderRef) {
            let gsReference = folderRef.toString();
            let fileName = (gsReference.split(['/'])[5]);
            notesUrl.push(fileName);            
            });
            setNotes(notesUrl);
            setViewData(notesUrl);
        }).catch(function(error) {
            console.error(error);
        });
    }

    // fetch note pdf 
    async function fetchPdf(fileName){
       // Create a reference to the file we want to download
        let starsRef = firebaseStorage.child(`notes/${semester}/${fileName}`);

        // Get the download URL
        let fileURL = '';
      await  starsRef.getDownloadURL()
        .then((url) => {
             fileURL= url;
        })
        .catch((error) => {
            fileURL = null;
        switch (error.code) {
            case 'storage/object-not-found':
                alert("Error: Files doesn't exist");
            break;
            case 'storage/unauthorized':
                alert("Error: You are not authorized to view this file");
            break;
            case 'storage/canceled':
            // User canceled the upload
            break;

            case 'storage/unknown':
                alert("Error:Something bad happend");
                
            break;
            default:
                break;
        }
        });
        return fileURL;
    }

    // dowload pdf for clicked file
  async function handleClick(fileName){
       const url = await fetchPdf(fileName);

        if(url !== '' || url !== undefined || url !== null){
            setpdfURL(url);
            setModal(true);
        }else{
            alert("Something went wrong");
        }
        
    }

    function handleDownload(){
        fetch(pdfURL)
          .then((response) => response.blob())
          .then((blob) => {
            // Create blob link to download
            const url = window.URL.createObjectURL(
              new Blob([blob]),
            );
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
              'download',
              `File.pdf`,
            );
        
            // Append to html link element page
            document.body.appendChild(link);
        
            // Start download
            link.click();
        
            // Clean up and remove the link
            link.parentNode.removeChild(link);
          });
        
    }


    // filter notes based on subject 
    function filterNotes(){
       const filteredData =  notes.filter(note =>
             note.startsWith(subject)
            );
        if(filteredData!= null){
            setViewData(filteredData);
        }
        
    }

    const notesIndexContent = [
        <TreeMenu toggleHead="Semester 1" onClick={()=>{
            setSemester('sem1');
            fetchNotes();
        }}> 
        {[
            <p  onClick={()=>{
                setSubject('DM');
                filterNotes();
            }}>Discrete Maths</p>,
            <p  onClick={()=>{
                setSubject('MT');
                filterNotes();
            }}>Mathematical Techniques</p>,
            <p  onClick={()=>{
                setSubject('CSA');
                filterNotes();
            }}>Computer System Architecture</p>,
            <p onClick={(e)=>{
                setSubject('OOP');
                filterNotes();
            }}>Object Oriented Programming</p>,
            <p  onClick={()=>{
                setSubject('TC');
                filterNotes();
            }}>Technical Communication</p>
        ]}
        </TreeMenu>,
        <TreeMenu toggleHead="Semester 2" onClick={()=>{
            setSemester('sem2');
            fetchNotes();
        }}>
        {[
           <p  onClick={()=>{
            setSubject('DBMS');
            filterNotes();
        }}>DBMS</p>,
        <p  onClick={()=>{
            setSubject('DS');
            filterNotes();
        }}>Data Structures</p>,
        <p  onClick={()=>{
            setSubject('SE');
            filterNotes();
        }}>Software Engineering</p>,
        <p  onClick={()=>{
            setSubject('CN');
            filterNotes();
        }}>Computer Networks</p>,
        <p  onClick={()=>{
            setSubject('JAVA');
            filterNotes();
        }}>JAVA</p>
        ]}
        </TreeMenu>,
        <TreeMenu toggleHead="Semester 3" onClick={()=>{
            setSemester('sem3');
            fetchNotes();
        }}>
        {[
            <p  onClick={()=>{
            setSubject('DAA');
            filterNotes();
            }}>Algorithms</p>,
            <p  onClick={()=>{
                setSubject('IS');
                filterNotes();
            }}>Information Security</p>,
            <p  onClick={()=>{
                setSubject('AT');
                filterNotes();
            }}>Automata Theory</p>,
            <p  onClick={()=>{
                setSubject('OS');
                filterNotes();
            }}>Operating System</p>,
            <p  onClick={()=>{
                setSubject('WT');
                filterNotes();
            }}>Web Technology</p>,
            <p  onClick={()=>{
                setSubject('DTM');
                filterNotes();
            }}>Data Mining</p>,
        ]}
        </TreeMenu>,
        <TreeMenu toggleHead="Semester 4" onClick={()=>{
            setSemester('sem4');
            fetchNotes();
        }}>
        {[
            <p  onClick={()=>{
            setSubject('CD');
            filterNotes();
            }}>Compiler Design</p>,
            <p  onClick={()=>{
                setSubject('PDC');
                filterNotes();
            }}>Parallel and Distributed Computing</p>,
            <p  onClick={()=>{
                setSubject('AOS');
                filterNotes();
            }}>Advanced Operating System</p>,
            <p  onClick={()=>{
                setSubject('DIP');
                filterNotes();
            }}>Digital Image Processing</p>,
            <p  onClick={()=>{
                setSubject('DBA');
                filterNotes();
            }}>Database Applications</p>
        ]}
        </TreeMenu>
    
    ];

    return(
        
        <WithAnimationLoad className={styles.main}>
        <div className={styles.notesPage}>
            

            <div className={styles.controlSection}>
                <FormGroup className={styles.formControls}>
                <FormControl>
                    <InputLabel htmlFor="material-type">Type</InputLabel>
                    <Select name="materialType" id="material-type" value={materialType} label="Type" size="small"
                    onChange={(e)=>{setMaterialType(e.target.value)}}>
                        {
                            materialTypes.map(
                                mt => (
                                    <MenuItem value={mt}>{mt}</MenuItem>
                                )
                            )
                        }
                    </Select>
                </FormControl>
                <FormControl  sx={{minWidth:"100px"}}>
                <InputLabel htmlFor="subject">Subject</InputLabel>
                    <Select name="subject" id="subject" value={subject} label="Subject" size="small"
                    onChange={(e)=>{setSubject(e.target.value)}}>
                        {
                            subjects.map(
                                sub => (
                                    <MenuItem value={sub}>{sub}</MenuItem>
                                )
                            )
                        }
                    </Select>
                </FormControl>
                <div style={{display:"flex",gap:"0.5rem"}}>
                    <FormControl>
                    <InputLabel id="course-label">Course</InputLabel>
                    <Select name="course" id="course" value={course} label="course" labelId="course-label"
                    size="small"
                    onChange={(e) => {setCourse(e.target.value)}}>
                        {
                            courses.map( co => <MenuItem value={co}>{co}</MenuItem>)
                        }
                    </Select>
                    </FormControl>
                    <FormControl >
                    <InputLabel htmlFor="semester">Semester</InputLabel>
                    <Select name = "semester" id = "semester" value={semester} label = "semester" size="small"
                    onChange = {(e) => {setSemester(e.target.value)}}>
                        {
                            semesters.map( sem => <MenuItem value={sem}>{sem}</MenuItem>)
                        }
                    </Select>
                    </FormControl>
                </div>
                </FormGroup>

                {
                loading? <CircularProgress/> : 
                viewData.length == 0 ? <div>No files to Display</div> :
                <div className={styles.filesViewContainer}>
                    {viewData.map(data => (
                        <button onClick={()=> setCurrentFilePath(data.filePath)} className={styles.file} className={styles.file}>
                            <div className={styles.topics}>
                                <PictureAsPdfIcon />
                                <p>{data.topicsCovered}</p>
                            </div>
                            <div className={styles.chips}>
                                <span>{data.yearOfStudy}</span>
                                <span>{data.course} </span>
                                <span>{`${data.semester} sem`}</span>
                            </div>
                        </button>
                    ))}
                </div>
                }
            </div>
            
            
            <div className={styles.displaySection}>
            { loading ? <div>Loading</div>:
                (viewData.length == 0 ? 
                <div className={styles.noPdf}>
                    <div className={styles.noPdfImg}>
                        <img src={notesImg} alt=""/>
                    </div>
                    <div className={styles.noPdfHeadline}>
                        <h3>Find exclusive notes, latest book editions or refer to projects</h3>
                    </div>
                </div> : 
                    pdfURL!=="" &&
                        <PdfRender pdf={pdfURL} />
                )    
                }
            
            </div> 


            
        </div>


        </WithAnimationLoad>
    );
}

export default NotesPage;