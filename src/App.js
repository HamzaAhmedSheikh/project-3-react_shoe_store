import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Products from './components/Products'
import Home from './components/Home'
// import ProductDetails from './components/ProductDetails'
// import ProductIndex from './components/ProductIndex'

import  DataProvider  from './components/Context'

import {
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom'




function App() {
  return (
   <DataProvider>
     <Router>
      <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='shoes' element={<Products />} />
      
     </Routes>    
    </Router> 
   </DataProvider> 
           
    
  );
}

export default App;
