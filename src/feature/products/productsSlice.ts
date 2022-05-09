import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { IProduct } from '../../types';

export interface ProductsState {
  items: IProduct[]
}

const initialState: ProductsState = {
  items: []
}

export const fetchProducts: any = createAsyncThunk(
  'products/fetch',
  async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
    return products;
  }
);

export const productsSlice = createSlice({
  name: 'procucts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  }
})

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByX } = productsSlice.actions

export default productsSlice.reducer