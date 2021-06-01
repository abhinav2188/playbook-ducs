import React, { useState } from 'react'
import TreeMenu from "../UI/TreeMenu"
import notesImg from "../svgs/notes-img.svg"
import "./notes.scss"


const NotesPage = () => {       

    const [showIndex,setShowIndex] = useState(false);

    const notesIndexContent = [
        <TreeMenu toggleHead="Semester 1">
        {[
            <p>DBMS</p>,
            <p>OOPs</p>,
            <p>Java</p>,
            <p>Operating Systems</p>
        ]}
        </TreeMenu>,
        <TreeMenu toggleHead="Semester 2">
        {[
            <p>DBMS</p>,
            <p>OOPs</p>,
            <p>Java</p>,
            <p>Operating Systems</p>
        ]}
        </TreeMenu>,
        <TreeMenu toggleHead="Semester 3">
        {[
            <p>DBMS</p>,
            <p>OOPs</p>,
            <p>Java</p>,
            <p>Operating Systems</p>
        ]}
        </TreeMenu>,
    
    ];

    return(
        
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
                <div className="notes-pdf-container">
                    <div className="notes-pdf"></div>
                    <div className="notes-pdf"></div>
                    <div className="notes-pdf"></div>
                    <div className="notes-pdf"></div>
                    <div className="notes-pdf"></div>
                    <div className="notes-pdf"></div>
                    <div className="notes-pdf"></div>
                    <div className="notes-pdf"></div>
                </div>

            </div>

        </div>
    );
}

export default NotesPage;