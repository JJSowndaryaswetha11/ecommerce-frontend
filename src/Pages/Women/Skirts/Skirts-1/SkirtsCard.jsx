import React from 'react';
import { useSkirtsContext } from './SkirtsList'; 
import { FaHeart } from 'react-icons/fa';
import { CartContext } from '../../../../Context/Context';
import { useContext } from 'react';
import '../../../../Styles/Skirts.css'



function SkirtsCard() {
    const { skirts } = useSkirtsContext(); 
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
            <div className="skirt-product-list-images">
                {skirts.map((item, index) => (
                    <div className="card skirt-product-cards" key={index}>
                        <div className="skirt-product-card-img-wrapper">
                            <img 
                                src={item.image} 
                                className="skirt-product-card-img-top" 
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
                        <p className="skirt-product-title">{item.title}</p>
                        <p className="skirt-product-price">{item.price}</p>
                        <div className="skirt-buy">
                        <button  onClick={() => alert('Purchasing...')}>Buy Now</button>
                        <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                         </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkirtsCard;
