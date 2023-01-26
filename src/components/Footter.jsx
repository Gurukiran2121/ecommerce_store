import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsGithub,BsInstagram,BsLinkedin } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";

const Footter = () => {
  return (
  <>
 
     <section className="container mx-auto h-32 z-50 relative top-16">
        <div className="mainbox h-full flex justify-between items-center rounded-3xl bg-gray-100 md:w-[60%] mx-auto">
            <div className="left-side ml-2 md:ml-16">
                <h3>Ready to get started? </h3>
                <h3>Talk to us today.</h3>
            </div>
            <div className="right-side mr-2 md:mr-16">
                    <NavLink to='/contact'>
                        <button className="bg-blue-600 p-2 rounded-md text-white hover:bg-blue-400 ">Get Started</button>
                    </NavLink>
            </div>
        </div>
     </section>



{/* fotter */}
     <footer className="bg-[#061027] z-[-1] h-[500px] text-white">
                <div className='w-full h-16'>

                </div>
        <div className="wrap flex flex-col items-center gap-5 p-3 md:w-[60%] mx-auto">
        <div className="1st  w-full">
                <h1 className='text-center text-lg font-bold cursor-pointer'>Shop store</h1>
                <p className='text-center cursor-pointer'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, assumenda?</p>
        </div>

        <div className="2nd  w-full flex flex-col items-center gap-3">
                <h1 className='text-center cursor-pointer'>Subscribe to get important updates</h1>
                <input type="text"  placeholder='your E-mail' className='text-white bg-transparent border border-gray-100 p-2 rounded-lg' /> 
                <button className='cursor-pointer border p-2 border-gray-100 rounded-lg hover:bg-white hover:text-black'>Subscribe</button>
        </div>

        <div className="3rd  w-full flex items-center justify-evenly">
            <h1 className='text-lg cursor-pointer' >Follow Us on</h1>
           <a href="https://github.com/Gurukiran2121" target='_blank'><BsGithub className='text-3xl hover:scale-110' /></a> 
           <a href="https://www.linkedin.com/in/gurukiran-s-n-153790225/" target='_blank'><BsLinkedin className='text-3xl hover:scale-110' /></a> 
            <BsInstagram className='text-3xl hover:scale-110' />
            <GrFacebook className='text-3xl hover:scale-110' />
            

        </div>
        <div className="4th w-full text-center">
            <h1 className='cursor-pointer'>Call Us : </h1>
            <a href="tel:987654321">987654321</a>
        </div>

        
        </div>
        <hr />
        <div className='md:w-[60%] mx-auto flex justify-between'>
      
        <p className='cursor-pointer'>@{new Date().getFullYear()} Guru All rights reserved</p>
        <div>
            <p className='cursor-pointer'>Privacy Policy</p>
            <p className='cursor-pointer'>Terms & Conditions</p>
        </div>
        </div>
     </footer>
 
 </>
  )
}

export default Footter