import React from 'react'
import { FaThList } from "react-icons/fa";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { useFilterContext } from '../contaxt/FilterContaxt';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';



const Sort = () => {
  const {grid_view,setGridview , setListview} = useFilterContext()
  return (
    <>
    
    <section className='container mx-auto h-16 mt-3'>
                  <div className=' mx-auto flex justify-between items-center h-full rounded-xl bg-gray-100 shadow-lg lg:w-[75%] xl:w-[50%]'>
              


              <div className="1st">
                <button onClick={setListview} className = 'mr-3 ml-3 ' ><FaThList/></button>
                <button onClick={setGridview} className = 'ml-3 ' ><BsFillGrid1X2Fill/></button>
              </div>

              <div className="2nd">
                All products
              </div>

              <div className="3rd mr-3">
            
               Primium products
               
              </div>



      </div>
    </section>
    </>
  )
}

export default Sort