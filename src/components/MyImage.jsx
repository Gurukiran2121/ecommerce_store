import React from 'react'
import dataz from '../data.json'
import { NavLink } from 'react-router-dom'
import FormatPrice from '../helpers/FormatPrice'



const MyImage = ({imgs}) => {
  const [data , setData] = React.useState(dataz)
  console.log(imgs);
  return (
    <>
     

     <section className=' mx-auto  bg-gray-100 '>
                  <div className='w-[80%] mx-auto md:flex flex-wrap lg:w-[70%]'>
                {
                    imgs.map((curElem,i)=>{
                            return(
                               <div key={i} className = 'p-3 md:flex flex-col mx-auto '>

                                  
                                        <figure className=''>
                                        <img src={curElem.url} alt="" className='md:w-72 hover:scale-105 rounded-lg   ' />
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

export default MyImage