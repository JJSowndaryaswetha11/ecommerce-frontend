import React from 'react'
import AnarkaliCarousel from './AnarkaliCarousel'
import AnarkaliProductCard from './Anarkali-1/AnarkaliProductCard'
import AnarKaliCrumbs from './AnarkaliCrumbs.jsx'

function AnarkaliProduct() {
  return (
    <div className='whole-products-lists'>
      <AnarkaliCarousel/>
      <AnarKaliCrumbs/>
      <AnarkaliProductCard/>
    </div>
  )
}

export default AnarkaliProduct