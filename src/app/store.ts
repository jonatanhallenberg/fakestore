import { configureStore } from "@reduxjs/toolkit";
import productsSlice from '../feature/products/productsSlice';
import cartReducer from '../feature/cart/cartSlice';

export default configureStore({
    reducer: {
        products: productsSlice,
        cart: cartReducer
    }
})