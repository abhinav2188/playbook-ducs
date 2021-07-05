import React from 'react'
import './footer.scss'

const footer = () => {
    return (
        <div className="footer">
        <div className="bottom-nav">
            <h3>Help your juniors and colleagues with your contribution to our playbook.</h3>
            <div className="form-buttons">
                <button>Share your moments of DUCS</button>
                <button>Upload your Notes</button>
            </div> 
        </div>

        <footer >
            <p>©2021 DUCS Playbook</p>
        </footer>
        </div>
    );
}

export default footer;