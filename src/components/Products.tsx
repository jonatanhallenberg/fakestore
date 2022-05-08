import { useEffect, useState } from 'react';
import ProductList from './ProductList';
import { IProduct } from '../types';

interface ProductsType {
    addProductToCart: (product: IProduct) => void;
}

const Products = ({ addProductToCart }: ProductsType) => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return products && <ProductList products={products} addProductToCart={addProductToCart} />

}

export default Products;