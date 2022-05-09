import { useEffect, useState } from 'react';
import ProductList from './ProductList';
import { IProduct } from '../types';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../feature/products/productsSlice';
import { useSelector } from 'react-redux';

const Products = () => {
    const products = useSelector((state: any) => state.products.items);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return products && <ProductList products={products} />

}

export default Products;