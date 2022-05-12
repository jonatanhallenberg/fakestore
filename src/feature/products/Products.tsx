import { useEffect } from 'react';
import ProductList from './ProductList';
import { fetchProducts } from '../products/productsSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

const Products = () => {
    const products = useAppSelector((state) => state.products.items);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return products && <ProductList products={products} />

}

export default Products;