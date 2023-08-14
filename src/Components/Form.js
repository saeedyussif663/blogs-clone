import { useRef } from "react";
import "../index.css";
import { useGlobalContext } from "../context";

const Form = ({ action }) => {

    const { submitHandler } = useGlobalContext();
    
    let titleRef = useRef(null)
    let authorRef = useRef(null)
    let categoryRef = useRef('Tech')
    let contentRef = useRef(null)


    return (
        <form action="POST" className="form-container">
            <div className="title-container">
                <label htmlFor="title">Title:</label>
                <input
                    ref={titleRef}
                    type="text"
                    id="title"
                    required
                    maxLength="70"
                />
            </div>
            <div className="author-container">
                <label htmlFor="author">Author:</label>
                <input
                    ref={authorRef}
                    type="text" id="author" required maxLength="70" />
                <i className="fa-solid fa-user"></i>
            </div>
            <div className="category-container">
                <label htmlFor="category">Category:</label>
                <select
                    ref={categoryRef}
                    type="text" id="catergory">
                    <option value="Tech">Tech</option>
                    <option value="Food">Food</option>
                    <option value="Finance">Finance</option>
                    <option value="Travel">Travel</option>
                    <option value="Politics">Politics</option>
                    <option value="Inspiration">Inspiration</option>
                </select>
            </div>
            <div className="content-container" >
                <label htmlFor="content">Content:</label>
                <textarea
                    required
                    ref={contentRef}
                    type="text" id="content" />
            </div>
            <div className="button-container">
            <button type="sumbit"
                        onClick={
                     (e) => {
                         submitHandler(e, titleRef, authorRef, categoryRef, contentRef)
                    }}
            >  {action}</button>
                  
                   
            </div>
        </form>
    )
}

export default Form