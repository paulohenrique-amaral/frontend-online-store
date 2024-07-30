import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Context from '../../context/Context';
import CardProduct from '../../components/CardProduct/CardProduct';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import { handleCalculateTotalCart } from '../../help/helper';

function Cart() {
  const { cart } = useContext(Context);

  return (
    <Container maxWidth="lg">
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
          justifyContent: 'space-around',
        } }
      >
        <Grid
          item
          xs={ 12 }
          md={ 6 }
          sx={ {
            height: '600px',
            overflow: 'auto',
            backgroundColor: 'white',
            marginTop: '1em',
            borderRadius: '5px',
            boxShadow: `rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, 
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
          md={ 5 }
          sx={ {
            height: '600px',
            backgroundColor: 'white',
            marginTop: '1em',
            padding: '1em',
            borderRadius: '5px',
            boxShadow: `rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, 
             rgba(9, 30, 66, 0.08) 0px 0px 0px 1px`,
          } }
        >
          <Typography
            variant="h5"
          >
            Resumo do Pedido
          </Typography>
          {cart.map((product: any, index: number) => (
            <Grid
              container
              key={ product.id }
              sx={ {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.5em',
              } }
            >
              <Typography
                variant="body1"
              >
                {index + 1}
              </Typography>
              <Typography
                variant="body1"
                sx={ {
                  width: '50%',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                } }
              >
                {product.title}
              </Typography>
              <Typography
                variant="body1"
              >
                {product.price.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </Typography>
              <Typography
                variant="body1"
              >
                {product.quantity}
                x
              </Typography>
            </Grid>
          ))}
          <Typography
            variant="h5"
            sx={ {
              marginTop: '1em',
            } }
          >
            Total
            {' '}
            {handleCalculateTotalCart(cart)}
          </Typography>
        </Grid>
      </Grid>
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
            Checkout
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

export default Cart;
