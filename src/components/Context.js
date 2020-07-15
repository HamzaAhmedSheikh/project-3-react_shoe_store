import React, { Component } from 'react'

export const DataContext = React.createContext();

class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Nike Shoes 01",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",                  
                "price": 80,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Nike Shoes 02",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
                
                
                "price": 19,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Nike Shoes 03",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
                
                
                "price": 50,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Nike Shoes 04",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
                
                
                "price": 15,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Nike Shoes 05",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
                "price": 10,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Nike Shoes 06",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",          
                "price": 17,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

      render() {
        const {products} = this.state
          return(
              <DataContext.Provider value={{products}}>

                {this.props.children}
              </DataContext.Provider>
          )
      }
}

export default DataProvider