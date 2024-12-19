import React, { useContext } from 'react';
import { useAnarkaliContext } from './AnarkaliList';
import { FaStar, FaHeart } from 'react-icons/fa';
import { CartContext } from '../../../../Context/Context';
import '../../../../Styles/Anarkali.css'

function AnarkaliCard() {
  const { anarkalis } = useAnarkaliContext();
  const { addToFavorites,addToCart } = useContext(CartContext);

  const handleAddToFavorites = (product) => {
    addToFavorites(product);
    alert('Added to favorites');
  };
  const handleAddToCart = (product) => {
    addToCart(product);
    alert('Added to cart');
  };

  return (
    <div className="Anarkali-product-list-images">
      {anarkalis.map((item, index) => (
        <div className="card Anarkali-product-cards" key={index}>
          <div className="Anarkali-product-card-img-wrapper">
            <img
              src={item.image}
              className="Anarkali-product-card-img-top"
              alt={item.title}
              width={250}
              height={350}
            />
            <div className="Anarkali-favorites">
              <FaHeart
                className="heart-icon"
                style={{ cursor: 'pointer', fontSize: '24px', color: 'red' }}
                onClick={() => handleAddToFavorites(item)}
              />
            </div>
          </div>
          <h2 className="Anarkali-product-titles">{item.title}</h2>
          <p className="Anarkali-product-prices">{item.price}</p>
          <div className="Anarkali-buy">
             <button  onClick={() => alert('Purchasing...')}>Buy Now</button>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
        </div>
      ))}
    </div>
  );
}

export default AnarkaliCard;
