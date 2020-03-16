import React from 'react';

const Products = (props)=>
        <div>
          <p>{props.name}</p>
          <p>${props.price}</p>
          <h3>{props.about}</h3>
        </div>
        
export default Products;
