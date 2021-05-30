import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import "./sidebar.scss";
import { IconContext } from "react-icons";

function sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu">
            <BsList onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <Link to="#" className="menu navbar-toggle">
            <IoMdClose />
          </Link>
        </nav>
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/">Notes</Link>
        <Link to="/" className="sign-up-btn">
          Sign up
        </Link>
      </IconContext.Provider>
    </>
  );
}

export default sidebar;
