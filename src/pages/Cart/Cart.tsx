import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, useTheme, useMediaQuery } from '@mui/material';
import Context from '../../context/Context';
import CardProduct from '../../components/CardProduct/CardProduct';
import { ProductWithQuantityType } from '../../types/apiTypes';

function Cart() {
  const {
    cart,
    removeItem,
    decrementItemQuantity,
    incrementItemQuantity,
  } = useContext(Context);

  return (
    <Container maxWidth="lg">
      <h1>Meu Carrinho de Compras</h1>
      {/* {cart.length === 0
      && <p>Seu carrinho está vazio</p>} */}
      {cart.length > 0 && (
        <Grid item xs={ 12 } sm={ 8 } md={ 9 }>
          {cart.map((product: any) => (
            <div key={ product.id }>
              <CardProduct
                id={ product.id }
                product={ product }
                image={ product.thumbnail }
                name={ product.title }
                price={ product.price }
                freight={ product.shipping.free_shipping }
              />
            </div>
          ))}
        </Grid>
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
    </Container>
  );
}

export default Cart;
