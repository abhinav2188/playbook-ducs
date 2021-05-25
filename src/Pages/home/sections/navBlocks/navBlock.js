import React from 'react';
import PropTypes from 'prop-types';
import "./navBlocks.scss";

const Card = (props) => {
    return (
        <div className='card-container'>
            <div className="card">
                <div>
                    <div className="card-svg" style={{backgroundColor:props.color}}> {props.imageSvg} </div>
                    <h2 class="card-title">{props.title}</h2>
                </div>
                <p>{props.excerpt}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    imageSvg : {
        type : PropTypes.object,
        required : true
    },
    title : PropTypes.string,
    excerpt : PropTypes.string,
    color: PropTypes.string
}

export default Card;
