import { useContext } from 'react';
import Context from '../../context/Context';

function ShoppingCart() {
  const { cartSize } = useContext(Context);

  return (
    <div>
      <span>Shopping Cart</span>
      <span>{ cartSize }</span>
    </div>
  );
}

export default ShoppingCart;
