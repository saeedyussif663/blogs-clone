import { useParams } from "react-router-dom"

import Loader from "./Loader";

import { useEffect, useState } from "react"

const SingleBlog = () => {
    const [isLoading, setIsLoading] = useState(true);
    let array;
    const { id } = useParams();
    
    const renderSingleBlog = async (id) => {
        try {
            const response = await fetch(`https://blogs-clone-5eedb-default-rtdb.firebaseio.com/blogs/${id}.json`)
            const data = await response.json();
            array.push(data)
            setIsLoading(isLoading => !isLoading);
        } catch (error) {
            console.log(error);
        }
          
    }

    useEffect(() => {
        renderSingleBlog(id)
    }, [])

    console.log(array)
    // const {title, content, category, dateCreated, author} = array

    return (
        <h1></h1>
    )
}

export default SingleBlog