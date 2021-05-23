import React from 'react'
import Marquee from '../../UI/marquee'
import TeamCard from "./teamCard"
import "./mtt.scss"

const team = (props) => {
    
    const im = <img src="https://picsum.photos/200" alt=""/>
    const cards = [
        <TeamCard name="Abhinav Rastogi" work="Frontend" socail="" image={im}/>,
        <TeamCard name="Kritika" work="Design" socail="" image={im}/>,
        <TeamCard name="Vasu Sehgal" work="Content" socail="" image={im}/>,
        <TeamCard name="Harsh Kumar" work="Backend" socail="" image={im}/>,
    ]
    
    return (
        <div className="team-container">
            <h2>Meet the Team</h2>
            <Marquee itemsArray={cards}/>
        </div>
    );
}


export default team;