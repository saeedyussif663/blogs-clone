import { createContext, useContext, useReducer } from "react";

import {reducer} from '../src/reducer'



const AppContext = createContext();

const AppProvider = ({ children }) => {

    const intialState = {
        isLoading: true,
        isShowing: false,
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


    const [state, dispatch] = useReducer(reducer, intialState);

    return (
        <AppContext.Provider value={{
            state,
            toggleMenu,
            closeNav,
            submitHandler,
        }}>
            {children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};

export  const useGlobalContext = () => {
     return useContext(AppContext)
}