import React from 'react'

import { Link } from  'react-router-dom'

 const Products = () => {

  const shoes = {
     "air-jordan-3-valor-blue": {
        name: "VALOUR BLUE",
        img:
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
      "jordan-mars-270-london": {
        name: "JORDAN MARS 270 LONDON",
        img:
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
       "air-jordan-1-zoom-racer-blue": {
        name: "RACER BLUE",
        img:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
        "Park Avenue Cap-Toe Oxford": {
         name: "Park Avenue",
         img:
           "https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dw6a1820f0/images/2.1/mens-shoes/parkave-5610-darkchili-angle-web.jpg?sw=736&sh=736&sm=fit"
 
    },
        "Nike Air Zoom-Type": {
         name: "Nike Air",
         img:
           "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg"  
    },
        "Nike Air VaporMax FlyKnit 3 USA": {
         name: "Nike Air VaporMax",
         img:
           "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-edc5bfbc-b097-494a-a7cb-d4f6c8afa5ca/air-vapormax-flyknit-3-usa-mens-shoe-SKwDlj.jpg"   
    },
};
    

    return (
        <div>
          <h1> Products </h1>
          <ul>
            {Object.entries(shoes).map(([productID,{name,img}]) => 
               (
                  <li key={productID}>
                    <Link to={productID}>
                       <h2> {name} </h2> 
                       <img src={img} alt={name} />
                    </Link>  

                    
                  </li> 
               )              

           
            )}  
          </ul>     
         
        </div>
    )
}


export default Products