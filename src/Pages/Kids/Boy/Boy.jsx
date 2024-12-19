import React from 'react'
import BoyProduct from './Boy-1/BoyProduct'
import BoyCrumbs from './BoyCrumbs'
import BoyCarousel from './BoyCarousel'

function Boy() {
  return (
    <div>
        <BoyCarousel/>
        <BoyCrumbs/>
        <BoyProduct/>
    </div>
  )
}

export default Boy