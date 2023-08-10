
import "../index.css";

const Form = ({title}) => {
    return (
        <form className="form-container">
            <div className="title-container">
                <label htmlFor="title">Title:</label>
                <input type="text" id="author" required maxLength="70"/>
            </div>
            <div className="author-container">
                <label htmlFor="author">Author:</label>
                <input type="text" id="author" required maxLength="70" />
                <i className="fa-solid fa-user"></i>
            </div>
            <div className="category-container">
                <label htmlFor="category">Category:</label>
                <select type="text" id="catergory" required>
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
                <textarea type="text" id="content" />
            </div>
            <div className="button-container">
                <button>{title}</button>
            </div>
        </form>
    )
}

export default Form