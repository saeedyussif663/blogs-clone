import { useParams} from "react-router-dom"
import { useGlobalContext } from "../context"

const Modal = () => {
    const { toggleModal, deleteBlog} = useGlobalContext();
    const { id } = useParams();



    return (
        <>
        <div className="overlay"  onClick={toggleModal}></div>
            <div className="modal">
                <section>
                    <h3>Proceed to delete</h3>
                    <p>Are you sure you want to delete this block?</p>
                    <div className="buttons-container">
                        <button onClick={() => deleteBlog(id)}>Delete</button>
                        <button onClick={toggleModal}>Cancel</button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Modal