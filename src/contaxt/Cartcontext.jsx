import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Carthigher = (Wrapedcomp)=>{
    const Cartiner = ()=>{
        const [count , setCount]= React.useState(0)
        const incre = ()=>{
            if(count>4){
                toast("can't add more than 5 items at once !");
                return
            }
            setCount(count+1)
        }
        const decre = ()=>{
            if(count <1){
                toast("you have selected 0 items !");
                return
            }
            setCount(count-1)
        }
        return(
            <>
            
            <Wrapedcomp data = {count} func1 = {incre} func2 = {decre}>
                <ToastContainer/>
            </Wrapedcomp>
            
            </>
        )
    }
    return Cartiner
}

export default Carthigher