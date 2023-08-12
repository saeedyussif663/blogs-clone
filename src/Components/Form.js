import { useRef } from "react";
import "../index.css";
import { useGlobalContext } from "../context";

const Form = ({ action }) => {
    const { submitHandler } = useGlobalContext();
    
    let titleRef = useRef('')
    let authorRef = useRef('')
    let categoryRef = useRef('Tech')
    let contentRef = useRef('')

    const handleChangle = (event) =>{
         titleRef.current = event.target.value;
    }

    return (
        <form className="form-container">
            <div className="title-container">
                <label htmlFor="title">Title:</label>
                <input
                    value={titleRef.current.value}
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
                    type="text" id="catergory" required>
                    <option value="Tech">Tech</option>
                    <option value="Food">Food</option>
                    <option value="Finance">Finance</option>
                    <option value="Travel">Travel</option>
                    <option value="Politics">Politics</option>
                    <option value="Inspiration">Inspiration</option>
                </select>
            </div>
            <div className="content-container" required>
                <label htmlFor="content">Content:</label>
                <textarea
                    ref={contentRef}
                    type="text" id="content" />
            </div>
            <div className="button-container">
                <button
                    onClick={
                        (e) => {
                        
                        submitHandler(e,titleRef, authorRef, categoryRef, contentRef)}
            }
>
                    {action}</button>
            </div>
        </form>
    )
}

export default Form