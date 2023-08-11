import { createContext, useContext, useState } from "react"

const AppContext = createContext();

const AppProvider = ({ children }) => {
     const [isLoading, setIsLoading] = useState(true);

    return (
        <AppContext.Provider value={{
            isLoading,
        }}>
            {children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};

export  const useGlobalContext = () => {
     return useContext(AppContext)
}