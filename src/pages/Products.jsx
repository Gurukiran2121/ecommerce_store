import React from 'react'
import PrimiumProducts from '../components/PrimiumProducts'
import FilterSection from '../components/FilterSection'
import ProductList from '../components/ProductList'
import Sort from '../components/Sort'


const Products = () => {
    

  return (
   <>
   <section>

      <div>
        <FilterSection/>
      </div>


        <section>

            <div>
              <Sort/>
            </div>

            <div>
              <ProductList/>
             
            </div>

        </section>


   </section>

   <PrimiumProducts/>
   
   </>
   )
}

export default Products