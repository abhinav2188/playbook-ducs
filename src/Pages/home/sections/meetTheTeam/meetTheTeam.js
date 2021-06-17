import React, { useEffect, useRef, useState } from 'react'
import Marquee from '../../../../UI/marquee'
import TeamCard from "./teamCard"
import "./mtt.scss"


const socialHandles = {
    facebook : "#",
    instagram : "#",
    linkedin : '#',
    github : "#",
};

const Team = (props) => {
    // const [count,setCount] = useState(4);
    // useEffect(()=>{
    //     if(window.innerWidth >= 1024) setCount(4);
    //     else if(window.innerWidth >= 768) setCount(2);
    //     else setCount(1);
    // },[])

    const cards = [
        <TeamCard name="Abhinav Rastogi" work="Frontend" social={socialHandles} imageSrc="https://picsum.photos/200"/>,
        <TeamCard name="Kritika" work="Design" social={socialHandles} imageSrc="https://picsum.photos/200"/>,
        <TeamCard name="Vasu Sehgal" work="Content" social={socialHandles} imageSrc="https://picsum.photos/200"/>,
        <TeamCard name="Harsh Kumar" work="Backend" social={socialHandles} imageSrc="https://picsum.photos/200"/>,
    ]

    return (
        <div className="team-container sectional-margin container" >
            <h2>Meet the Team</h2>
            <div className="team-cards-container">
            {cards}
            </div>
        </div>
    );
}



export default Team;