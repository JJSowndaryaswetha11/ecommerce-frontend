import React from 'react';
import { useJeansContext } from './JeansList';
import { FaHeart } from 'react-icons/fa';
import { CartContext } from '../../../../Context/Context';
import { useContext } from 'react';
import '../../../../Styles/MenJean.css'
function JeansCard() {
    const { Jeans } = useJeansContext(); 
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
            <div className="jean-product-list-images">
                {Jeans.map((item, index) => (
                    <div className="card jean-product-cards" key={index}>
                        <div className="jean-product-card-img-wrapper">
                            <img 
                                src={item.image} 
                                className="jean-product-card-img-top" 
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
                        <p className="jean-product-title">{item.title}</p>
                        <p className="jean-product-price">{item.price}</p>
                        <div className="jean-buy">
                       <button  onClick={() => alert('Purchasing...')}>Buy Now</button>
                       <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                       </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default JeansCard;
