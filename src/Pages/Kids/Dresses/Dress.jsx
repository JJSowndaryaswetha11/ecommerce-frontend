import React from 'react'
import DressProduct from './Dress-1/DressProduct'
import DressCarousel from './DressCarousel'
import DressCrumbs from './DressCrumbs'

function Dress() {
  return (
    <div>
        <DressCarousel/>
        <DressCrumbs/>
        <DressProduct/>
    </div>
  )
}

export default Dress