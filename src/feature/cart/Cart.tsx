import { ICartItem } from './ICartItem';
import { ListGroup, Button } from 'react-bootstrap';
import { removeCartItem, increaseQuantityByOne, decreaseQuantityByOne } from './cartSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import totalPriceSelector from './totalPriceSelector';

const renderCartItem = (
    cartItem: ICartItem,
    removeItemFromCart: (cartItem: ICartItem) => void,
    increaseQuantityByOne: (cartItemId: number) => void,
    decreaseQuantityByOne: (cartItemId: number) => void
) => (
    <ListGroup.Item key={cartItem.id}>
        ({cartItem.quantity}) {cartItem.product.title}, {cartItem.product.price} kr/st
        <Button variant="danger" onClick={() => removeItemFromCart(cartItem)}>Ta bort</Button>
        <Button variant="primary" onClick={() => decreaseQuantityByOne(cartItem.id)}>-</Button>
        <Button variant="primary" onClick={() => increaseQuantityByOne(cartItem.id)}>+</Button>
    </ListGroup.Item>
)

const Cart = () => {

    const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state) => state.cart.items);
    const totalPrice = useAppSelector(totalPriceSelector);

    return (
        cartItems.length ?
            <>
                <ListGroup>
                    {cartItems.map((cartItem: ICartItem) => renderCartItem(
                        cartItem,
                        () => dispatch(removeCartItem(cartItem.id)),
                        () => dispatch(increaseQuantityByOne(cartItem.id)),
                        () => dispatch(decreaseQuantityByOne(cartItem.id))
                    ))}

                </ListGroup>
                <b>Totalpris: {totalPrice}kr</b>
            </>
            : <p>Din varukorg är tom!</p>
    )
}

export default Cart;