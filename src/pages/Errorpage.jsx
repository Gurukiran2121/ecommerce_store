import React from 'react'
import { NavLink } from 'react-router-dom'

import error from '../Pictures/error.svg'

const Errorpage = () => {
  
  return (
   <>
  
     <div className="container mx-auto mt-10">

      <div className='flex justify-around md:w-[40%] mx-auto'>


          <div className="1st">
              <img src={error} alt="" className='w-24' />

          </div>

          <div className="2nd">
            <div className='w-full font-serif italic'>
            <span className='text-2xl font-extrabold text-red-700'>O</span>
            <span className='text-2xl font-extrabold text-violet-600'>O</span>
            <span className='text-2xl font-extrabold text-yellow-400'>P</span>
            <span className='text-2xl font-extrabold text-red-700'>S</span>
            <span className='text-2xl font-extrabold text-green-400'>!</span>
            </div>
            <h1 className='font-bold text-3xl'>404</h1>
            <p><b>UH OH!</b>You're lost.</p>
          </div>


        </div>
     </div>
     <p className='text-center'>Lorem ipsum dolor, sit amet consectetur res, dolore debitis earum nemo.</p>
     <div className='w-full text-center'>
      <NavLink to='/'>
        <button className="bg-blue-600 w-fit p-2 rounded-md text-white hover:bg-blue-400 " >Go Back To Home</button>
      </NavLink>
     </div>
      
   </>
  )
}

export default Errorpage