import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]); 

  const addToCart = async (product, size) => {
    const item = { ...product, size, quantity: 1 };

    try {
      const response = await fetch('http://localhost:5000/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });

      if (!response.ok) {
        throw new Error('Failed to add item to cart');
      }

      const savedItem = await response.json();
      setCartItems((prevItems) => [...prevItems, savedItem]);
    } catch (error) {
      console.error(error);
      alert('Error adding item to cart.');
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to remove item from cart');
      }

      setCartItems((prevItems) => prevItems.filter(item => item._id !== productId));
    } catch (error) {
      console.error(error);
      alert('Error removing item from cart.');
    }
  };

  const updateCartItemQuantity = (id, quantity) => {
    setCartItems((prevItems) => 
      prevItems.map(item => 
        item._id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]);
  };
  const removeFromFavorites = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item._id !== productId)
    );
  };
//   const getTotalAmount = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
// };
const getTotalAmount = () => {
  return cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace(/[$,]/g, '')) || 0; // Ensure price is a valid number
    const quantity = parseInt(item.quantity, 10) || 0; // Ensure quantity is a valid number
    return total + price * quantity;
  }, 0).toFixed(2); // Format result to two decimal places
};

// Function to calculate the total quantity of items
const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
};


  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItemQuantity, favorites, addToFavorites ,removeFromFavorites,getTotalAmount, getTotalQuantity}}>
      {children}
    </CartContext.Provider>
  );
};