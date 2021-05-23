import React, { useEffect, useRef, useState } from 'react'
import Marquee from '../../UI/marquee2'
import TeamCard from "./teamCard"
import "./mtt.scss"
import { set } from 'animejs'

const Team = (props) => {
    
    const [count,setCount] = useState(4);
    const teamRef = useRef(null);
    const im = <img src="https://picsum.photos/200" alt=""/>
    const cards = [
        <TeamCard name="Abhinav Rastogi" work="Frontend" socail="" image={im}/>,
        <TeamCard name="Kritika" work="Design" socail="" image={im}/>,
        <TeamCard name="Vasu Sehgal" work="Content" socail="" image={im}/>,
        <TeamCard name="Harsh Kumar" work="Backend" socail="" image={im}/>,
    ]
    
    useEffect(()=>{
        console.log(teamRef.current.offsetHeight);
        console.log(window.innerWidth);
        if(window.innerWidth >= 1024) setCount(4);
        else if(window.innerWidth >= 768) setCount(2);
        else setCount(1);
        console.log(count);
    },[])
    return (
        <div className="team-container" ref={teamRef} >
            <h2>Meet the Team</h2>
            <Marquee itemsArray={cards} activeItemsCount={count}/>
        </div>
    );
}


export default Team;