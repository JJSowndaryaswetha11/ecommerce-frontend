import React from 'react';
import { useSuitContext } from './SuitList';
import { FaHeart } from 'react-icons/fa';
import { CartContext } from '../../../../Context/Context';
import { useContext } from 'react';
import '../../../../Styles/Suits.css'

function SuitsCard() {
  const { Suits } = useSuitContext();
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
      <div className="suit-product-list-images">
        {Suits.map((item, index) => (
          <div className="card suit-product-cards" key={index}>
            <div className="suit-product-card-img-wrapper">
              <img 
                src={item.image} 
                className="suit-product-card-img-top" 
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
            <p className="suit-product-title">{item.title}</p>
            <p className="suit-product-price">{item.price}</p>
            <div className="suit-buy">
             <button  onClick={() => alert('Purchasing...')}>Buy Now</button>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuitsCard;
