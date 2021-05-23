import React from 'react';
import './layout.scss'
import Header from './Header'
import Footer from './Footer'

const Layout = props => {
    return(
        <div className="layout">
            <Header />
            <div className="main">
                {props.children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;