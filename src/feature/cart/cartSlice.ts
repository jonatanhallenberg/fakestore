import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartItem } from './ICartItem';
import { IProduct } from '../products/IProduct';

export interface CartState {
  items: ICartItem[]
}

const initialState: CartState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<IProduct>) => {
      const nextCartItemId = state.items.length ? state.items[state.items.length - 1].id + 1 : 1;
      const existingCartItem = state.items.find(cartItem => cartItem.product.id === action.payload.id);

      if (existingCartItem) {
        existingCartItem.quantity++;
      } else {
        const newCartItem: ICartItem = {
          product: action.payload,
          quantity: 1,
          id: nextCartItemId
        }
        state.items.push(newCartItem);
      }
    },
    removeCartItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    increaseQuantityByOne: (state, action: PayloadAction<number>) => {
      const cartItemId = action.payload;
      const cartItem = state.items.find(item => item.id === cartItemId);
      if (cartItem) {
        cartItem.quantity++;
      }
    },
    decreaseQuantityByOne: (state, action: PayloadAction<number>) => {
      const cartItemId = action.payload;
      const cartItem = state.items.find(item => item.id === cartItemId);
      if (cartItem) {
        cartItem.quantity--;
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProductToCart, removeCartItem, increaseQuantityByOne, decreaseQuantityByOne } = cartSlice.actions

export default cartSlice.reducer