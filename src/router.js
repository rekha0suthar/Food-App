import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Item from './components/Item';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<Item />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Router;
