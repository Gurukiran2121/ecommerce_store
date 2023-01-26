import React,{useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import {useProductContext} from "../contaxt/Productcontaxt"
import FormatPrice from '../helpers/FormatPrice'



const FeaturedProducts = () => {
  
 
    const { isLoading , featureProducts} = useProductContext()

   

    if(isLoading){
        return(
            <>
            <div>..........Loading..........</div>
            </>
        )
    }
   

  return (
   <>
   
   <section className=' mx-auto  bg-gray-100 lg:mt-10 p-3'>
        <div className='text-center'>
            <div className='animate-bounce text-lg text-red-500 font-extrabold'>Hurry Up!!!!</div>
            <div className='font-bold text-2xl animate-bounce'>Limited Time Offer...</div>
        </div>
   
        <div className='w-[70%] mx-auto md:flex flex-nowrap'>
                {
                    featureProducts.map((curElem,i)=>{
                            return(
                               <div key={i} className = 'p-3 md:flex flex-col mx-auto '>

                                        <NavLink to={`/products/${curElem.id}`}>
                                        <figure className=''>
                                        <img src={curElem.image} alt="" className='md:w-72 hover:scale-105 rounded-lg animate-pulse  ' />
                                        <figcaption className=''>{curElem.category}</figcaption>
                                        </figure>
                                    
                                    <div className='flex justify-between'>
                                        <div>
                                         {curElem.name}
                                        </div>
                                        <div className='text-blue-600'>
                                           <FormatPrice price = {curElem.price}/>
                                        </div>
                                    </div>
                                    </NavLink>

                               </div>                             
                            )
                    })
                }
        </div>

     
     
   </section>
   
   </>
  )
}

export default FeaturedProducts