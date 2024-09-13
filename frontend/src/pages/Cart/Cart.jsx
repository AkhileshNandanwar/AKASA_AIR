import React, { useContext, useState, useEffect } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, currency, deliveryCharge } = useContext(StoreContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Calculate subtotal and total
  const subtotal = getTotalCartAmount();
  const total = subtotal + deliveryCharge;

  // Error handling
  useEffect(() => {
    if (food_list.length === 0) {
      setError('No items available to display.');
    } else if (subtotal === 0) {
      setError('Your cart is empty.');
    } else {
      setError('');
    }
  }, [food_list, subtotal]);

  return (
    <div className='cart'>
      <div className="cart-header">
        <button className='back-button' onClick={() => navigate('/')}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
  <path d="M12.146 1.854a.5.5 0 0 1 .707.707L5.207 8l7.646 7.646a.5.5 0 0 1-.707.707l-8-8a.5.5 0 0 1 0-.707l8-8z"/>
</svg>

          Back to Home
        </button>
      </div>
      {error && <div className='error-message'>{error}</div>}
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p> <p>Title</p> <p>Price</p> <p>Quantity</p> <p>Total</p> <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={url + "/images/" + item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>{currency}{item.price}</p>
                  <div>{cartItems[item._id]}</div>
                  <p>{currency}{item.price * cartItems[item._id]}</p>
                  <p className='cart-items-remove-icon' onClick={() => removeFromCart(item._id)}>x</p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details"><p>Subtotal</p><p>{currency}{subtotal}</p></div>
            <hr />
            <div className="cart-total-details"><p>Delivery Fee</p><p>{currency}{subtotal === 0 ? 0 : deliveryCharge}</p></div>
            <hr />
            <div className="cart-total-details"><b>Total</b><b>{currency}{total}</b></div>
          </div>
          <button onClick={() => navigate('/order')} disabled={subtotal === 0}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
