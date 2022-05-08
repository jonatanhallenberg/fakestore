import { useEffect, useState } from 'react';
import ProductList from './ProductList';
import { ICartItem } from '../types';
import { ListGroup, Button } from 'react-bootstrap';

interface CartProps {
    cartItems: ICartItem[],
    removeItemFromCart: (cartItem: ICartItem) => void
}

const renderCartItem = (cartItem: ICartItem, removeItemFromCart: (cartItem: ICartItem) => void) => (
    <ListGroup.Item key={cartItem.id}>({cartItem.quantity}) {cartItem.product.title} <Button variant="danger" onClick={() => removeItemFromCart(cartItem)}>Ta bort</Button></ListGroup.Item>
)

const Cart = ({ cartItems, removeItemFromCart }: CartProps) => (
    cartItems.length ?
        <ListGroup>
            { cartItems.map(cartItem => renderCartItem(cartItem, removeItemFromCart))}
            
        </ListGroup>
        : <p>Din varukorg är tom!</p>
)

export default Cart;