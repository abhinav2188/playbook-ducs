import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import "./sidebar.scss";
import { IconContext } from "react-icons";

function Sidebar() {
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
          <Link to="#" className="menu">
            <IoMdClose />
          </Link>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/explore" className="nav-link">Explore</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/" className="nav-link">Notes</Link>
          <Link to="/" className="sign-up-btn">
            Sign up
          </Link>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
