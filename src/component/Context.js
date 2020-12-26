import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Shoes 01",
                "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/8e392059bc8d4eb382b4aba501496ce6_9366/Galaxy_5_Shoes_Red_FW5703_01_standard.jpg",
                "description": "Lightweight Running Shoes",
                 "content": "GALAXY 5 SHOES LIGHTWEIGHT RUNNING SHOES WITH ADDED BREATHABILITY.",
                "price": 120,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Shoes 02",
                "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/ae89c62c7c1b4687adaaaba5013ea7ab_9366/Questar_Flow_Shoes_Black_FW5111_01_standard.jpg",
                "description": "QUESTAR FLOW SHOES",
                "content": "QUESTAR FLOW SHOES RUNNING-INSPIRED SHOES WITH FLOATING 3-STRIPES.",
                "price": 130,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Shoes 03",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-9cfea66d-b519-4b29-8e43-ce4164e8c558/adapt-bb-2-tie-dye-basketball-shoe-vdFwKS.jpg",
                "description": "Nike Adapt BB 2.0 Tie Dye",
                "content": "Nike Adapt BB 2.0 Tie-Dye Basketball Shoe",
                "price": 350,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Shoes 04",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9c6e8e0e-3b82-4a38-a470-def09b974b40/air-zoom-terra-kiger-6-mens-trail-running-shoe-kNcChX.jpg",
                "description": "Men's Nike Air Zoom",
                "content": "Men's Nike Air Zoom Terra Kiger 6 Trail Running Shoe",
                "price": 130,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Shoes 05",
                "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/d90117daae3f4d74afa2ac78011da87f_9366/Ultra_4D_5.0_Shoes_Black_G58158_01_standard.jpg",
                "description": "Adidas ultra 4D 5.0 Shoes",
                "content": "ULTRA 4D 5.0 SHOES RUNNING SHOES.",
                "price": 200,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Shoes 06",
                "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/f8debae677834918b27eac02014ede4a_9366/Nebraska_Huskers_Ultraboost_1.0_DNA_Shoes_Red_FY5806_01_standard.jpg",
                "description": "RUNNING SHOES ",
                "content": "NEBRASKA HUSKERS ULTRABOOST 1.0 DNA SHOES RUNNING SHOES FOR THE DEDICATED ATHLETE AND FAN.",
                "price": 144,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
              "_id": "7",
               "title": "VALOUR BLUE", 
               "src": "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
               "description": "air-jordan-3-valor-blue",
               "content": "The Nike air-jordan-3-valor-blue",
               "price": 99,
               "colors": ["orange", "black", "crimson", "teal"],
               "count": 1
                 
            },
            {
              "_id": "8",
              "title": "JORDAN MARS 270 LONDON", 
              "src": "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
              "description": "jordan-mars-270-london",
              "content": "The Nike jordan-mars-270-london",
              "price": 105,
              "colors": ["orange", "black", "crimson", "teal"],
              "count": 1
                   
            },
            {
             "_id": "9",
             "title": "RACER BLUE", 
             "src": "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
             "description": "air-jordan-1-zoom-racer-blue",
             "content": "The Nike air-jordan-1-zoom-racer-blue",
             "price": 90,
             "colors": ["orange", "black", "crimson", "teal"],
             "count": 1                  
            }
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
