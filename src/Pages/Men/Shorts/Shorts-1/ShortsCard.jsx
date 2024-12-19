import React from 'react'
import { useShortsContext } from './ShortsList'
import { FaHeart } from 'react-icons/fa';
import { CartContext } from '../../../../Context/Context';
import { useContext } from 'react';
import '../../../../Styles/Shorts.css'
function ShortsCard() {
    const { Shorts } = useShortsContext();
    const  { addToFavorites,addToCart  } = useContext(CartContext);

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
        <div className="shorts-product-list-images">
                {Shorts.map((item, index) => (
                    <div className="card shorts-product-cards" key={index}>
                        <div className="shorts-product-card-img-wrapper">
                            <img 
                                src={item.image} 
                                className="shorts-product-card-img-top" 
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
                        <p className="shorts-product-title">{item.title}</p>
                        <p className="shorts-product-price">{item.price}</p>
                        <div className="shorts-buy">
                       <button  onClick={() => alert('Purchasing...')}>Buy Now</button>
                       <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                       </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default ShortsCard