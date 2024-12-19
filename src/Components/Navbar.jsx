import React, { useEffect,useContext } from 'react';
import { CartContext } from '../Context/Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import'../Styles/Navbar.css'
import $ from 'jquery';
import { Link } from 'react-router-dom';
import {  FaHeart } from 'react-icons/fa';
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  useEffect(() => {
    $(document).ready(function () {
      $(".dropdown-main").hide();

      const categoryDelays = {
        'women-header': 2000,
        'men-header': 3000,
        'kids-header': 4000,
        'accessories-header': 5000,
      };

      $(".dropdown-list").hover(
        function () {
          $(this).find(".dropdown-main").fadeIn();
        },
        function () {
          const id = $(this).attr('id');
          const delay = categoryDelays[id] || 2000; // default to 2000ms if ID not found
          setTimeout(() => {
            $(this).find(".dropdown-main").fadeOut();
          }, delay);
        }
      );
    });
  }, []);
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className='container-fluid'>
          <Link className="navbar-brand" to="/">
            <img src="/images/logo.png" alt="logo" height={120} width={120} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item list">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              {/* Women */}
              <li className="nav-item list dropdown-list women-header-class" id="women-header">
                <Link className="nav-link" to="/">
                  Women
                </Link>
                <div className="dropdown-main women-list">
                  <div className="category">
                    <h6>Traditional Wear</h6>
                    <ul>
                      <li><Link to="/sarees">Sarees</Link></li>
                      <li><Link to="/kurta">Kurtas</Link></li>
                      <li><Link to="/anarkali">Anarkalis</Link></li>
                      <li><Link to="/lehenga">Lehengas</Link></li>
                    </ul>
                  </div>
                  <div className="category">
                    <h6>Western Wear</h6>
                    <ul>
                      <li><Link to="/tops">Tops</Link></li>
                      <li><Link to="/jeans">Jeans</Link></li>
                      <li><Link to="/skirts">Skirts</Link></li>
                    </ul>
                  </div>
                  <div className="category">
                    <h6>Footwear</h6>
                    <ul>
                      <li><Link to="/heels">Heels</Link></li>
                      <li><Link to="/flats">Flats</Link></li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* Men */}
              <li className="nav-item list dropdown-list men-header-class" id="men-header">
                <Link className="nav-link" to="/">
                  Men
                </Link>
                <div className="dropdown-main men-list">
                  <div className="category">
                    <h6>Formal Wear</h6>
                    <ul>
                      <li><Link to="/suits">Suits</Link></li>
                      <li><Link to="/shirt">Shirts</Link></li>
                    </ul>
                  </div>
                  <div className="category">
                    <h6>Casual Wear</h6>
                    <ul>
                      <li><Link to="/T-shirt">T-Shirts</Link></li>
                      <li><Link to="/men-jeans">Jeans</Link></li>
                      <li><Link to="/shorts">Shorts</Link></li>
                    </ul>
                  </div>
                  <div className="category">
                    <h6>Footwear</h6>
                    <ul>
                      <li><Link to="/sneakers">Sneakers</Link></li>
                      <li><Link to="/loafers">Loafers</Link></li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* Kids */}
              <li className="nav-item list dropdown-list kids-header-class" id="kids-header">
                <Link className="nav-link" to="/">
                  Kids
                </Link>
                <div className="dropdown-main kids-list">
                  <div className="category">
                    <h6>Girls</h6>
                    <ul>
                      <li><Link to="/dress">Dresses</Link></li>
                      <li><Link to="/kids-Tops">Tops</Link></li>
                    </ul>
                  </div>
                  <div className="category">
                    <h6>Boys</h6>
                    <ul>
                      <li><Link to="/boy">Shirts</Link></li>
                      <li><Link to="/short">Shorts</Link></li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>

            {/* Search Form */}
            <form className="d-flex me-3" role="search">
              <input
                className="form-control me-2 custom-search"
                type="search"
                placeholder="Search products"
                aria-label="Search"
              />
            </form>

            {/* Icons */}
            <div>
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link list-icon" to="/cart">
             <i className="fas fa-shopping-cart">
           <span className="badge badge-pill badge-danger cart-count">
              {cartItems.length}
             </span>
              </i>
           </Link>


                </li>
                <li className="nav-item">
                  <Link className="nav-link list-icon" to="/login">
                    <i className="fas fa-user"></i>
                  </Link>
                </li>
                <li className="nav-item">
                <Link to="/favorites">
              <FaRegHeart
                className="heart-icons"
                style={{ cursor: 'pointer', fontSize: '24px',color:'grey', marginTop:'5px' }}
              />
            </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
