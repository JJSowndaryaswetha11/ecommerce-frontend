import React from 'react'
import KidTopProduct from './KidTop-1/KidTopProduct'
import KidTopCarousel from './KidTopCarousel'
import KidTopCrumbs from './KidTopCrumbs'

function KidTop() {
  return (
    <div>
        <KidTopCrumbs/>
        <KidTopCarousel/>
        <KidTopProduct/>
    </div>
  )
}

export default KidTop