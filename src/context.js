import { createContext, useContext, useEffect, useReducer } from "react";


import {reducer} from '../src/reducer'



const AppContext = createContext();

const AppProvider = ({ children }) => {


    const intialState = {
        isModalShowing: false,
        isLoading: true,
        isShowing: false,
        singleBlog: [],
        blogs : [],
        blogDetails: {
            id: '',
            title: '',
            author: '',
            category: '',
            content: '',
            dateCreated: ''
        }
       
    }

    const submitHandler = (e, title, author, category, content) => {
        e.preventDefault()
        dispatch({
            type: "SUBMIT",
            titleRef: title,
            authorRef: author,
            categoryRef: category,
            contentRef: content
        })
    }


    const toggleMenu = () => {
        dispatch({ type: "TOGGLEMENU" });
    }

    const closeNav = () => {
        dispatch({type: "CLOSE"})
    }

    const toggleModal = () => {
        dispatch({ type: 'TOGGLEMODAL' })
    }

 
    const fetchBlogs = async () => {
        dispatch({type: 'CLEARBLOGARRAY'})
        try {
            const response = await fetch('https://blogs-clone-5eedb-default-rtdb.firebaseio.com/blogs.json')
       let  data = await response.json();
        for (const key in data) {
            const element = data[key];
            dispatch({type: 'PUSHBLOG', key, element})
            
            }
        dispatch({type: 'ISLOADING'})
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        fetchBlogs();
    }, [])

    const [state, dispatch] = useReducer(reducer, intialState);

    return (
        <AppContext.Provider value={{
            state,
            toggleMenu,
            closeNav,
            submitHandler,
            toggleModal,
            fetchBlogs
        }}>
            {children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};

export  const useGlobalContext = () => {
     return useContext(AppContext)
}