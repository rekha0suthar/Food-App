import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/item.css';

const Item = () => {
  const { id } = useParams(); // Get the item id from the URL
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Fetch item details based on the id from the backend or from state
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/meals`);
        const itemData = response.data.find((meal) => meal.id === id); // Find the item by id
        setItem(itemData);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };
    fetchItem();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-card">
      <img src={`http://localhost:3002/${item.image}`} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>
          <strong>Price:</strong> ${item.price}
        </p>
        {/* <button onClick={() => addToCart(item)}>Add</button> */}
      </div>
    </div>
  );
};

export default Item;
