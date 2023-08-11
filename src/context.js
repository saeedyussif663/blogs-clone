import { createContext, useContext, useReducer } from "react";

import {reducer} from '../src/reducer'



const AppContext = createContext();

const AppProvider = ({ children }) => {

    const intialState = {
        isLoading: true,
        isShowing: false,
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
            closeNav
        }}>
            {children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};

export  const useGlobalContext = () => {
     return useContext(AppContext)
}