import { RootState } from '../../app/store';
const totalPriceSelector = (state: RootState) => state.cart.items.map(item => item.quantity * item.product.price).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
export default totalPriceSelector;