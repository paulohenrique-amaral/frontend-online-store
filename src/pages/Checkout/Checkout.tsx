import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Context from '../../context/Context';
import { ProductWithQuantityType } from '../../types/apiTypes';
import CardCheckout from '../../components/CardCheckout/CardCheckout';
import ModalFormCheckout from '../../components/ModalFormCheckout/ModalFormCheckout';

type CartProps = {
  cart: ProductWithQuantityType[],
  clearCart: () => void,
};

const initialFormData = {
  name: '',
  cpf: '',
  email: '',
  telefone: '',
  cep: '',
  endereco: '',
};

function Checkout() {
  const [formData, setFormdata] = useState<FormDataType>(initialFormData);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');

  const { cart, clearCart } = useContext(Context);

  return (
    <Container maxWidth="lg">
      <h2>Resumo Checkout</h2>
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
        {/* <Link
          to="/checkout"
        > */}
        <Button
          variant="outlined"
          onClick={ () => setOpen(true) }
        >
          Finalizar Compra
        </Button>
        {/* </Link> */}
      </Box>
    </Container>
  );
}

export default Checkout;
