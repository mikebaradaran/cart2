// src/components/ProductList.js

import React from 'react';

function ProductList({ products, addToCart }) {
  return (
    <>
      <h2>Products</h2>
      <table border="1"> 
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th></th>
          </tr>          
        {products.map((product) => (  
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>£{product.price.toFixed(2)}</td>
            <td><button onClick={() => addToCart(product)}>Buy</button></td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default ProductList;
