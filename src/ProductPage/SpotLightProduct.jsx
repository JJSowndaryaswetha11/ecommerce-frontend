import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaHeart } from 'react-icons/fa';
import { CartContext } from '../Context/Context';
import '../Styles/SpotProduct.css'

const products = [
  { id: 1, image: '/images/spotlight-card1.jpg', title: "the dazzle's best seller", price: '$200', sizes: ['S', 'M', 'L', 'XL'], description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  { id: 2, image: '/images/spotlight-card6.jpg', title: "Elegant Western Dress", price: '$100', sizes: ['S', 'M', 'L'], description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam commodi et praesentium voluptates officia exercitationem dignissimos ab aut doloremque similique.' },
  { id: 3, image: '/images/spotlight-card7.jpeg', title: 'saree picks', price: '$150', sizes: ['M', 'L', 'XL'], description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam commodi et praesentium voluptates officia exercitationem dignissimos ab aut doloremque similique.' },
  { id: 4, image: '/images/spotlight-card10.jpeg', title: "Traditional Wedding Sherwani", price: '$250', sizes: ['S', 'M'], description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam commodi et praesentium voluptates officia exercitationem dignissimos ab aut doloremque similique.' },
  { id: 5, image: '/images/spotlight-card11.jpeg', title: "Stylish Formal Suit", price: '$250', sizes: ['S', 'M'], description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam commodi et praesentium voluptates officia exercitationem dignissimos ab aut doloremque similique.' },
  { id: 6, image: '/images/spotlight-card12.jpeg', title: "Elegant Pearl jewellery", price: '$250', sizes: ['S', 'M'], description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam commodi et praesentium voluptates officia exercitationem dignissimos ab aut doloremque similique.' }
];

const SpotLightProduct = () => {
  const { id } = useParams();
  const product = products.find(product => product.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(null);
  const { addToCart,addToFavorites } = useContext(CartContext);

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
    if (selectedSize) {
      addToCart({ ...product, size: selectedSize });
    } else {
      alert('Please select a size');
    }
  };
  const handleAddToFavorites = () => {
    addToFavorites(product);
    alert('Added to favorites');
  };

  return (
    <div className="container-fluid">
      <div className="row product">
        <div className="col col-md-6 spot-product-image">
          <img src={product.image} className="img-fluid" alt={product.title} />
          <div className=" spot-product-favorites">
            <FaHeart className="heart-icon" style={{ cursor: 'pointer', fontSize: '24px', color: 'red' }} onClick={handleAddToFavorites}/>
          </div>
        </div>
        <div className="col col-md-6  spot-product-right">
          <div className="heading">
            <h4>{product.title}</h4>
            <div className=" spot-product-price">
              <p>{product.price}</p>
            </div>
            <div className=" spot-product-rating">
              <span style={{ cursor: 'pointer' }} onClick={handleClick}>
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
              </span>
            </div>
            <div className=" spot-product-sizes">
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
            <div className=" spot-product-description">
              <p className=' spotProduct-description-heading'>Product Description</p>
              <p className=' spot-product-para'>{product.description}</p>
              <p style={{color:'brown', fontWeight:'500', textTransform:'capitalize'}}>you selected:{selectedSize}</p>
            </div>
            <div className=" spot-cart-button">
              <button onClick={handleAddToCart}>Add to Bag</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotLightProduct;
