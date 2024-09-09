import React, { useReducer, useEffect } from 'react';
import { cartReducer, initialCartState } from '../reducer/cartReducer';
import '../css/navbar.css';

const Navbar = () => {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      dispatch({ type: 'LOAD_CART', payload: JSON.parse(storedCart) });
    }
  }, [cart]);
  return (
    <div className="header">
      <a href="/">
        <h2>Food Corner</h2>
      </a>
      <a href="/cart">
        <h2>
          Cart {cart.length > 0 && <span className="count">{cart.length}</span>}
        </h2>
      </a>
    </div>
  );
};

export default Navbar;
