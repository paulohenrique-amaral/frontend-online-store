import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Context from '../../context/Context';
import CardProduct from '../../components/CardProduct/CardProduct';
import EmptyCart from '../../components/EmptyCart/EmptyCart';

function Cart() {
  const {
    cart,
  } = useContext(Context);

  return (
    <Container maxWidth="sm">
      <Typography
        variant="h4"
        sx={ {
          padding: '0 1em',
          textAlign: 'center',
        } }
      >
        Meu Carrinho de Compras
      </Typography>
      {cart.length > 0 ? (
        <Grid
          item
          xs={ 12 }
          // sm={ 8 }
          md={ 12 }
          sx={ {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            // alignItems: 'center',
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
      ) : (
        <EmptyCart />
      )}
      <Box
        sx={ {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '1em',
          marginBottom: '6em',
          padding: '1em',
        } }
      >
        <Link
          to="/"
        >
          <Button variant="outlined">
            Voltar ás Compras
          </Button>
        </Link>
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
