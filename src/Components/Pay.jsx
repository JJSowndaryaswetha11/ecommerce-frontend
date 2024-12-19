import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../Context/Context';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../Styles/Pay.css';

const Pay = () => {
  const { cartItems, getTotalAmount, getTotalQuantity } = useContext(CartContext);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const product = location.state?.product;

  const minimumAmount = 1; // Minimum amount in rupees
  const maximumAmount = 100000; // Maximum amount in rupees

  const totalAmount = product ? product.price : getTotalAmount();
  const totalQuantity = product ? 1 : getTotalQuantity();

  console.log("Total Amount:", totalAmount);
  console.log("Total Quantity:", totalQuantity);

  const handlePayment = async () => {
    if (totalAmount < minimumAmount) {
      alert(`Order amount should be at least ₹${minimumAmount}`);
      return;
    }

    if (totalAmount > maximumAmount) {
      alert(`Order amount should not exceed ₹${maximumAmount}`);
      return;
    }

    setLoading(true);

    try {
      const { data } = await axios.post('http://localhost:5001/create-order', {
        amount: totalAmount * 100,
        currency: 'INR',
      });

      const { order_id, currency, amount: orderAmount } = data;

      const options = {
        key: 'rzp_test_8lCA3HtrXpU4Ir',
        amount: orderAmount,
        currency,
        name: 'Test Company',
        description: 'Test Transaction',
        order_id,
        handler: async function (response) {
          const verifyData = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };

          try {
            const result = await axios.post('http://localhost:5001/verify-payment', verifyData);
            if (result.data.message === 'Payment successful') {
              setPaymentSuccess(true);
            } else {
              setPaymentSuccess(false);
            }
          } catch (verifyError) {
            console.error("Verification Error:", verifyError);
            setPaymentSuccess(false);
          }
        },
        prefill: {
          name: "Sowndarya",
          email: "sowndarya123@example.com",
          contact: "9876543210",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment Error:", error);
      setPaymentSuccess(false);
    }

    setLoading(false);
  };

  return (
    <div className="pay-section">
      <h2>Payment</h2>
      {paymentSuccess ? (
        <div className="payment-success">
          <h3>Payment Successful!</h3>
          <p>Thank you for your purchase. Your transaction was successful.</p>
        </div>
      ) : (
        <div className="payment-details">
          <p><strong>Total Amount: </strong>₹{totalAmount}</p>
          <p><strong>Total Quantity: </strong>{totalQuantity} items</p>
          <button
            onClick={handlePayment}
            disabled={loading}
            className="pay-now-button"
          >
            {loading ? 'Processing Payment...' : 'Pay Now'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Pay;
