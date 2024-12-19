import React from 'react'
import { useShirtContext } from './ShirtList'
import { FaHeart } from 'react-icons/fa';
import { CartContext } from '../../../../Context/Context';
import { useContext } from 'react';
import '../../../../Styles/Shirt.css'
function ShirtCard() {
    const { Shirts } = useShirtContext();
    const  { addToFavorites ,addToCart} = useContext(CartContext);

    const handleAddToFavorites = (product) => {
      addToFavorites(product);
      alert('Added to favorites');
    };
    const handleAddToCart = (product) => {
      addToCart(product);
      alert('Added to cart');
    };
  return (
    <div>
        <div className="shirt-product-list-images">
        {Shirts.map((item, index) => (
          <div className="card shirt-product-cards" key={index}>
            <div className="shirt-product-card-img-wrapper">
              <img 
                src={item.image} 
                className="shirt-product-card-img-top" 
                alt={item.title} 
                width={250} 
                height={350} 
              />
            </div>
            <div className="favorites">
                        < FaHeart
                          className="heart-icon"
                        style={{ cursor: 'pointer', fontSize: '24px', color: 'red' }}
                          onClick={() => handleAddToFavorites(item)}
                             />
                           </div>
            <p className="shirt-product-title">{item.title}</p>
            <p className="shirt-product-price">{item.price}</p>
            <div className="shirt-buy">
            <button  onClick={() => alert('Purchasing...')}>Buy Now</button>
           <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
           </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShirtCard