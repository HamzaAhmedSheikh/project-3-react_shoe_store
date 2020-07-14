import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
// import Products from './components/Products'
import Home from './components/Home'
// import ProductDetails from './components/ProductDetails'
// import ProductIndex from './components/ProductIndex'

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
      
     </Routes>    
    </Router>        
    
  );
}

export default App;
