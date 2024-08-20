// src/App.js

import React, { useState } from 'react';
import ProductList from './ProductList ';
import Cart from './Cart';
import products from "../products.json";
import "./App.css";
import UserDetailsForm from './UserDetailsForm';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    var found = false;

    for (let item of cartItems) {
      if (item.product.id === product.id) {
        found = true;
        item.quantity++;
      }
    }
    if (!found)
      setCartItems([...cartItems, { "product": product, "quantity": 1 }]);
    setTotalPrice(totalPrice + product.price);
  };

  const removeOneFromCart = (product) => {
    for (let item of cartItems) {
      if (item.product.id === product.id) {
        item.quantity--;
        setTotalPrice(totalPrice - product.price);
        if (item.quantity === 0) {
          var newCartItems = cartItems.filter((item) => {
            return item.product.id !== product.id;
          });
          setCartItems(newCartItems);
        }
        break;
      }
    }
  };

  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown(!isShown);
  };
  return (
    <>
      <h1 class="appTitle">Shopping Cart</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} removeOneFromCart={removeOneFromCart} />
      <h3>Total price: £{totalPrice.toFixed(2)}</h3>
      <div>
        <button onClick={handleClick}>
          {isShown ? 'Hide' : 'Show'} Get details
        </button>
        {isShown && <UserDetailsForm />}
      </div>
    </>
  );
}

export default App;

//   let x = cartItems.find(item => item.product.id == product.id);
//   if(x === undefined)
//     setCartItems([...cartItems, { "product": product, "quantity": 1 }]);
//   else{
//     x.quantity++;
//     setCartItems([...cartItems]); // force redraw
//   }
// }
