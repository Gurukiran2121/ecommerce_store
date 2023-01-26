import React from 'react'
import ReactCompareImage from 'react-compare-image'
import before from '../Pictures/before.jpg'
import after from '../Pictures/after.jpg'
import img from '../Pictures/img2.png'
import img2 from '../Pictures/img9.png'
import img3 from '../Pictures/before3.png'
import img4 from '../Pictures/after3.png'

const PrimiumProducts = () => {
  return (
   <>
   <section className='w-full bg-gray-100 mt-16  select-none '>
    <section className='container mx-auto'>
        <h1 className='text-center text-2xl p-3 font-bold text-red-500 md:text-3xl '>Check out our primium product :--</h1>
    <div className='container mx-auto lg:flex w-[80%] xl:w-[75%]'>

      <div className=' w-[75%] mb-5 mx-auto md:w-[60%] lg:w-[30%]'>
        <ReactCompareImage leftImage={before} rightImage = {after} />
      </div>

      <div className=' w-[75%] mx-auto flex flex-col items-center justify-center md:w-[60%] lg:w-[40%]'>
        <div >
          <img src={img} alt="" className=' animate-bounce hover:animate-none h-32 md:h-38 lg:h-36 xl:h-52' />
        </div>
        <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <div className=' bg-blue-600 text-white p-1 rounded hover:bg-blue-400 w-40 flex justify-center'>
          <button>Try it Now</button>
        </div>
      </div>


      </div>
    </section>
    </section>



    <section className='w-full bg-gray-100  select-none'>
    <section className='container mx-auto'>
   
    <div className='container mx-auto lg:flex flex-row-reverse w-[80%] xl:w-[75%]'>

    <div className=' w-[75%] mx-auto md:w-[60%] lg:w-[40%] mb-4'>
        <ReactCompareImage leftImage={img3} rightImage = {img4} />
      </div>

      <div className=' w-[75%] mx-auto flex flex-col items-center justify-center mb-5 md:w-[60%] lg:w-[40%]'>
        <div >
          <img src={img2} alt="" className=' animate-bounce hover:animate-none h-32 md:h-38 lg:h-36 xl:h-52' />
        </div>
        <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <div className=' bg-blue-600 text-white p-1 rounded hover:bg-blue-400 w-40 flex justify-center'>
          <button>Try it Now</button>
        </div>
      </div>
 

      

      </div>
    </section>
    </section>


   
   </>
  )
}

export default PrimiumProducts