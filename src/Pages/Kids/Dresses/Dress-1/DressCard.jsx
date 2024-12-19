import React from 'react'
import { useDressContext } from './DressList'
import { FaHeart } from 'react-icons/fa';
import { CartContext } from '../../../../Context/Context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../../Styles/Dress.css'
function DressCard() {
    const { Dress } = useDressContext();
    const  { addToFavorites,addToCart  } = useContext(CartContext);
    const navigate = useNavigate(); 

    const handleAddToFavorites = (product) => {
      addToFavorites(product);
      alert('Added to favorites');
    };
    const handleAddToCart = (product) => {
      addToCart(product);
      alert('Added to cart');
    };
    const handleBuyNow = (item) => {
      navigate('/pay', { state: { product: item } });  // Navigate with product details
  };
  return (
    <div>
        <div className="Dress-product-list-images">
                {Dress.map((item, index) => (
                    <div className="card Dress-product-cards" key={index}>
                        <div className="Dress-product-card-img-wrapper">
                            <img 
                                src={item.image} 
                                className="Dress-product-card-img-top" 
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
                        <p className="Dress-product-title">{item.title}</p>
                        <p className="Dress-product-price">{item.price}</p>
                        <div className="Dress-buy">
                        <button onClick={() => handleBuyNow(item)}>Buy Now</button>
                       <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                       </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default DressCard