import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

const Home = () => ( <h1>Hi I'am in Home </h1> )
const Blog = () => ( <h1>Hi I'am in Blog </h1> )

function App() {
  return (
    <Router>
      <div className="App">
      <h1> This is my project#3 </h1>

       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='blog' element={<Blog />} />
       </Routes>
     </div>
    </Router>
    
  );
}

export default App;
