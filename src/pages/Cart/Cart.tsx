import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../context/Context';
import { ProductWithQuantityType } from '../../types/apiTypes';

function Cart() {
  const {
    cart,
    removeItem,
    decrementItemQuantity,
    incrementItemQuantity,
  } = useContext(Context);

  return (
    <div>
      <h1>Seu Carrinho de Compras</h1>
      {cart.length === 0
      && <p>Seu carrinho está vazio</p>}
      {cart.length > 0 && (
        <div>
          {cart.map((product: any) => (
            <div key={ product.id }>
              <div>
                <button
                  onClick={ () => removeItem(product.id) }
                  type="button"
                >
                  X
                </button>
              </div>
              <div>
                <img
                  src={ product.thumbnail }
                  alt={ `Imagem de ${product.title}` }
                  width={ 150 }
                />
              </div>
              <p>{ product.title }</p>
              <p>{ `R$ ${product.price}` }</p>
              <div>
                <button
                  onClick={ () => decrementItemQuantity(product.id) }
                  type="button"
                >
                  -
                </button>
                <p>
                  {product.quantity}
                </p>
                <button
                  onClick={ () => incrementItemQuantity(product.id) }
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div>
        <Link
          to="/checkout"
        >
          <button>
            Finalizar Compra
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
