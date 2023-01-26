import React from 'react'
import { NavLink } from 'react-router-dom'
import vid from "../Pictures/About.mp4"

const Aboutheader = () => {
  return (
 <>
 
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 select-none">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Brand new shop
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Wide Range Of Products
              <br className="hidden md:block" />
              upto 70% off{' '}
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nesciunt pariatur possimus quis, porro minus dignissimos debitis,ratione necessitatibus..
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            
             <NavLink to='/products'>
                <button className="bg-blue-600 w-fit p-2 rounded-md text-white hover:bg-blue-400 mr-5" >Shop Now</button>
             </NavLink>
         
            <NavLink to='/products' className='hover:underline'>
                    go to products?
            </NavLink>
          </div>
        </div>
        <div className="relative lg:w-1/2">
         <video src={vid} autoPlay muted loop className='rounded-2xl'></video>
         
        </div>
      </div>
    </div>

 
 </>
  )
}

export default Aboutheader