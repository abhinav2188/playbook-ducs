import React, { useState,useEffect, useContext } from 'react'
import TreeMenu from "../UI/TreeMenu"
import notesImg from "../svgs/notes-img.svg"
import "./notes.scss"
import {UserContext} from "../providers/UserProvider";
import {firebaseStorage} from  "../services/firebase";
import PdfRender from "./pdfRender";
import Modal from 'react-modal';
import WithAnimationLoad from "../HOC/WithAnimationLoad";

const NotesPage = () => {       

    const [showIndex,setShowIndex] = useState(false);
    
    const [notes,setNotes] = useState([]);
    const [viewData,setViewData] = useState([]);
   
    const [semester,setSemester] = useState('sem1');
    const [subject,setSubject] = useState('DBMS');

    const [loading,setLoading] = useState(true);

    const [modal,setModal] = useState(false);
    Modal.setAppElement('#root');

    const [pdfURL,setpdfURL] = useState('');

    const user = useContext(UserContext);


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
        
        <WithAnimationLoad className="main">
        <div className="notes-page container">
            
            {/* top container */}
            
            <div className="notes-hero">
                <div className="notes-ft-img">
                    <img src={notesImg} alt=""/>
                </div>
                <div className="notes-headline">
                    <h2>Find exclusive notes, latest book editions or refer to projects</h2>
                </div>
            </div>
            
            {/* main content */}
            {
                window.innerWidth>768 ? 
                <h3>Notes</h3> :
                <div style={{position:'sticky',top:0}}>
                <TreeMenu toggleHead={<h3>Notes</h3>} isOverlay={true}>
                    <div className="notes-index">
                        {notesIndexContent}
                    </div>
                </TreeMenu>
                </div>
 
            }
            <div className="notes-content">

                {/* notes index */}
                {
                window.innerWidth>768 &&
                <div className="notes-index">
                {notesIndexContent}
                </div>
                }
                {/* PDF Container */}

                {
                   loading? (
                    <div className="notes-pdf-container">
                        <div className="notes-pdf"></div>
                        <div className="notes-pdf"></div>
                        <div className="notes-pdf"></div>
                    </div>

                   ) :(

                    <div className="notes-pdf-container">
                      {
                          viewData.map((note, index) => (
                              <div className="notes-pdf" key= {index} onClick = {(e)=>{
                                e.preventDefault();
                                handleClick(note);
                              }} >
                                {note.replace(".pdf","")}
                              </div>
                          ))
                          
                      }
                     
                      <Modal 
                         isOpen={modal}
                         onRequestClose={closeModal}
                         style={customStyles}
                         contentLabel="Notes Modal"
                      >
                          <div>
                            <button style={{float: 'right'}} onClick={handleDownload}>Download</button>
                            <button onClick={closeModal}>x</button>
                          </div>

                          
                            <PdfRender pdf={pdfURL}></PdfRender>
                            
                    </Modal>
                    </div>
                    
                   )
                }
            </div>

        </div>
        </WithAnimationLoad>
    );
}

export default NotesPage;