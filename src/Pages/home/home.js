import React from 'react'
import './home.scss'

import Hero from './sections/hero/hero'
import NavBlocks from './sections/navBlocks/navBlocks'
import NewToDucs from './sections/newDucs/newDucs'
import MTT from './sections/meetTheTeam/meetTheTeam'
import WithAnimationLoad from '../../HOC/WithAnimationLoad'

const Page = () => {
    return(
        <WithAnimationLoad className="home">
            <Hero/>
            <NavBlocks/>
            <NewToDucs/>
            <MTT />
        </WithAnimationLoad>
   );
}

export default Page;