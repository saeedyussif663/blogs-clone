import { useParams } from "react-router-dom"

import Loader from "./Loader";

import { useEffect, useState } from "react"

const SingleBlog = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [blog, setBlog] = useState('')
    const { id } = useParams();
    
    const fetchSingleBlog = async (id) => {
        try {
            const response = await fetch(`https://blogs-clone-5eedb-default-rtdb.firebaseio.com/blogs/${id}.json`)
            const data = await response.json()
            setBlog(data)
            setIsLoading(prev => !prev)
        } catch (error) {
            console.log(error);
        }
    } 

    useEffect(() => {
        fetchSingleBlog(id)
    }, [])

    
    return (
        <div className="single-blog">
            <h1>{blog.title}</h1>
        </div>
    )
}

export default SingleBlog