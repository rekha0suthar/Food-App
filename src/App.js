import React from 'react';
import Router from './router';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
};

export default App;
