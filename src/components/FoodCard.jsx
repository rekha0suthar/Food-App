import React from 'react';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({ item, addToCart }) => {
  const navigateTo = useNavigate();

  const openItem = (id) => {
    navigateTo(`/item/${id}`);
  };

  return (
    <div>
      <div className="food-card" onClick={() => openItem(item.id)}>
        <img
          src={`http://localhost:3002/${item.image}`} // Correct image URL
          alt={item.name}
        />
        <span>
          <h3>{item.name}</h3>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Stop event propagation to prevent navigation
              addToCart(item);
            }}
          >
            Add
          </button>
        </span>
      </div>
    </div>
  );
};

export default FoodCard;
