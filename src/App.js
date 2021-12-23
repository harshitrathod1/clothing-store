import React from 'react';
import { Routes,Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import './App.css';


const HatsPage = () => {
  return(
    <div>
      <h1>Hats Page</h1>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/hats" element={<HatsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
