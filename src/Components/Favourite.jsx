import React, { useContext } from 'react';
import { CartContext } from '../Context/Context';
import '../Styles/Favourite.css';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useContext(CartContext);

  if (!favorites || favorites.length === 0) {
    return (
      <div className="favorites-page">
        <p>Your favorites list is empty.</p>
        <Link to='/'>
         <button>Return to homepage</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Your Favorites</h2>
      <div className="favorites-page">
        <ul>
          {favorites.map((item, index) => (
            <li key={index}>
              <div className="favorite-item">
                <div className="favorite-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="favorite-details">
                  <h4>{item.title}</h4>
                  <p>Price: {item.price}</p>
                  <button className='buy-button'>Buy Now</button>
                  <button onClick={() => removeFromFavorites(item._id)}>Remove</button> {/* Use item._id */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Favorites;
