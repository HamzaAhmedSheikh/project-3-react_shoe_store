// import React, {Component} from 'react'
// import { Link } from 'react-router-dom'
// import { DataContext } from '../Context'


//  class Products extends Component {

//     static contextType = DataContext


//      render() {
//        const { products } = this.context  
//         return(
//            <div id="product">
//               {
//                 products.map(product => (
//                     <div className="card" key={product._id}>
//                       <Link to={`./product/${product._id}`}>
//                          <img src={product.src} alt={product.title}/>  
//                       </Link>  
//                     </div>
//                 ))   
//               }
//            </div> 
//         )
//      }
//  }

//  export default Products