import React from 'react';
import '../Styles/Footer.css'
const Footer = () => {
  return (
    <footer className=" text-white pt-5 pb-4">
      <div className="container-fluid text-md-left">
        <div className="row text-md-left">
            {/* customer service */}
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold footer-heading">CUSTOMER SERVICE</h5>
            <p>
              <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Return snd cancellation</a>
            </p>
            <p>
              <a href="#" className="text-white" style={{ textDecoration: 'none' }}>My Account</a>
            </p>
            <p>
              <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Exchange policy</a>
            </p>
            <p>
              <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Shipping</a>
            </p>
            <p>
              <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Payment options</a>
            </p>
          </div>
          {/* Links Section */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold footer-heading">Links</h5>
            <p>
              <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Discover</a>
            </p>
            <p>
              <a href="#" className="text-white" style={{ textDecoration: 'none' }}>About-us</a>
            </p>
            <p>
              <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Services</a>
            </p>
            <p>
              <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Contact-us</a>
            </p>
          </div>
          {/* Contact Section */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold footer-heading">Contact</h5>
            <p>
              <i className="fas fa-home mr-3"></i> 123 Main Street, Tamilnadu
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i> dazzlecouture@gmail.com
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i> +1 234 567 890
            </p>
            <p>
              <i className="fas fa-print mr-3"></i> +1 234 567 891
            </p>
          </div>
          {/* Social Media Section */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold footer-heading">Follow Us</h5>
            <a href="#" className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998' }} role="button"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#55acee' }} role="button"><i className="fab fa-twitter"></i></a>
            <a href="#" className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#dd4b39' }} role="button"><i className="fab fa-google"></i></a>
            <a href="#" className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} role="button"><i className="fab fa-instagram"></i></a>
           
            
          </div>
        </div>
        <hr className="mb-4" />
        <div className="row align-items-center ">
          <div className="col-md-7 col-lg-8">
            <p className="text-center text-md-left"> Copyright ©2024 The DazzleCouture all rights reserved.   
            </p>
          </div>
          <div className="col-md-5 col-lg-4">
            <p className="text-center text-md-right">Designed by Sowndarya</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
