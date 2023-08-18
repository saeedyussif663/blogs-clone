import { useParams } from "react-router-dom"

import Modal from "./Modal";

import { useGlobalContext } from "../context";

import { useEffect, useState } from "react"

const SingleBlog = () => {
    const { state , toggleModal} = useGlobalContext();
    const { blogs } = state;


    const [isLoading, setIsLoading] = useState(true);
    const [randomImageNum, setRandoomImageNum] = useState(null)
    const [randomPicNum, setRandomPicNum] = useState(null)
    const [singleBlog, setSingleBlog] = useState('')
    const { id } = useParams();
    
    const findSingleBlog =  (id) => {
      blogs.forEach(element => {
          if (id === element.id) {
            setSingleBlog(element)
        }
      });
    } 
    const randomUser = () => {
            let num = Math.floor((Math.random() * 20) + 10) 
            setRandoomImageNum(num)
    }
    
      const random = () => {
      
        let num = Math.floor((Math.random() * 99) + 1) 
        if (num < 10) {
            setRandomPicNum(`00${num}`)
        } else if (num >= 10 && num < 100) {
            setRandomPicNum(`0${num}`)
        }
    }

    useEffect(() => {
        setIsLoading(true)
        randomUser();
        random();
        findSingleBlog(id)
        setIsLoading(false)
    }, [])


    return (
        <>
        {state.isModalShowing && <Modal/>}
        <div className="single-blog">
            <div className="single-img-container">
                <img src={`https://mdbcdn.b-cdn.net/img/new/slides/${randomPicNum}.jpg`}alt={singleBlog.title} />
            </div>
            <div className="identifiers">
                <div className="details-container">
                    <img src={`https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(${randomImageNum}).jpg`}alt={singleBlog.author} />
                    <span>published on:</span>
                    <span className="date-created">{singleBlog.dateCreated}</span>
                    <span>by</span>
                    <span>{singleBlog.author}</span>
                </div>
                <div className="action-container">
                    <i className="fa-solid fa-trash" onClick={toggleModal}></i>
                    <i className="fa-regular fa-pen-to-square"></i>
                </div>
            </div>
            <div className="content-conatainer">
                 <h2>{ singleBlog.title}</h2>
                    <p>{singleBlog.content}</p>
                </div>
            </div>
            </>
    )
}

export default SingleBlog