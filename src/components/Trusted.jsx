import React from 'react'
import trusted1 from '../Pictures/trusted1.svg'
import trusted2 from '../Pictures/trusted2.svg'
import trusted3 from '../Pictures/trusted3.svg'
import trusted4 from '../Pictures/trusted4.svg'
import trusted5 from '../Pictures/trusted5.svg'

const Trusted = () => {
  return (
   <>
   
                <div className="main mt-3 flex flex-col p-5 items-center bg-gray-100 select-none">
                    <h1 className='font-bold my-5 text-gray-700 '>Trusted by 1000+ companies...</h1>
                    <div className="img-box w-[70%] mx-auto flex flex-col items-center md:flex-row justify-between">
                        <div className="images w-28 ">
                            <img src={trusted1} alt="" className='md:w-3/4' />
                        </div>
                        <div className="images w-28 ">
                            <img src={trusted2} alt="" className='md:w-3/4' />
                        </div>
                        <div className="images w-28 ">
                            <img src={trusted3} alt="" className='md:w-3/4' />
                        </div>
                        <div className="images w-28 ">
                            <img src={trusted4} alt="" className='md:w-3/4' />
                        </div>
                        <div className="images w-28 ">
                            <img src={trusted5} alt="" className='md:w-3/4' />
                        </div>
                    </div>
                </div>
   
   </>
  )
}

export default Trusted