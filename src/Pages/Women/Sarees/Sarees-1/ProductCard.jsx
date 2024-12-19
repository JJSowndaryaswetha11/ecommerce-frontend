import React, { useContext } from 'react';
import { useProductContext } from './ProductList';
import { FaHeart } from 'react-icons/fa';
import { CartContext } from '../../../../Context/Context';
import '../../../../Styles/Saree.css'


function ProductCard() {
  const { products } = useProductContext();
  const { addToFavorites, addToCart } = useContext(CartContext);

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
      <div className="saree-product-list-images">
        {products.map((item, index) => (
          <div className="card saree-product-cards" key={index}>
            <div className="saree-product-card-img-wrapper">
              <img
                src={item.image}
                className="saree-product-card-img-top"
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
            <p className="saree-product-title">{item.title}</p>
            <p className="saree-product-price">{item.price}</p>
            <div className="saree-buy">
           <button  onClick={() => alert('Purchasing...')}>Buy Now</button>
         <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                         </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;