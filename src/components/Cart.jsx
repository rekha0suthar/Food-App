import React, { useEffect, useReducer } from 'react';
import { cartReducer, initialCartState } from '../reducer/cartReducer';
import { toast } from 'react-toastify';
import '../css/cart.css';
const Cart = () => {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      dispatch({ type: 'LOAD_CART', payload: JSON.parse(storedCart) });
    }
  }, []);

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    dispatch({ type: 'SAVE_CART' });
    toast.success('Item removed from cart successfully!');
  };

  return (
    <div className="cart-container">
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index} className="cart-card">
            <img
              src={`http://localhost:3002/${item.image}`} // Correct image URL
              alt={item.name}
            />
            <div>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)}>&times;</button>
          </div>
        ))
      ) : (
        <div className="empty-cart">Empty cart</div>
      )}
    </div>
  );
};

export default Cart;
