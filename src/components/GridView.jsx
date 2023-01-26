import React from 'react'
import { NavLink } from 'react-router-dom'
import FormatPrice from '../helpers/FormatPrice'

const GridView = ({products}) => {

  return (
    <>
    
    <section className=' mx-auto   mt-10 '>
                  <div className='w-[80%] mx-auto bg-gray-100 rounded-xl p-3 md:flex flex-wrap lg:w-[70%]'>
                {
                    products.map((curElem,i)=>{
                            return(
                               <div key={i} className = 'p-3 md:flex flex-col mx-auto '>

                                    <NavLink to={`/products/${curElem.id}`} >  
                                        <figure className=''>
                                        <img src={curElem.image} alt="" className='md:w-72 hover:scale-105 rounded-lg   ' />
                                        <figcaption className=''>{curElem.category}</figcaption>
                                        </figure>
                                    
                                    <div className='flex justify-between'>
                                    <div className='text-xl text-blue-500 font-bold'>
                                                        <h1 className='hover:underline'>{curElem.name}</h1>
                                                        </div>
                                        <div className='text-blue-600'>
                                           <FormatPrice price = {curElem.price}/>
                                        </div>
                                    </div>
                                    </NavLink>
                                  <details className='z-50  md:w-72' >
                                    {curElem.description}
                                  </details>

                               </div>                             
                            )
                    })
                }
        </div>
        </section>
    </>
  )
}

export default GridView