import React,{useState, useContext} from 'react';
import styles from './ReviewForm.module.scss';
import {firestoreDB} from "../../services/firebase";
import { UserContext } from '../../providers/UserProvider';
import { useHistory } from "react-router-dom";

const ReviewForm = () => {

    const user = useContext(UserContext);
    const history = useHistory();

    const [formData,setFormData] = useState({
        name:"",
        comment:"",
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
            comment:"",
            linkedinId:"",
        });
        
        history.push("/home");
    }
    const sendData = () => {
       
            firestoreDB.collection("reviews").add({
            name: formData.name,
            comment: formData.comment,
            linkedinId: formData.linkedinId,
            tags: ["#changethistag"],
            approved: false
            }).then(() =>{
                alert("Form submitted successfully");
            }).catch((err)=>{
                alert("Error!");
                console.error(err);
            })
        }

    return (
        <form className={styles.reviewForm} onSubmit={(e) => {
            e.preventDefault();
            console.log("review-added");
        }}>
            <label for="reviewer-name" className="field">
                <span>Name</span>
                <input id="reviewer-name" type="text" name="name" placeholder="Enter your name" value={formData.name || ''} onChange={updateInput} required/> 
            </label>
            <label for="reviewer-linkedin-id">
                <span>Linkedin Profile Link</span>
                <input id="reviewer-linkedin-id" type="text" name="linkedinId" placeholder="Enter your linkedIn Id" value={formData.linkedinId || ''} onChange={updateInput} required/> 
            </label>
            <label for="reviewer-comment" className="field">
                <span>Review</span>
                <textarea id="reviewer-comment" name="comment" rows={4} placeholder="Enter your review" value={formData.comment || ''} onChange={updateInput} required/> 
            </label>
            <button type="submit" className={styles.submitButton}  onClick={handleSubmit}>
                Add Review
            </button>
        </form>
    );
} 

export default ReviewForm;