import * as React from 'react';
import { useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { Grid, Container, Box, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ModalFormChild from '../ModalFormChild/ModalFormChild';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

type ModalFormCheckoutProps = {
  open: boolean,
  setOpen: (open: boolean) => void,
};

const initialFormData = {
  name: '',
  cpf: '',
  email: '',
  telefone: '',
  cep: '',
  endereco: '',
};

function ModalFormCheckout({ open, setOpen }: ModalFormCheckoutProps) {
  const [formData, setFormdata] = useState<FormDataType>(initialFormData);
  const [error, setError] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  // const [open, setOpen] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name
      || formData.cpf === ''
      || formData.email === ''
      || formData.telefone === ''
      || formData.cep === ''
      || formData.endereco === '') {
      setError('Campos inválidos');
      return;
    }
    if (!selectedPayment) {
      setError('Campos inválidos');
      return;
    }
    setError('');
    window.location.href = '/';
    // clearCart();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormdata({
      ...formData,
      [name]: value,
    });
    setError('');
  };

  // const handleOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledEngineProvider injectFirst>
      <div>
        {/* <Button onClick={ handleOpen }>Open modal</Button> */}
        <Modal
          open={ open }
          onClose={ handleClose }
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={ { ...style, width: 400 } }>
            <Grid item xs={ 12 } md={ 12 }>
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
              {/* {error && <p>{ error }</p>} */}
            </Grid>
            <ModalFormChild />
          </Box>
        </Modal>
      </div>
    </StyledEngineProvider>
  );
}

export default ModalFormCheckout;
