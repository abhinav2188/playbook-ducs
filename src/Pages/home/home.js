import React from 'react'
import './home.scss'

import Hero from './sections/hero/hero'
import NavBlocks from './sections/navBlocks/navBlocks'
import NewToDucs from './sections/newDucs/newDucs'
import MTT from './sections/meetTheTeam/meetTheTeam'


const page = () => {
    return(
        <div className="home">
            <Hero/>
            <NavBlocks/>
            <NewToDucs/>
            <MTT />
        </div>
   );
}

export default page;