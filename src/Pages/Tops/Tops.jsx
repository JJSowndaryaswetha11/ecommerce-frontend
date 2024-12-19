import React from 'react'
import TopsCarousel from './TopsCarousel'
import TopsCrumbs from './TopsCrumbs'
import TopProductCard from './Tops-1/TopProductCard'


function Tops() {
  return (
    <div className='whole-products-lists'>
     
        <TopsCarousel/>
        <TopsCrumbs/>
        <TopProductCard/>
        </div>
  )
}

export default Tops