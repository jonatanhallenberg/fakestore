import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';
import Products from './components/Products';
import Cart from './components/Cart';
import { ICartItem, IProduct } from './types';

const App = () => {

  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  const nextCartItemId = cartItems.length ? cartItems[cartItems.length - 1].id + 1 : 1;

  const addProductToCart = (product: IProduct) => {
    console.log(cartItems, product);
    const existingCartItem = cartItems.find(cartItem => cartItem.product.id === product.id);
    if (existingCartItem) {
      //Produkten finns redan i varukorgen -> quantity ska ökas med 1
      setCartItems(cartItems.map(cartItem => cartItem.id !== existingCartItem.id ? cartItem : { ...existingCartItem, quantity: cartItem.quantity + 1 }))
    } else {
      //Produkten finns inte i varukorgen -> läggs till
      const newCartItem = { id: nextCartItemId, quantity: 1, product: { ...product } };
      setCartItems([...cartItems, newCartItem]);
    }
  }

  const removeItemFromCart = (cartItemToRemove: ICartItem) => {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id));
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>The Fake Store</h1>
        </Col>
      </Row>
      <Row>
        <Col md={9}>
          <h2>Produkter</h2>
          <Products addProductToCart={addProductToCart} />
        </Col>
        <Col md={3}>
          <h3>Varukorg</h3>
          <Cart cartItems={cartItems} removeItemFromCart={removeItemFromCart} />
        </Col>
      </Row>
    </Container>
  )
}

export default App;
