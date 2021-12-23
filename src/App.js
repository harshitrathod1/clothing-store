import React from 'react';
import { Routes,Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import './App.css';
import ShopPage from './pages/shop/shop.component';


function App(props) {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/shop" element={<ShopPage/>} />
      </Routes>
    </div>
  );
}

export default App;
