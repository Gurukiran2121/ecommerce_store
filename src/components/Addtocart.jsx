import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Carthigher from '../contaxt/Cartcontext';




const Addtocart = (props) => {
   

    
  return (
  <>
  
     <div>
        <div className='flex gap-7 items-center'>
            <button className='text-2xl font-bold' onClick={props.func1}>+</button>
            {props.data}
            <button className='text-2xl font-bold' onClick={props.func2}>-</button>
        </div>
        <div>
            <button className='bg-blue-600 text-white p-2 rounded-md hover:bg-blue-400' onClick={()=>{
                if(props.data < 1){
                    toast("select items first")
                }
               else{
                toast("item added succesfully")
               }
            }}>Add to Cart</button>
        </div>
     </div>
    <ToastContainer/>
   
  </>
  )
}

export default Carthigher(Addtocart)