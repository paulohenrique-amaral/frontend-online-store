import { Controller } from 'react-hook-form';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import useFormCreditCard from '../../hook/useFormCreditCard';

function FormCreditCard() {
  const { control, handleSubmit, errors, onSubmit } = useFormCreditCard();

  return (
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        <form onSubmit={ handleSubmit(onSubmit) }>
          <Card
            variant="outlined"
            sx={ {
              maxHeight: 'max-content',
              maxWidth: '100%',
              mx: 'auto',
              overflow: 'auto',
              resize: 'horizontal',
            } }
          >
            <Typography level="title-lg" startDecorator={ <InfoOutlined /> }>
              Adicione seu cartão de crédito
            </Typography>
            <Divider inset="none" />
            <CardContent
              sx={ {
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                gap: 1.5,
              } }
            >
              <FormControl sx={ { gridColumn: '1/-1' } }>
                <FormLabel>Número do cartão</FormLabel>
                <Controller
                  name="cardNumber"
                  control={ control }
                  render={ ({ field }) => (
                    <Input
                      { ...field }
                      endDecorator={ <CreditCardIcon /> }
                      error={ !!errors.cardNumber }
                    />
                  ) }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Validade</FormLabel>
                <Controller
                  name="expiryDate"
                  control={ control }
                  render={ ({ field }) => (
                    <Input
                      { ...field }
                      endDecorator={ <CreditCardIcon /> }
                      error={ !!errors.expiryDate }
                    />
                  ) }
                />
              </FormControl>
              <FormControl>
                <FormLabel>CVV</FormLabel>
                <Controller
                  name="cvc"
                  control={ control }
                  render={ ({ field }) => (
                    <Input
                      { ...field }
                      endDecorator={ <InfoOutlined /> }
                      error={ !!errors.cvc }
                    />
                  ) }
                />
              </FormControl>
              <FormControl sx={ { gridColumn: '1/-1' } }>
                <FormLabel>Nome</FormLabel>
                <Controller
                  name="cardHolderName"
                  control={ control }
                  render={ ({ field }) => (
                    <Input
                      { ...field }
                      placeholder="Insira o nome do titular do cartão"
                      error={ !!errors.cardHolderName }
                    />
                  ) }
                />
              </FormControl>
              <CardActions sx={ { gridColumn: '1/-1' } }>
                <Button type="submit" variant="solid" color="primary">
                  Confirme seu Pagamento
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </form>
      </CssVarsProvider>
    </StyledEngineProvider>
  );
}

export default FormCreditCard;
