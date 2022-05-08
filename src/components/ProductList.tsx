import { useEffect, useState } from 'react';
import { IProduct } from '../types';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

interface ProductListProps {
    products: IProduct[],
    addProductToCart: (product: IProduct) => void
}

const renderProductBox = (product: IProduct, addProductToCart: (product: IProduct) => void) => (
    <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
                {product.category}
            </Card.Text>
            <Button variant="primary" onClick={() => addProductToCart(product)}>Lägg i varukorg</Button>
        </Card.Body>
    </Card>
)

const ProductList = ({ products, addProductToCart }: ProductListProps) => (
    <Container>
        <Row>
            {products.map(product => (
                <Col key={product.id} md={3}>
                    { renderProductBox(product, addProductToCart)}
                </Col>
            ))}
        </Row>
    </Container>
)

export default ProductList;