import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Context from '../../context/Context';
import { ProductWithQuantityType, FormDataType } from '../../types/apiTypes';
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

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   if (!formData.name
  //     || formData.cpf === ''
  //     || formData.email === ''
  //     || formData.telefone === ''
  //     || formData.cep === ''
  //     || formData.endereco === '') {
  //     setError('Campos inválidos');
  //     return;
  //   }
  //   if (!selectedPayment) {
  //     setError('Campos inválidos');
  //     return;
  //   }
  //   setError('');
  //   window.location.href = '/';
  //   clearCart();
  // };

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setFormdata({
  //     ...formData,
  //     [name]: value,
  //   });
  //   setError('');
  // };

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
        {/* <Grid item xs={ 12 } md={ 12 }>
          <Typography variant="h5">
            Informações do Comprador
          </Typography>
        </Grid>
        <Grid item>
          <form
            onSubmit={ handleSubmit }
          >
            <label>
              <input
                data-testid="checkout-fullname"
                name="name"
                type="text"
                placeholder="Nome Completo"
                value={ formData.name }
                onChange={ handleChange }
              />
            </label>
            <label>
              <input
                data-testid="checkout-cpf"
                name="cpf"
                type="text"
                placeholder="CPF"
                value={ formData.cpf }
                onChange={ handleChange }
              />
            </label>
            <label>
              <input
                data-testid="checkout-email"
                name="email"
                type="text"
                placeholder="Email"
                value={ formData.email }
                onChange={ handleChange }
              />
            </label>
            <label>
              <input
                data-testid="checkout-phone"
                name="telefone"
                type="text"
                placeholder="Telefone"
                value={ formData.telefone }
                onChange={ handleChange }
              />
            </label>
            <label>
              <input
                data-testid="checkout-cep"
                name="cep"
                type="text"
                placeholder="CEP"
                value={ formData.cep }
                onChange={ handleChange }
              />
            </label>
            <label>
              <input
                data-testid="checkout-address"
                name="endereco"
                type="text"
                placeholder="Endereço"
                value={ formData.endereco }
                onChange={ handleChange }
              />
            </label>
            <div>
              <p>Método de Pagamento</p>
              <label>
                Boleto
                <input
                  data-testid="ticket-payment"
                  name="payment"
                  type="radio"
                  value="boleto"
                  checked={ selectedPayment === 'boleto' }
                  onChange={ () => setSelectedPayment('boleto') }
                />
              </label>
              <label>
                Visa
                <input
                  data-testid="visa-payment"
                  name="payment"
                  type="radio"
                  value="visa"
                  checked={ selectedPayment === 'visa' }
                  onChange={ () => setSelectedPayment('visa') }
                />
              </label>
              <label>
                MasterCard
                <input
                  data-testid="master-payment"
                  name="payment"
                  type="radio"
                  value="mastercard"
                  checked={ selectedPayment === 'mastercard' }
                  onChange={ () => setSelectedPayment('mastercard') }
                />
              </label>
              <label>
                Elo
                <input
                  data-testid="elo-payment"
                  name="payment"
                  type="radio"
                  value="elo"
                  checked={ selectedPayment === 'elo' }
                  onChange={ () => setSelectedPayment('elo') }
                />
              </label>
            </div>
            <button
              type="submit"
            >
              Comprar
            </button>
          </form>
          {error && <p>{ error }</p>}
        </Grid> */}
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
