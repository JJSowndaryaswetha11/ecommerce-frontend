import React, { useContext } from 'react';
import { CartContext } from '../Context/Context';
import { Link } from 'react-router-dom';
import '../Styles/Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateCartItemQuantity } = useContext(CartContext);

  const handleAddQuantity = (id, quantity) => {
    updateCartItemQuantity(id, quantity + 1);
  };

  const handleReduceQuantity = (id, quantity) => {
    if (quantity > 1) {
      updateCartItemQuantity(id, quantity - 1);
    }
  };

  // Calculate total amount
  const getTotalPrice = () => {
    return cartItems
      .reduce((acc, item) => acc + item.quantity * parseFloat(item.price.replace('$', '')), 0)
      .toFixed(2);
  };

  // Calculate total quantity
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Get the total amount
  const totalAmount = getTotalPrice();

  return (
    <div className="cart-section">
      <h2 className="cart-heading">Your Cart</h2>
      <div className="cart-page">
        {cartItems.length === 0 ? (
          <div className="empty">
            <p>Your cart is empty.</p>
            <Link to="/" className="empty-link">
              <button>Return to home page</button>
            </Link>
          </div>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item._id}>
                <div className="cart">
                  <div className="cart-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="cart-details">
                    <h4>{item.title}</h4>
                    <p>Price: {item.price}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => handleReduceQuantity(item._id, item.quantity)} 
                      aria-label={`Reduce quantity of ${item.title}`}>
                      -
                    </button>
                    <span className="quantity-number">{item.quantity}</span>
                    <button 
                      onClick={() => handleAddQuantity(item._id, item.quantity)} 
                      aria-label={`Increase quantity of ${item.title}`}>
                      +
                    </button>
                  </div>
                  <div className="item-total">
                    <p>Total ${(item.quantity * parseFloat(item.price.replace('$', ''))).toFixed(2)}</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item._id)} 
                    className="remove" 
                    aria-label={`Remove ${item.title} from cart`}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {cartItems.length > 0 && (
        <>
          <div className="total">
            <h2>Total Amount: ${totalAmount}</h2>
          </div>
          <div className="pay-button">
            <Link to="/pay">
              <button>Proceed to Pay</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
