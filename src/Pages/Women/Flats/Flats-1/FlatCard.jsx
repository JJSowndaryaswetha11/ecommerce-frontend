import React from 'react';
import { useFlatContext } from './FlatList'; 
import {  FaHeart } from 'react-icons/fa';
import { CartContext } from '../../../../Context/Context';
import { useContext } from 'react';
import '../../../../Styles/Flats.css'

function FlatCard() {
    const { Flats } = useFlatContext();
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
            <div className="Flat-product-list-images">
                {Flats.map((item, index) => (
                    <div className="card Flat-product-cards" key={index}>
                        <div className="Flat-product-card-img-wrapper">
                            <img
                                src={item.image}
                                className="Flat-product-card-img-top"
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
                        <p className="Flat-product-title">{item.title}</p>
                        <p className="Flat-product-price">{item.price}</p>
                        <div className="Flat-buy">
                         <button  onClick={() => alert('Purchasing...')}>Buy Now</button>
                         <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                         </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FlatCard;
