import React from 'react';
import { useKurtiContext } from './KurtiListOne'; 
import { FaHeart } from 'react-icons/fa';
import { CartContext } from '../../../../Context/Context';
import { useContext } from 'react';
import '../../../../Styles/Kurti.css'

function KurtiCard() {
    const { list } = useKurtiContext();
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
            <div className="kurti-product-list-images">
                {list.map((item, index) => (
                    <div className="card kurti-product-cards" key={index}>
                        <div className="kurti-product-card-img-wrapper">
                            <img 
                                src={item.image} 
                                className="kurti-product-card-img-top" 
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
                        <p className="kurti-product-title">{item.title}</p>
                        <p className="kurti-product-price">{item.price}</p>
                        <div className="kurti-buy">
                        <button  onClick={() => alert('Purchasing...')}>Buy Now</button>
                        <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default KurtiCard;
