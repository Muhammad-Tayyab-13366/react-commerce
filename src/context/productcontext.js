import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducerFunc from "../reducer/productReducer"
const AppContext = createContext();


const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({children}) => {
   
    const initialState = {
        isLoading: false,
        isError: false,
        products: [],
        featureProducts: []
    }

    
    const [state, dispatch] = useReducer(reducerFunc, initialState);
    const getProducts = async (url) => {
        dispatch({type: "SET_LOADING"});
        try {
            const res = await axios.get(url);
            const products = await res.data;
    
            dispatch({type: "SET_API_DATA", payload: products});
            console.log(state)
            
    
        } catch (error) {
            dispatch({type: "API_ERROR"});
        }
    }

    useEffect(() => {
        getProducts(API);
        
    }, [])

    return( <AppContext.Provider value={{...state}}>
        {children}
    </AppContext.Provider>
    )
}

const useProductContext = () => {

    return useContext(AppContext)
}

export {AppProvider, AppContext, useProductContext}