import React from 'react'
import FlatProductCard from './Flats-1/FlatProductCard'
import FlatsCarousel from './FlatsCarousel'
import FlatsCrumbs from './FlatsCrumbs'
function FlatsProduct() {
  return (
    <div>
        <FlatsCarousel/>
        <FlatsCrumbs/>
       <FlatProductCard/> 
    </div>
  )
}

export default FlatsProduct