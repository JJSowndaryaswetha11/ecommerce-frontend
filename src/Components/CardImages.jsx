// CardImages.js
import React from 'react';
import '../Styles/CardComponent.css';
import CardComponent from './CardComponent'


const CardImages = () => {
  const cards = [
    {
      image: '/images/card-img1.webp',
      title:"Casual wear men"
      
    },
    {
      image: '/images/card-img2.jpeg',
      title:"casual wear women"
      
    },
    {
      image: '/images/card-img3.jpg',
      title:"kids wear"
     
    },
    {
      image: '/images/card-img4.jpg',
      title:"anarkalis"
     
    },
    {
      image: '/images/card-img5.jpg',
      title:" women kurtis"
     
    },
    {
      image: '/images/card-img6.jpeg',
      title:" Chic Blazers "
     
    },
    {
      image: '/images/card-img7.jpeg',
      title:"Executive Suites"
     
    },
    {
      image: '/images/card-img8.jpeg',
      title:"casual shoes"
     
    },
    {
      image: '/images/card-img9.jpeg',
      title:"sandals"
     
    },
    {
      image: '/images/card-img10.jpeg',
      title:"handbags"
     
    },
  ];

  return (
    <div>
      <CardComponent cards={cards} />
    </div>
  );
};

export default CardImages;