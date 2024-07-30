import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, Box } from '@mui/material';
import Button from '@mui/material/Button';
import Context from '../../context/Context';
import CardCheckout from '../../components/CardCheckout/CardCheckout';
import ModalFormCheckout from '../../components/ModalFormCheckout/ModalFormCheckout';
import { handleCalculateTotalCart } from '../../help/helper';

function Checkout() {
  const [open, setOpen] = useState(false);

  const { cart } = useContext(Context);

  return (
    <Container maxWidth="lg">
      <h2>
        Resumo Checkout
      </h2>
      <Grid container>
        <Grid item xs={ 12 } md={ 12 }>
          <Box
            sx={ {
              height: '500px',
              overflow: 'auto',
            } }
          >
            { cart.map((product) => (
              <div key={ product.id }>
                <CardCheckout
                  id={ product.id }
                  product={ product }
                  image={ product.thumbnail }
                  name={ product.title }
                  price={ product.price }
                />
              </div>
            ))}
          </Box>
        </Grid>
        <ModalFormCheckout open={ open } setOpen={ setOpen } />
      </Grid>
      <Box
        sx={ {
          marginTop: '3em',
        } }
      >
        <h3>
          Total:
          {' '}
          { handleCalculateTotalCart(cart) }
        </h3>
      </Box>
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
          to="/carrinho"
        >
          <Button variant="outlined">
            Editar carrinho
          </Button>
        </Link>
        <Button
          variant="outlined"
          onClick={ () => setOpen(true) }
        >
          Finalizar Compra
        </Button>
      </Box>
    </Container>
  );
}

export default Checkout;
