import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, useTheme, keyframes, Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
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
    <Container maxWidth="sm">
      <Typography
        variant="h4"
        sx={ {
          padding: '0 1em',
        } }
      >
        Meu Carrinho de Compras
      </Typography>
      {/* {cart.length === 0
      && <p>Seu carrinho está vazio</p>} */}
      {cart.length > 0 && (
        <Grid
          item
          xs={ 12 }
          // sm={ 8 }
          md={ 12 }
          sx={ {
            marginTop: '1em',
            padding: '1em',
          } }
        >
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
      <Box
        sx={ {
          marginTop: '1em',
          padding: '1em',
        } }
      >
        <Link
          to="/checkout"
        >
          <Button variant="outlined">
            Finalizar Compra
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

export default Cart;
