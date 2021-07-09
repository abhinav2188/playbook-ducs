import React,{useState, useContext} from 'react';
import styles from './ReviewForm.module.scss';
import {firestoreDB} from "../services/firebase";
import { UserContext } from '../providers/UserProvider';
import { useHistory } from "react-router-dom";

const ReviewForm = (props) => {

    const user = useContext(UserContext);
    const history = useHistory();

    const [formData,setFormData] = useState({
        name:user?.displayName || "",
        review:"",
        linkedinId:"",
    });

    const updateInput = (e) =>{
        setFormData(data => ({
            ...data,
            [e.target.name] : e.target.value
        }));
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(!user){
            alert("Please login to submit a review");
            history.push("/home");
        }else{
            sendData();
        }
        
        setFormData({
            name:"",
            review:"",
            linkedinId:"",
        });
        
        history.push("/home");
    }
    const sendData = () => {
       
            firestoreDB.collection("reviews").add({
            name: formData.name,
            review: formData.review,
            linkedinId: formData.linkedinId,
            tags: ["changethistag"],
            approved: false
            }).then(() =>{
                alert("Form submitted successfully");
            }).catch((err)=>{
                alert("Error!");
                console.error(err);
            })
        }

    return (
        <form className={`${styles.reviewForm} ${props.className}`} onSubmit={handleSubmit}>
            <label for="reviewer-name" className="field">
                <span>Name</span>
                <input id="reviewer-name" type="text" name="name" value={formData.name || ''} onChange={updateInput} disabled={user ? true:false} required/> 
            </label>
            <label for="reviewer-linkedin-id">
                <span>Linkedin Profile Link</span>
                <input id="reviewer-linkedin-id" type="text" name="linkedinId" pattern="((http(s?)://)*([www])*\.|[linkedin])[linkedin/~\-]+\.[a-zA-Z0-9/~\-_,&=\?\.;]+[^\.,\s<]" value={formData.linkedinId || ''} onChange={updateInput} required/> 
            </label>
            <label for="reviewer-comment" className="field">
                <span>Review</span>
                <textarea id="reviewer-comment" name="review" rows={6} value={formData.review || ''} onChange={updateInput} required/> 
            </label>
            <button type="submit" className={styles.submitButton}>
                Submit
            </button>
        </form>
    );
} 

export default ReviewForm;