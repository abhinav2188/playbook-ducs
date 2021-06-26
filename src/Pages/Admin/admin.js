import React from 'react'
import './admin.scss'

const Admin = (props) => {
    return (
        <div className="admin-page main">
            <form className="review-form" onSubmit={(e) => {
                e.preventDefault();
                console.log("review-added");
            }}>
                <label for="reviewer-name">
                    <span>Reviewer Name</span>
                    <input id="reviewer-name" type="text" name="name" /> 
                </label>
                <label for="reviewer-comment">
                    <span>Comment</span>
                    <textarea id="reviewer-comment" name="comment" /> 
                </label>
                <label for="reviewer-linkedin-id">
                    <span>Linkedin Profile Link</span>
                    <input id="reviewer-linkedin-id" type="text" name="linkedinId" /> 
                </label>
                <label>
                    
                </label>
                <button type="submit">
                    Add Review
                </button>
            </form>
        </div>
    );
}

export default Admin;