import { useEffect, useState } from 'react';
import ProductList from './ProductList';
import { ICartItem } from '../types';
import { ListGroup, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../feature/cart/cartSlice';
import { useSelector } from 'react-redux';

const renderCartItem = (cartItem: ICartItem, removeItemFromCart: (cartItem: ICartItem) => void) => (
    <ListGroup.Item key={cartItem.id}>({cartItem.quantity}) {cartItem.product.title} <Button variant="danger" onClick={() => removeItemFromCart(cartItem)}>Ta bort</Button></ListGroup.Item>
)

const Cart = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state: any) => state.cart.items);

    return (
        cartItems.length ?
            <ListGroup>
                {cartItems.map((cartItem: ICartItem) => renderCartItem(cartItem, () => dispatch(removeCartItem(cartItem.id))))}

            </ListGroup>
            : <p>Din varukorg är tom!</p>
    )
}

export default Cart;