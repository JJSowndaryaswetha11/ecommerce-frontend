import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function LehengaCarousel() {
  return (
    <div>
     <div id="carouselExample" className="carousel slide w-100" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img 
              src="/images/lehenga-banner1.jpg" 
              className="d-block w-100" 
              style={{ height: '370px' }} 
              alt="First slide" 
            />
          </div>
          <div className="carousel-item">
            <img 
              src="/images/lehenga-banner2.jpg" 
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

export default LehengaCarousel