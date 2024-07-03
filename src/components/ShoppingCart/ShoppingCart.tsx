import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../context/Context';

function ShoppingCart() {
  const { cartSize } = useContext(Context);

  return (
    <div>
      <span>Shopping Cart</span>
      <Link to="/carrinho" data-testid="shopping-cart-button">
        <button>Ir para o carrinho</button>
      </Link>
      {cartSize === 0
        ? ''
        : <span data-testid="shopping-cart-size">{cartSize}</span>}
    </div>
  );
}

export default ShoppingCart;
