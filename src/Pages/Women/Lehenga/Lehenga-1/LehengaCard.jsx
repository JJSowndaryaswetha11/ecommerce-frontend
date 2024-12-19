import React from 'react';
import { useLehengaContext } from './LehengaList'; 
import { FaHeart } from 'react-icons/fa';
import { CartContext } from '../../../../Context/Context';
import { useContext } from 'react';
import '../../../../Styles/Lehenga.css'

function LehengaCard() { 
    const{lists}=useLehengaContext();
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
        <div>
            <div className=" lehenga-product-list-images">
                {lists.map((item, index) => (
                    <div className="card lehenga-product-cards" key={index}>
                        <div className="lehenga-product-card-img-wrapper">
                            <img 
                                src={item.image} 
                                className="lehenga-product-card-img-top" 
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
                        <p className="lehenga-product-title">{item.title}</p>
                        <p className="lehenga-product-price">{item.price}</p>
                        <div className="lehenga-buy">
                        <button  onClick={() => alert('Purchasing...')}>Buy Now</button>
                        <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                         </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LehengaCard;
