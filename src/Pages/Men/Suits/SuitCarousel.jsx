import React from 'react'

function SuitsCarousel() {
  return (
    <div>
        <div id="carouselExample" className="carousel slide w-100" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img 
              src="/images/Suit-banner1.jpg" 
              className="d-block w-100" 
              style={{ height: '370px' }} 
              alt="First slide" 
            />
          </div>
          <div className="carousel-item">
            <img 
              src="/images/Suit-banner2.jpg" 
              className="d-block w-100" 
              style={{ height: '370px', width: '65%' }} 
              alt="Second slide" 
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> 
    </div>
  )
}

export default SuitsCarousel