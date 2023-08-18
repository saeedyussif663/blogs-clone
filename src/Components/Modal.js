import { useParams, useNavigate } from "react-router-dom"
import { useGlobalContext } from "../context"

const Modal = () => {
    const { toggleModal, fetchBlogs } = useGlobalContext();
    const { id } = useParams();
    const navigate = useNavigate()

    const deleteBlog = async () => {
        try {
            const response = await fetch(`https://blogs-clone-5eedb-default-rtdb.firebaseio.com/blogs/${id}.json`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            fetchBlogs()
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <div className="overlay"  onClick={toggleModal}></div>
            <div className="modal">
                <section>
                    <h3>Proceed to delete</h3>
                    <p>Are you sure you want to delete this block?</p>
                    <div className="buttons-container">
                        <button onClick={deleteBlog}>Delete</button>
                        <button onClick={toggleModal}>Cancel</button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Modal