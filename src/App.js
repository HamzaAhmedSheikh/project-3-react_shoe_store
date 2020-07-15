import React from 'react';
import './App.css';

import Header from './component/Header'
import Section from './component/Section'


 import  { DataProvider }  from './component/Context'

import {
  BrowserRouter as Router,  
} from 'react-router-dom'




function App() {
  return (
   <DataProvider>
     <div>
      <Router>
       <Header />
       <Section />         
      </Router> 
     </div>      
  </DataProvider> 
           
    
  );
}

export default App;
