import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';
import Products from './feature/products/Products';
import Cart from './feature/cart/Cart';

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
