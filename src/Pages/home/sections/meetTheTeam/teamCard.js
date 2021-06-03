import React,{useState} from 'react'
import PropTypes from 'prop-types'
import "./mtt.scss"
import {fb,insta,github,linkedin} from  "../../../../svgs/socialMediaIcons"
import {useSpring,animated,useTransition} from 'react-spring'

const Card = (props) => {
    const [show,setShow] = useState(false);
    const animateStyles = useSpring({
        transform : show?'translateY(0px) scale(1.5)':'translateY(0) scale(1)',
    })
    const animateOpacity = useSpring({
        opacity: show?1:0,
        delay:200
    })
    return(
        <div className="team-card" onhover={()=>setShow(true)} onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} >
            <animated.div className="profile-img" style={animateStyles}>
                <img  src={props.imageSrc} />
            </animated.div>
            {
                show&&
            <animated.div style={animateOpacity} className="profile-info">
                <div className="text">
                    <p className="name">{props.name}</p>
                    <p className="work">{props.work}</p>
                </div>
                <div className="social-handles">
                    {[
                    props.social.github && 
                    <a href={props.social.github} className="social-link">
                        {github}
                    </a>,
                    props.social.linkedin && 
                    <a href={props.social.linkedin} className="social-link">
                        {linkedin}
                    </a>,
                    props.social.facebook && 
                    <a href={props.social.facebook} className="social-link">
                        {fb}
                    </a>,
                    props.social.instagram && 
                    <a href={props.social.instagram} className="social-link">
                        {insta}
                    </a>,
                    ]}
                </div>
            </animated.div>
            }
        </div>
    );
}  

Card.propTypes = {
    name: PropTypes.string,
    social: PropTypes.object,
    work: PropTypes.string,
    imageSrc : PropTypes.string,
}

export default Card;