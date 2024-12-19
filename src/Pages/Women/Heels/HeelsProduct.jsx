import React from 'react'
import HeelsProductList from './Heels-1/HeelsProductList'
import HeelsCrumbs from './HeelsCrumbs'
import HeelsCarousel from './HeelsCarousel'

function HeelsProduct() {
  return (
    <div>
        <HeelsCarousel/>
        <HeelsCrumbs/>
        <HeelsProductList/>
    </div>
  )
}

export default HeelsProduct