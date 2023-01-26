import { createContext, useContext, useReducer , useEffect } from "react";
import {useProductContext} from '../contaxt/Productcontaxt'
import reducer from "../reducer/Filter_reducer"
const Filter_Context = createContext();

const initialState = {
    filter_products : [],
    all_products : [],
    grid_view : false,

}

export const FilterContaxtProvider = ({children})=>{

 const {products} = useProductContext();
 const [state , dispatch] = useReducer(reducer,initialState);

 const setGridview = ()=>{
  return dispatch({type :"SET_GRIDVIEW"});
 }

 const setListview = ()=>{
  return dispatch({type :"SET_LISTVIEW"});
 }

useEffect(()=>{
    dispatch({type : "LOAD_FILTER_PRODUCTS" , payload : products})
},[products]) 

  return <Filter_Context.Provider value={{...state,setGridview , setListview}}>
    {children}
  </Filter_Context.Provider>
}

export const useFilterContext =()=>{
   return useContext(Filter_Context) ;
}