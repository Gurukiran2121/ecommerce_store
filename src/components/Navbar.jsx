import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GrCart } from "react-icons/gr";                                                                                                                                                                    
import { GiHamburgerMenu } from "react-icons/gi";
import logoo from "../Pictures/main_logo.png"



const ham =()=>{
    
    return(
        <>
    <div className='w-full flex flex-col justify-center items-center bg-gray-100 select-none'>
            <NavLink to='/' className='p-2 text-lg mt-2 hover:text-blue-400 mb-2' >
                Home
            </NavLink>

            <NavLink to='/about' className='p-2 text-lg mt-2 hover:text-blue-400 mb-2' >
                About
            </NavLink>

            <NavLink to='/contact' className='p-2 text-lg mt-2 hover:text-blue-400 mb-2' >
                Contact
            </NavLink>

            <NavLink to='/products' className='p-2 text-lg mt-2 hover:text-blue-400 mb-2' >
            Products
            </NavLink>

            <NavLink to='/cart' className='p-2 text-lg mt-2 hover:text-blue-400 mb-2' >
            <GrCart className='inline-block'/>
         
            </NavLink>
    </div>
        </>
    )
}



const Navbar = () => {


    

    let[print , setprint] = React.useState(false)
  return (
    <>
    <nav className='md:flex  justify-between  text-lg bg-gray-100 select-none'>

    <div className='flex items-center justify-between ml-3 md:w-[10%] md:ml-10'>
    <NavLink to='/'>
        <img src={logoo} alt="" className='w-12 md:w-16 active:animate-ping' />
   </NavLink>
  

   <div className='pr-5 md:hidden' >
    <button onClick={()=>{
        setprint(!print)
    }}  ><GiHamburgerMenu className='text-lg hover:text-violet-400' /></button>
   </div>
   </div>

   <div className='hidden md:flex  items-center w-1/2 justify-evenly'>
    <NavLink to='/' className='p-2 hover:text-blue-400 active:animate-ping' >
        Home
    </NavLink>
    <NavLink to='/about' className='p-2 hover:text-blue-400 active:animate-ping' >
        About
    </NavLink>
    <NavLink to='/contact' className='p-2 hover:text-blue-400 active:animate-ping' >
        Contact
    </NavLink>
    <NavLink to='/products' className='p-2 hover:text-blue-400 active:animate-ping' >
       Products
    </NavLink>
    <NavLink to='/cart' className='p-2' >
       <GrCart className='inline-block hover:scale-125' />
     
    </NavLink>
    </div>
    </nav>
    {
        print?ham():null
    }
    </>
  )
}

export default Navbar

