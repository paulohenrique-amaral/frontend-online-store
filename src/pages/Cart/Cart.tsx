import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Context from '../../context/Context';
import CardProduct from '../../components/CardProduct/CardProduct';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import { handleCalculateTotalCart } from '../../help/helper';
import TableDashBoard from '../../components/TableDashBoard/TableDashBoard';

function Cart() {
  const { cart } = useContext(Context);

  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        sx={ {
          padding: '0 1em',
          textAlign: 'center',
        } }
      >
        Meu Carrinho de Compras
      </Typography>
      <Grid
        container
        sx={ {
          display: 'flex',
          justifyContent: 'center',
        } }
      >
        <Grid
          item
          xs={ 12 }
          md={ 12 }
          sx={ {
            height: '600px',
            overflow: 'auto',
            backgroundColor: 'white',
            marginTop: '1em',
            borderRadius: '5px',
            boxShadow: `rgba(155, 156, 158, 0.25) 0px 4px 8px -2px, 
            rgba(9, 30, 66, 0.08) 0px 0px 0px 1px`,
          } }
        >
          {cart.length > 0 ? (
            <Grid
              item
              xs={ 12 }
              md={ 12 }
              sx={ {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
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
        </Grid>
        <Grid
          item
          xs={ 12 }
          md={ 12 }
          sx={ {
            height: '600px',
            overflow: 'auto',
            backgroundColor: 'white',
            marginTop: '1em',
            padding: '1em',
            borderRadius: '5px',
            boxShadow: `rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, 
             rgba(9, 30, 66, 0.08) 0px 0px 0px 1px`,
          } }
        >
          <TableDashBoard />
          <Box>
            <Typography
              variant="h6"
              sx={ {
                padding: '0 1em',
                marginTop: '1em',
              } }
            >
              Total:
              {' '}
              {handleCalculateTotalCart(cart)}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={ 12 }
          sx={ {
            marginBottom: '7em',
          } }
        >
          <Box
            sx={ {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '1em',
              padding: '1em',
            } }
          >
            <Link to="/">
              <Button variant="outlined">
                Voltar às Compras
              </Button>
            </Link>
            <Link to="/checkout">
              <Button variant="outlined">
                Checkout
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Cart;
