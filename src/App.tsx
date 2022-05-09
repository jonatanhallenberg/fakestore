import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';
import Products from './components/Products';
import Cart from './components/Cart';
import { ICartItem, IProduct } from './types';
import { useSelector } from 'react-redux';

const App = () => {

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


          <Products />
        
        
        </Col>
        <Col md={3}>
          <h3>Varukorg</h3>


          <Cart />
        
        </Col>
      </Row>
    </Container>
  )
}

export default App;
