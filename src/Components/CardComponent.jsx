import React from 'react';
import Slider from 'react-slick';
import '../Styles/CardComponent.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CardComponent({ cards }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="card-component">
      <h2>Shop by Categories</h2>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="slider-item">
            <div className=" slider card">
              <img
                src={card.image}
                className=" slider-card card-img-top"
                alt={card.title}
              />
              <p className='latest-para'>{card.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardComponent;
