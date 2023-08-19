import { useEffect, useState } from "react";
import "../index.css";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";

const UpdateForm = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('Tech');
    const [content, setContent] = useState('')

    const {updateHandler } = useGlobalContext()

    const { id } = useParams();

    const findSingleBlog = async () => {
        const response = await fetch(`https://blogs-clone-5eedb-default-rtdb.firebaseio.com/blogs/${id}.json`)
        const data = await response.json();
        setTitle(data.title)
        setAuthor(data.author)
        setCategory(data.category)
        setContent(data.content)
    }
    
     const handleSubmit = (e) => {
        e.preventDefault();
        updateHandler(id, title, author, category, content);
        setTitle('')
        setAuthor('')
        setCategory('Tech')
        setContent('')
    }


    useEffect(() => {
        findSingleBlog()
    }, [])


    return (
        <form  onSubmit={handleSubmit} className="form-container">
            <div className="title-container">
                <label htmlFor="title">Title:</label>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
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
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
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
                    onChange={(e) => setContent(e.target.value)}
                    required
                    value={content}
                    type="text" id="content" />
            </div>
            <div className="button-container">
                <button type="submit">UPDATE</button>

                  
                   
            </div>
        </form>
    )
}

export default UpdateForm