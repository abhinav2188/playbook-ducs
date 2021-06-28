import React,{useState} from 'react';
import styles from './ReviewForm.module.scss';

const ReviewForm = () => {
    const [formData,setFormData] = useState({
        name:"",
        comment:"",
        linkedinId:"",
        isApproved:false,
        tags:[]
    });

    const updateInput = (e) =>{
        setFormData(data => ({
            ...data,
            [e.target.name] : e.target.value
        }));
    }

    return (
        <form className={styles.reviewForm} onSubmit={(e) => {
            e.preventDefault();
            console.log("review-added");
        }}>
            <label for="reviewer-name" className="field">
                <span>Name</span>
                <input id="reviewer-name" type="text" name="name" value={formData.name} onChange={updateInput}/> 
            </label>
            <label for="reviewer-linkedin-id">
                <span>Linkedin Profile Link</span>
                <input id="reviewer-linkedin-id" type="text" name="linkedinId" value={formData.linkedinId} onChange={updateInput}/> 
            </label>
            <label for="reviewer-comment" className="field">
                <span>Review</span>
                <textarea id="reviewer-comment" name="comment" rows={4} value={formData.comment} onChange={updateInput}/> 
            </label>
            <button type="submit" className={styles.submitButton} >
                Add Review
            </button>
        </form>
    );
} 

export default ReviewForm;