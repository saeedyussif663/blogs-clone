import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context"
import EmptyBlog from "./Empty-blog";

import '../index.css'

const Home = () => {
    const navigate = useNavigate()

    const { state } = useGlobalContext();
    const { blogs } = state;
    let randomImage;
    
    const openSingleBlog = (id) => {
        navigate( `/blogs/${id}`)
    }

    const random = () => {
      
        let num = Math.floor((Math.random() * 99) + 1) 
        if (num < 10) {
            randomImage = `00${num}`
        } else if (num >= 10 && num < 100) {
            randomImage = `0${num}`
        }
       return  randomImage
    }



    return (
        <div className="blogs-container">
            <p>stories</p>
            { blogs.length === 0 ? <EmptyBlog/> : blogs.map(blog => {
                random () 
    
                return (
                <div key={blog.id} className="blog" onClick={() => openSingleBlog(blog.id)}>
                    <div className="img-container">
                          <img src={`https://mdbcdn.b-cdn.net/img/new/slides/${randomImage}.jpg`} alt={blog.category} />
                        </div>
                    <div className="blog-details">
                            <h4>{blog.title}</h4>
                        <div className="rest">
                            <p>published by {blog.author}</p>
                            <div className="category"><i className="fa-solid fa-paintbrush"></i>{blog.category}</div>
                            <p className="date-created">{blog.dateCreated}</p>
                        </div>
                    </div>
                    <div className="action">
                          <p>click to view</p>  
                    </div>
                </div>
                ) 
            }
            )}
        </div>

    )
}

export default Home