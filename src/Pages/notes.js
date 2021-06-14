import React, { useState,useEffect, useContext } from 'react'
import TreeMenu from "../UI/TreeMenu"
import notesImg from "../svgs/notes-img.svg"
import "./notes.scss"
import {UserContext} from "../providers/UserProvider";
import {firebaseStorage} from  "../services/firebase";
import PdfRender from "./pdfRender";
import Modal from 'react-modal';
import WithAnimationLoad from "../HOC/WithAnimationLoad";
import Layout from "../Layout/layout";

const NotesPage = () => {       

    const [showIndex,setShowIndex] = useState(false);
    
    const [notes,setNotes] = useState([]);
   

    const [semester,setSemester] = useState('sem1');
    const [subject,setSubect] = useState('');

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

    async function fetchNotes(sem){

        let notesUrl = [];  
       await firebaseStorage.child('notes/').listAll().then(function(res) {
            res.items.forEach(function(folderRef) {
            let gsReference = folderRef.toString();
            let fileName = (gsReference.split(['/'])[4]);
            notesUrl.push(fileName);

            });
            setNotes(notesUrl);
        }).catch(function(error) {

        });
    }

    async function fetchPdf(fileName){
       // Create a reference to the file we want to download
        let starsRef = firebaseStorage.child(`notes/${fileName}`);

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

  async function handleClick(fileName){
       const url = await fetchPdf(fileName);

        if(url !== '' || url !== undefined || url !== null){
            setpdfURL(url);
            setModal(true);
        }else{
            alert("Something went wrong");
        }
        
    }


    const notesIndexContent = [
        <TreeMenu toggleHead="Semester 1" onClick={(e)=>{
            e.preventDefault();
            setSemester('semester 1');
        }}> 
        {[
            <p>DBMS</p>,
            <p>OOPs</p>,
            <p>Java</p>,
            <p>Operating Systems</p>
        ]}
        </TreeMenu>,
        <TreeMenu toggleHead="Semester 2" onClick={(e)=>{
            e.preventDefault();
            setSemester('semester 2');
        }}>
        {[
            <p>DBMS</p>,
            <p>OOPs</p>,
            <p>Java</p>,
            <p>Operating Systems</p>
        ]}
        </TreeMenu>,
        <TreeMenu toggleHead="Semester 3" onClick={(e)=>{
            e.preventDefault();
            setSemester('semeseter 3');
        }}>
        {[
            <p>DBMS</p>,
            <p>OOPs</p>,
            <p>Java</p>,
            <p>Operating Systems</p>
        ]}
        </TreeMenu>,
    
    ];

    return(
        
        <Layout>
        <WithAnimationLoad className="notes-page container">
            
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
                          notes.map((note, index) => (
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
                            <PdfRender pdf={pdfURL}></PdfRender>
                            
                    </Modal>
                    </div>
                    
                   )
                }

                
              

            </div>

        </WithAnimationLoad>
        </Layout>
    );
}

export default NotesPage;