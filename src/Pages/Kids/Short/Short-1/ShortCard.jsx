import React from 'react'
import { useShortContext } from './ShortList'
import { FaHeart } from 'react-icons/fa';
import { CartContext } from '../../../../Context/Context';
import { useContext } from 'react';
import '../../../../Styles/Short.css'
function ShortCard() {
  const { Short} = useShortContext();
  const  { addToFavorites,addToCart } = useContext(CartContext);

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
              <div className="short-product-list-images">
                {Short.map((item, index) => (
                    <div className="card short-product-cards" key={index}>
                        <div className="product-card-img-wrapper">
                            <img 
                                src={item.image} 
                                className="short-product-card-img-top" 
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
                        <p className="short-product-title">{item.title}</p>
                        <p className="short-product-price">{item.price}</p>
                        <div className="short-buy">
                       <button  onClick={() => alert('Purchasing...')}>Buy Now</button>
                       <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                       </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default ShortCard