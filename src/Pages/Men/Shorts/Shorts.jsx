import React from 'react'
import ShortsProduct from './Shorts-1/ShortsProduct'
import ShortsCarousel from './ShortsCarousel'
import ShortsCrumbs from './ShortsCrumbs'

function Shorts() {
  return (
    <div>
        <ShortsCarousel/>
        <ShortsCrumbs/>
        <ShortsProduct/>

    </div>
  )
}

export default Shorts