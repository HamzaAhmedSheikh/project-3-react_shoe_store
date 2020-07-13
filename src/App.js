import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
  Outlet
} from 'react-router-dom'

const Home = () => ( <h1>Hi I'am in Home </h1> )
const BlogIndex = () => {
  return (
    <div>
      <h1> Welcome to our blog</h1>

      <ul>
        <Link as='li' to='authors'> Authors </Link>
        <Link as='li' to='1'> Post 1 </Link>
        <Link as='li' to='2'> Post 2 </Link>
      </ul>

        <Outlet />
    </div>
  )
}

const BlogAuthors = () => (<h2> Hamza </h2>)

function App() {
  return (
    <Router>
      <div>
        <ul className="navbar">
           <NavLink to='/' as='li'> Home </NavLink> 
           <NavLink to='blog' as='li'> Blog </NavLink> 
        </ul>     
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='blog' element={<BlogIndex />}>
           <Route path='authors' element={<BlogAuthors />} />
         </Route>
       </Routes>
     </div>
    </Router>
    
  );
}

export default App;
