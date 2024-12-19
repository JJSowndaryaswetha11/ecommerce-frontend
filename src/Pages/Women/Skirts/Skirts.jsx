import React from 'react'
import SkirtsCarousel from './SkirtsCarousel'
import SkirtsProductCard from './Skirts-1/SkirtsProductCard'
import SkirtsCrumbs from './SkirtsCrumbs'

function Skirts() {
  return (
    <div>
        <SkirtsCarousel/>
        <SkirtsCrumbs/>
        <SkirtsProductCard/>
    </div>
  )
}

export default Skirts