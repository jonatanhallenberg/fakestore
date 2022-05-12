import { IProduct } from '../products/IProduct';
export interface ICartItem {
    id: number,
    quantity: number,
    product: IProduct
}