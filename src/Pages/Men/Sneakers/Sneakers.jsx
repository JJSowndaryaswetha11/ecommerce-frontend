import React from 'react'
import SneakerProduct from './Sneakers-1/SneakerProduct'
import SneakersCarousel from './SneakersCarousel'
import SneakersCrumbs from './SneakersCrumbs'

function Sneakers() {
  return (
    <div>
        <SneakersCarousel/>
        <SneakersCrumbs/>
        <SneakerProduct/>
    </div>
  )
}

export default Sneakers