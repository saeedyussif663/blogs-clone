import { useParams } from "react-router-dom"

import Loader from "./Loader";

import { useGlobalContext } from "../context";

import { useEffect, useState } from "react"

const SingleBlog = () => {
    const { state } = useGlobalContext();
    const { blogs } = state;


    const [isLoading, setIsLoading] = useState(true);
    const [singleBlog, setSingleBlog] = useState('')
    const { id } = useParams();
    
    const findSingleBlog =  (id) => {
      blogs.forEach(element => {
          if (id === element.id) {
            setSingleBlog(element)
        }
      });
    } 

    useEffect(() => {
        findSingleBlog(id)
    }, [])


    
    return (
        <div className="single-blog">
            <div className="single-img-container">
                <img src={`https://mdbcdn.b-cdn.net/img/new/slides/008.jpg`}alt={singleBlog.title} />
            </div>
            <div className="identifiers">
                <div className="details-container">
                    <img src={`https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).jpg`}alt={singleBlog.author} />
                    <span>{singleBlog.author}</span>
                    <span>{singleBlog.dateCreated}</span>
                    <span>{singleBlog.category}</span>
                </div>
                <div className="action-container">
                    <i className="fa-solid fa-trash"></i>
                    <i className="fa-regular fa-pen-to-square"></i>
                </div>
            </div>
              <div className="content-conatainer">
                    <p>{singleBlog.content}</p>
                </div>
        </div>
    )
}

export default SingleBlog