import { useContext } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { StyledEngineProvider } from '@mui/material/styles';
import Context from '../../context/Context';

function AlertAddCart() {
  const { errorEditCart, setErrorEditCart } = useContext(Context);
  return (
    <StyledEngineProvider injectFirst>
      <Snackbar
        open={ errorEditCart }
        autoHideDuration={ 5000 }
        onClose={ () => setErrorEditCart(false) }
      >
        <Alert
          onClose={ () => setErrorEditCart(false) }
          severity="warning"
          variant="filled"
          sx={ { width: '100%' } }
        >
          Quantidade solicitada excede o estoque disponível
        </Alert>
      </Snackbar>
    </StyledEngineProvider>
  );
}

export default AlertAddCart;
