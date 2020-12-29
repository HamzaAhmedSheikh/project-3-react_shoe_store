import React, { createContext, useState, useEffect } from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
   const [products, setProducts] = useState([
     {
       _id: "1",
       title: "Shoes 01",
       images: [
         "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/8e392059bc8d4eb382b4aba501496ce6_9366/Galaxy_5_Shoes_Red_FW5703_01_standard.jpg",
         "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/7bb642f140ee48fcb2feaba50149735c_9366/Galaxy_5_Shoes_Red_FW5703_06_standard.jpg",
         "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/63bb6b15b7094d25b566abac0099ed67_9366/Galaxy_5_Shoes_Red_FW5703_010_hover_standard.jpg",
         "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/d704e13c85fd44ac84a0aba50149880b_9366/Galaxy_5_Shoes_Red_FW5703_04_standard.jpg",
       ],
       description:
         "Lightweight Running Shoes",
       content:
         "GALAXY 5 SHOES LIGHTWEIGHT RUNNING SHOES WITH ADDED BREATHABILITY.",
       colors: ["red", "black", "teal"],
       sizes: ["XL", "L", "M", "XM", "LX"],
       price: 120,
       count: 1,
     },
     {
       _id: "2",
       title: "Shoes 02",
       images: [
         "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/ae89c62c7c1b4687adaaaba5013ea7ab_9366/Questar_Flow_Shoes_Black_FW5111_01_standard.jpg",
         "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/10ec032ffb524754b880a97f00d5027d_9366/Questar_Flow_Shoes_Black_F36255_05_standard.jpg",
         "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/997e6804ba244458bd77a97f00d4d2cd_9366/Questar_Flow_Shoes_Black_F36255_06_standard.jpg",
         "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/b340628cbb4a403d8ef4a97f00d4ded6_9366/Questar_Flow_Shoes_Black_F36255_02_standard.jpg",
       ],
       description:
         "QUESTAR FLOW SHOES",
       content:
         "QUESTAR FLOW SHOES",
       colors: ["red", "black", "teal"],
       sizes: ["XL", "L", "M", "XM", "LX"],
       price: 130,
       count: 1,
     },
     {
       _id: "3",
       title: "Shoes 03",
       images: [
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/820abc01-cfc1-4956-aa33-38d19d4acecc/air-max-plus-ii-shoe-j4RxXW.jpg",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d9c61c10-0a24-422d-be3a-263832ea5b0f/air-max-plus-ii-shoe-j4RxXW.jpg",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/49e4bcac-811d-4ad4-9b13-2522774e1614/air-max-plus-ii-shoe-j4RxXW.jpg",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c15e0332-99bf-4bdb-879c-aa9c68e64e9f/air-max-plus-ii-shoe-j4RxXW.jpg",
       ],
       description:
         "Nike Air Max Plus II",
       content:
         "Nike Air Max Plus II.",
       colors: ["red", "black", "teal"],
       sizes: ["XL", "L", "M", "XM", "LX"],
       price: 250,
       count: 1,
     },
     {
       _id: "4",
       title: "Shoes 04",
       images: [
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74a6c25b-2cb9-462b-a5a6-deb2e4c78764/space-hippie-04-shoe-7ZDH2b.jpg",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9314f636-c5a7-419e-a028-bf9515bf518b/space-hippie-04-shoe-7ZDH2b.jpg",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8fad5638-73e6-42b7-b08e-f33299b913e4/space-hippie-04-shoe-7ZDH2b.jpg",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/771cf58e-efc0-4a8b-aef3-8e52508a85bd/space-hippie-04-shoe-7ZDH2b.jpg",
       ],
       description:
         "Nike Space Hippie 04",
       content:
         "Nike Space Hippie 04",
       colors: ["red", "black", "teal"],
       sizes: ["XL", "L", "M", "XM", "LX"],
       price: 170,
       count: 1,
     },
     {
       _id: "5",
       title: "Shoes 05",
       images: [
         "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/3f01257d8ff34945b5c8ac4d013b0643_9366/Ultra_4D_5.0_Shoes_Black_G58159_01_standard.jpg",
         "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/d1a98321c88746b4aec8ac4d013b0c32_9366/Ultra_4D_5.0_Shoes_Black_G58159_06_standard.jpg",
         "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/41f039721f324b58a7e0ac4d013b71d7_9366/Ultra_4D_5.0_Shoes_Black_G58159_02_standard_hover.jpg",
         "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/6f05624d89f54c9a93e9ac4d013b8598_9366/Ultra_4D_5.0_Shoes_Black_G58159_05_standard.jpg",
       ], 
       description:
         "ULTRA 4D 5.0 SHOES.",
       content:
         "RUNNING SHOES CODED FOR ATHLETES",
       colors: ["red", "black", "teal"],
       sizes: ["XL", "L", "M", "XM", "LX"],
       price: 200,
       count: 1,
     },
     {
       _id: "6",
       title: "Shoes 06",
       images: [
         "https://c.static-nike.com/a/images/t_prod_ss/w_480,c_limit,q_auto,f_auto/d0a1b83c-716a-4ebb-859c-2ef11c8a1aa7/jordan-mars-270-london-release-date.jpg",
         "https://c.static-nike.com/a/images/t_prod_ss/w_480,c_limit,q_auto,f_auto/4536b74e-0f1f-42fb-9188-e0f0c9724113/jordan-mars-270-london-release-date.jpg",
         "https://c.static-nike.com/a/images/t_prod_ss/w_480,c_limit,q_auto,f_auto/f0d79a54-baf7-42af-b58c-f4ece09f6c58/jordan-mars-270-london-release-date.jpg",
         "https://c.static-nike.com/a/images/t_prod_ss/w_480,c_limit,q_auto,f_auto/99fd5582-37fd-47f5-b341-6deddc5db776/jordan-mars-270-london-release-date.jpg",
       ],
       description:
         "Jordan Mars 270 London.",
       content:
         "The Nike jordan-mars-270-london",
       colors: ["red", "black", "teal"],
       sizes: ["XL", "L", "M", "XM", "LX"],
       price: 160,
       count: 1,
     },
   ]);

   const [cart, setCart] = useState([])

   const addCart = (id) => {
     const check = cart.every((item) => {
       return item._id !== id;
     });
     if (check) {
       const data = products.filter((product) => {
         return product._id === id;
       });
       setCart([...cart, ...data]);
     } else {
       alert("The product has been added to cart.");
     }
   };

   useEffect(() => {
     const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
     if(dataCart) setCart(dataCart)
    },[])

   useEffect(() => {
      localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])


   const value = {
      products: [products, setProducts],
      cart: [cart, setCart],
      addCart: addCart
    }


   return (
    <DataContext.Provider value={value}>
        {props.children}
    </DataContext.Provider>
  )
}
