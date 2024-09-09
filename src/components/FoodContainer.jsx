import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import FoodCard from './FoodCard';
import { cartReducer, initialCartState } from '../reducer/cartReducer';
import { toast } from 'react-toastify';
import '../css/food-card.css';

const FoodContainer = () => {
  const [foodData, setFoodData] = useState([]);
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  // Function to add an item to the cart
  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
    toast.success('Item added to cart successfully!');
  };

  // Fetch food data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3002/meals');
        setFoodData(res.data);
      } catch (error) {
        console.log(error);
        toast.error('Something went wrong, try again!');
      }
    };
    fetchData();
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    dispatch({ type: 'SAVE_CART' });
  }, [cart]);

  return (
    <div className="food-container">
      {foodData.map((item) => (
        <FoodCard key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default FoodContainer;
