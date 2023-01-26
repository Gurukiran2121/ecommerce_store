import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import Herosection from '../components/Herosection'
import Services from '../components/Services'
import Trusted from '../components/Trusted'

const Home = () => {
  return (
    <>
        <Herosection/>
        <FeaturedProducts/>
        <Services/>
        <Trusted/>
    
    </>
  )
}

export default Home