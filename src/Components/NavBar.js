import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [isShowing, setIsShowing] = useState(true);

    const toggleMenu = () => {
        setIsShowing(prevIsShowing => {
            console.log('working');
            return !prevIsShowing
        });
    }

    return (
        <div className="nav-container">
            <h3>Bloggg</h3>
            {isShowing && (
                <div className="bar">
                    <div className="mobile-nav">
                    <ul>
                        <Link to='/'><button>Blogs</button></Link>
                        <Link to='/addnew'><button>Create Blog</button></Link>
                        </ul>
                    </div>
                </div>
            )}
            <button className="menu" onClick={toggleMenu}>
                Menu
            </button>
        </div>
    );
}

export default NavBar;
