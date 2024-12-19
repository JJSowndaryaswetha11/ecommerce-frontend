import React from 'react'
import BrandCardImage from './BrandCardImage'
import CardImages from './CardImages'
import CarouselImages from './CarouselImages'
import SpotLightImages from './SpotLightImages'
import StunningCardImage from './StunningCardImage'
import Footer from './Footer'

function Home() {
  return (
    <div>
        <CarouselImages/>
        <CardImages/>
        <StunningCardImage/>
         <SpotLightImages/>
        <BrandCardImage/>
        <Footer/>
    </div>
  )
}

export default Home