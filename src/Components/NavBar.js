import { Link } from "react-router-dom"
 

const NavBar = () => {
    return (
        <div className="nav-container">
            <nav>
            <h3>Bloggg</h3>
                <div className="bar">
                    <ul>
                    <Link to='/'><button>Blogs</button></Link>
                    <Link to='/addnew'><button>Create Blog</button></Link>
                    </ul>
                </div>
            </nav>
                <button className="menu">Menu</button>
        </div>
    )
}

export default NavBar