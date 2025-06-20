import axios from "axios";
import { createContext, useContext, useEffect } from "react";

const AppContext = createContext();


const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({children}) => {
   
    const getProducts = async (url) => {
        const res = await axios.get(url);
        console.log(res)

    }

    useEffect(() => {
        getProducts(API);

    }, [])

    return( <AppContext.Provider value={{myname: "Tayyab"}}>
        {children}
    </AppContext.Provider>
    )
}

const useProductContext = () => {

    return useContext(AppContext)
}

export {AppProvider, AppContext, useProductContext}