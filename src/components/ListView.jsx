import React from 'react'
import { NavLink } from 'react-router-dom'
import FormatPrice from '../helpers/FormatPrice'

const ListView = ({products}) => {
  return (
    <>
     

     <section className='container mx-auto '>
                  <div className=' mx-auto lg:w-[75%] xl:w-[50%]'>
                {
                    products.map((curElem,i)=>{
                            return(
                                <div key={i} className = 'md:flex items-center mt-10 p-3 rounded-lg gap-10 bg-gray-100 hover:scale-105 hover:shadow-2xl hover:shadow-gray-900 select-none cursor-pointer'>
                                                 
                                                    <div className=' flex-1'>
                                                    <NavLink to={`/products/${curElem.id}`}>
                                                        <img src={curElem.image} alt="" className='hover:scale-105 rounded-t-2xl' />
                                                        </NavLink>
                                                    </div>
                                                 
                                            
                                                <div className='lg:text-justify flex flex-col flex-1 gap-3 '>
                                                        <div className='text-xl text-blue-600 font-bold'>
                                                        <NavLink to={`/products/${curElem.id}`}>
                                                        <h1 className='hover:underline'>{curElem.name}</h1>
                                                        </NavLink>
                                                        </div>

                                                        <div className='font-bold'>
                                                        <FormatPrice price = {curElem.price}/>
                                                        </div>

                                                        <div>
                                                        {curElem.description.slice(0 , 99)}....
                                                        </div>
                                                        <button>
                                                        <details className='border border-gray-400 text-white bg-gray-500 rounded-lg '>
                                                        {curElem.description}
                                                        </details>
                                                        </button>
                                                </div>

                                    </div>                             
                            )
                    })
                }
        </div>
        </section>
    
    
    </>
  )
}

export default ListView