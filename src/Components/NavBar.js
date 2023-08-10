import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [isShowing, setIsShowing] = useState(false);

    const toggleMenu = () => {
        setIsShowing(prevIsShowing =>  !prevIsShowing);
    }

    return (
        <div className="nav-container">
            <h3>Bloggg</h3>
            <div className="bar"
                style={isShowing ? { top: "50px" } : { top: "-100px" }}>
                    <div className="mobile-nav">
                    <ul>
                        <Link to='/'><button>Blogs</button></Link>
                        <Link to='/addnew'><button>Create Blog</button></Link>
                        </ul>
                    </div>
                </div>
            <button className="menu" onClick={toggleMenu}>
                Menu
            </button>
        </div>
    );
}

export default NavBar;
