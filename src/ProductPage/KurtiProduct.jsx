import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaHeart } from 'react-icons/fa';
import { CartContext } from '../Context/Context';
import '../Styles/KurtiProduct.css'; 


const products = [
  { id: 1, image: '/images/stunning-card1.jpeg', title: 'Libas Women Embroidered Straight Kurta', price: '$200', sizes: ['S', 'M', 'L', 'XL'], description: 'Lorem ipsum...' },
  { id: 2, image: '/images/stunning-card2.jpeg', title: "Men's Tshirt", price: '$100', sizes: ['S', 'M', 'L'], description: 'Lorem ipsum...' },
  { id: 3, image: '/images/stunning-card3.jpeg', title: 'Western Wear', price: '$150', sizes: ['M', 'L', 'XL'], description: 'Lorem ipsum...' },
  { id: 4, image: '/images/stunning-card4.jpeg', title: 'Sarees', price: '$250', sizes: ['S', 'M'], description: 'Lorem ipsum...' }
];

const KurtiProduct = () => {
  const { id } = useParams();
  const product = products.find(product => product.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(null);
  const { addToCart,addToFavorites } = useContext(CartContext);
  const handleClick = (e) => {
    e.target.style.color = 'gold';
  };
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart(product, selectedSize);
    } else {
      alert('Please select a size.');
    }
  };

  const handleAddToFavorites = () => {
    addToFavorites(product);
    alert('Added to favorites');
  };
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container-fluid">
      <div className="row product">
        <div className="col col-md-6 product-image">
          <img src={product.image} className="img-fluid" alt={product.title} />
          <div className="product-favorites">
            <FaHeart className="heart-icon" style={{ cursor: 'pointer', fontSize: '24px', color: 'red' }} onClick={handleAddToFavorites} />
          </div>
        </div>
        <div className="col col-md-6 product-right">
          <div className="heading">
            <h4>{product.title}</h4>
            <div className="product-price">
              <p>{product.price}</p>
            </div>
            <div className="product-rating">
              <span style={{ cursor: 'pointer' }} onClick={handleClick}>
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
              </span>
            </div>
            <div className="product-sizes">
              <div className="size-options">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeClick(size)}
                    className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="product-description">
              <p className='product-description-heading'>Product Description</p>
              <p className='product-para'>{product.description}</p>
            </div>
            {selectedSize && <p className='selected-size'>You selected size: {selectedSize}</p>}
            <div className="cart-button">
              <button onClick={handleAddToCart}>Add to Bag</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KurtiProduct;


