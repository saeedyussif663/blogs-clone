import { Link } from "react-router-dom"

const EmptyBlog = () => {
    return (
        <section>
            <h1>you have no blogs at the momment</h1>
            <button><Link to='/addnew'>Add new blog</Link></button>
        </section>
    )
} 

export default EmptyBlog