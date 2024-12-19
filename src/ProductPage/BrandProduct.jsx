import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaHeart } from 'react-icons/fa';
import { CartContext } from '../Context/Context';
import '../Styles/BrandProduct.css';

const products = [
  { id: 1, image: '/images/Brand-seller1.jpeg', title: 'Georgette Anarkali', price: '$100', sizes: ['S', 'M', 'L', 'XL'], description: 'Lorem ipsum dolor sit amet...' },
  { id: 2, image: '/images/Brand-seller2.jpeg', title: 'Flowy maxi', price: '$120', sizes: ['S', 'M', 'L'], description: 'Lorem ipsum dolor sit amet...' },
  { id: 3, image: '/images/Brand-seller3.jpeg', title: 'Sweatshirts', price: '$80', sizes: ['M', 'L', 'XL'], description: 'Lorem ipsum dolor sit amet...' },
  { id: 4, image: '/images/Brand-seller4.jpeg', title: 'Slip dress', price: '$90', sizes: ['S', 'M'], description: 'Lorem ipsum dolor sit amet...' }
];

const BrandProduct = () => {
  const { id } = useParams();
  const product = products.find(product => product.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(null);
  const { addToCart, addToFavorites, user } = useContext(CartContext);
  const navigate = useNavigate();

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleClick = (e) => {
    e.target.style.color = 'gold';
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!user) {  // Check if the user is logged in
      alert('You need to log in to add items to the cart.');
      // Pass the product and selected size as state to the login page
      navigate('/login', { state: { pendingItem: { ...product, size: selectedSize } } });
    } else {
      if (selectedSize) {
        addToCart({ ...product, size: selectedSize });
        alert('Added to cart');
      } else {
        alert('Please select a size.');
      }
    }
  };

  const handleAddToFavorites = () => {
    addToFavorites(product);
    alert('Added to favorites');
  };

  return (
    <div className="container-fluid">
      <div className="row product">
        <div className="col col-md-6 product-image">
          <img src={product.image} className="img-fluid" alt={product.title} />
          <div className="product-favorites">
            <FaHeart
              className="heart-icon"
              style={{ cursor: 'pointer', fontSize: '24px', color: 'red' }}
              onClick={handleAddToFavorites}
            />
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

export default BrandProduct;

