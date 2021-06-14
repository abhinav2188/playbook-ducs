import React from 'react'
import './home.scss'

import Hero from './sections/hero/hero'
import NavBlocks from './sections/navBlocks/navBlocks'
import NewToDucs from './sections/newDucs/newDucs'
import MTT from './sections/meetTheTeam/meetTheTeam'
import WithAnimationLoad from '../../HOC/WithAnimationLoad'
import Layout from "../../Layout/layout"

const Page = () => {
    return(
        <Layout>
            <WithAnimationLoad className="home">
                <Hero/>
                <NavBlocks/>
                <NewToDucs/>
                <MTT />
            </WithAnimationLoad>
        </Layout>
   );
}

export default Page;