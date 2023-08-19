import { useRef, useState } from "react";
import "../index.css";
import { useGlobalContext } from "../context";

const Form = () => {

    const { submitHandler } = useGlobalContext();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('Tech');
    const [content, setContent] = useState('');

    
    const handleSubmit = (event) => {
        event.preventDefault();
        submitHandler(
            title,
            author,
            category,
            content
        );
        setTitle('');
        setAuthor('');
        setCategory('Tech');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="title-container">
                <label htmlFor="title">Title:</label>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    id="title"
                    required
                    maxLength="70"
                />
            </div>
            <div className="author-container">
                <label htmlFor="author">Author:</label>
                <input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    type="text" id="author" required maxLength="70" />
                <i className="fa-solid fa-user"></i>
            </div>
            <div className="category-container">
                <label htmlFor="category">Category:</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
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
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    type="text" id="content" />
            </div>
            <div className="button-container">
            <button type="submit">POST</button>
            </div>
        </form>
    )
}

export default Form