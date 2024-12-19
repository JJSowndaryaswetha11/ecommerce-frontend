import React from 'react'
import TshirtProduct from './T-shirt1/TshirtProduct'
import TshirtCarousel from './TshirtCarousel'
import TshirtCrumbs from './TshirtCrumbs'

function Tshirt() {
  return (
    <div>
        <TshirtCarousel/>
        <TshirtCrumbs/>
        <TshirtProduct/>
    </div>
  )
}

export default Tshirt