import React, { useContext } from 'react';
import { useBoyContext } from './BoyList';
import { FaHeart } from 'react-icons/fa';
import { CartContext } from '../../../../Context/Context';
import { useNavigate } from 'react-router-dom';
import '../../../../Styles/Boy.css';

function BoyCard() {
    const { Boys } = useBoyContext();
    const { addToFavorites, addToCart } = useContext(CartContext);
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
        navigate('/pay', { state: { product: item } });
    };

    return (
        <div>
            <div className="Boy-product-list-images">
                {Boys.map((item, index) => (
                    <div className="card Boy-product-cards" key={index}>
                        <div className="Boy-product-card-img-wrapper">
                            <img
                                src={item.image}
                                className="Boy-product-card-img-top"
                                alt={item.title}
                                width={250}
                                height={350}
                            />
                        </div>
                        <div className="favorites">
                            <FaHeart
                                className="heart-icon"
                                style={{ cursor: 'pointer', fontSize: '24px', color: 'red' }}
                                onClick={() => handleAddToFavorites(item)}
                            />
                        </div>
                        <p className="Boy-product-title">{item.title}</p>
                        <p className="Boy-product-price">{item.price}</p>
                        <div className="Boy-buy">
                            <button onClick={() => handleBuyNow(item)}>Buy Now</button>
                            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BoyCard;
