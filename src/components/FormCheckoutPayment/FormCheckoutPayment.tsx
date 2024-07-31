import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box, Typography } from '@mui/material';
import CheckoutAnimation from '../CheckoutAnimation/CheckoutAnimation';
import FormCreditCard from '../FormCreditCard/FormCreditCard';
import BoletoComponent from '../BoletoComponent/BoletoComponent';
import theme from '../../themes/ligth';

function FormCheckoutPayment() {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel
        id="payment-buttons"
        sx={ {
          color: theme.palette.text.primary,
          width: '100%',
          marginBottom: '20px',
        } }
      >
        Formas de pagamento
      </FormLabel>
      <Typography>
        Escolha sua forma de pagamento
      </Typography>
      <RadioGroup
        row
        aria-labelledby="payment-buttons"
        name="radio-payment-buttons"
        onChange={ handleChange }
        sx={ { gap: '30px', margin: '20px 0px' } }
      >
        <FormControlLabel
          value="ticket"
          control={ <Radio
            sx={ {
              color: theme.palette.text.primary,
            } }
          /> }
          label="Boleto"
        />
        <FormControlLabel
          value="creditCard"
          control={ <Radio
            sx={ {
              color: theme.palette.text.primary,
            } }
          /> }
          label="Cartão de Crédito"
        />
      </RadioGroup>
      <Box sx={ { width: '100%', display: 'flex' } }>
        {paymentMethod === '' && <CheckoutAnimation />}
        {paymentMethod === 'creditCard' && <FormCreditCard />}
        {paymentMethod === 'ticket' && <BoletoComponent />}
      </Box>
    </FormControl>
  );
}

export default FormCheckoutPayment;
