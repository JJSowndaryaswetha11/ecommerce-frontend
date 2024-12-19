import React from 'react';
import { useTopsContext } from './KidTopList';
import { FaHeart } from 'react-icons/fa';
import { CartContext } from '../../../../Context/Context';
import { useContext } from 'react';
import '../../../../Styles/Kids.css'

const KidsTopCard = () => {
  const { Tops } = useTopsContext();
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
        <div className="Kids-product-list-images">
                {Tops.map((item, index) => (
                    <div className="card Kids-product-cards" key={index}>
                        <div className="Kids-product-card-img-wrapper">
                            <img 
                                src={item.image} 
                                className="Kids-product-card-img-top" 
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
                        <p className="Kids-product-title">{item.title}</p>
                        <p className="Kids-product-price">{item.price}</p>
                        <div className="Kids-buy">
                       <button  onClick={() => alert('Purchasing...')}>Buy Now</button>
                       <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                       </div>
                    </div>
                ))}
            </div>
    </div>
  )

  
};

export default KidsTopCard;
