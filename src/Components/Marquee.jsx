import React from 'react'
import'../Styles/Marquee.css'
function Marquee() {
  return (
    <div className='marquee-header'>
        <marquee behavior="" direction="left" scrollamount="10">
        End of Season Sale: Everything Must Go! Up to 70% Off.
        </marquee>
    </div>
  )
}

export default Marquee