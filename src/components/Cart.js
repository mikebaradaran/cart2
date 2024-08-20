// src/components/Cart.js

import React from 'react';
import "./Cart.css"
function Cart(props) {
  return (
    <>
      <h2>Cart</h2>
      {props.cartItems.length === 0 ? (<p>Your cart is empty</p>) :
        (
          <table className="table" style={{ width: '50%' }}>
            <thead className="thead-dark">
              <tr>
                <th>Quantity</th>
                <th>Name</th>
                <th>price</th>
              </tr>
            </thead>
            {props.cartItems.map((item, index) =>
              <tr key={index}>
                <td>{item.quantity}</td>
                <td>{item.product.name}</td>
                <td>£{item.product.price.toFixed(2)}</td>
                <td><button onClick={() => props.removeOneFromCart(item.product)}>-</button></td>
              </tr>
            )}
          </table>
        )}
    </>
  )
}

export default Cart;
