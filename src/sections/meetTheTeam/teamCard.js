import React from 'react'
import PropTypes from 'prop-types'
import "./mtt.scss"

const Card = (props) => {
    return(
        <div className="team-card">
            <div className="profile-img">{props.image}</div>
            <h4>{props.name}</h4>
            <div className="social-handles">
                {props.socail}
            </div>
            <h5>{props.work}</h5>
        </div>
    );
}  

Card.propTypes = {
    name: PropTypes.string,
    socail: PropTypes.array,
    work: PropTypes.string,
    image : PropTypes.object
}

export default Card;