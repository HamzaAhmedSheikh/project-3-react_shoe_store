import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Products from './components/Products'
import Home from './components/Home'

import {
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom'



function App() {
  return (
    <Router>
      <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='products' element={<Products />} /> 
     </Routes>    
    </Router>        
    
  );
}

export default App;
