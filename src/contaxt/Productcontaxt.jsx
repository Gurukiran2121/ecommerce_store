import { createContext , useContext ,useEffect, useReducer} from "react";
import React from "react";
import axios from "axios";
import reducer from '../reducer/ProductReducer'

export const AppContext = createContext()

const url = "https://api.pujakaitem.com/api/products";


const initialState = {
    isLoading : false,
    isError : false,
    products : [],
    featureProducts : [],
    isSingleloading : false,
    singleProduct : {}
}

const AppProvider = ({children})=> {

    
  
    const [state , dispatch] = useReducer(reducer , initialState);   

     


            const getProducts = async (url)=>{
                dispatch({type:"SET_LOADING"});
                try{
                    const response = await axios.get(url)
                    const products = await response.data
                
                    dispatch({type: "SET_API_DATA" , payload:products});
                    } catch (error){
                        dispatch({type:"API_ERROR"});
                    }
            }


    useEffect(()=>{
        getProducts(url) 
    },[])

   

    return(
        <>
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
        </>
    )
};


//my custom hook
const useProductContext = ()=>{
    return useContext(AppContext)
       
   
}

export {AppProvider , useProductContext}