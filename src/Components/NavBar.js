import React from "react";
import { Link } from "react-router-dom";
import {useGlobalContext} from '../context'

const NavBar = () => {
    const {state, toggleMenu, closeNav} = useGlobalContext()


    return (
        <div className="nav-container">
            <h3>Bloggg</h3>
            <div className="bar"
                style={state.isShowing ? { top: "50px" } : { top: "-150px" }}>
                    <div className="mobile-nav">
                    <ul>
                        <Link to='/'><button onClick={closeNav}>Blogs</button></Link>
                        <Link to='/addnew' onClick={closeNav}><button>Create Blog</button></Link>
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
