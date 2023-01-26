import React from 'react'
import { NavLink } from 'react-router-dom'

const Singleheader = ({name}) => {
  return (
   <>
   
   <div className='flex bg-gray-100 h-12 items-center gap-2 mb-5'>
    <NavLink to='/' className='text-blue-500 text-2xl'>Home </NavLink> <span className='text-2xl'> / </span><h1  className='text-2xl'>{name}</h1>
   </div>

   
   </>
  )
}

export default Singleheader