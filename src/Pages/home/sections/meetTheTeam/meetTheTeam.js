import React, { useEffect, useRef, useState } from 'react'
import Marquee from '../../../../UI/marquee2'
import TeamCard from "./teamCard"
import "./mtt.scss"

// const styles = {
//     teamContainer = {
//         width: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         padding: '4rem 0',
//         margin: '6rem 0',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
    
//     .team-card{
//         min-width: 14rem;
//         border:1px rgba(0,0,0,0.1) solid;
//         border-radius: 0.5rem;
//         padding: 2rem;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         .profile-img{
//             width:4rem;
//             height: 4rem;
//             padding : 0.25rem;
//             border:1px rgba(0,0,0,0.5) solid;
//             border-radius: 50%;
//             img{
//                 width: 100%;
//                 object-fit: contain;
//                 border-radius: 50%;
//             }
//         }
//     }    
// }


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
        <div className="team-container sectional-margin" ref={teamRef} >
            <h2>Meet the Team</h2>
            <Marquee itemsArray={cards} activeItemsCount={count}/>
        </div>
    );
}


export default Team;