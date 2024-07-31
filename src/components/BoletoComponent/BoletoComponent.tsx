import { useContext } from 'react';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import { Typography, Button, Box } from '@mui/material';
import Context from '../../context/Context';
import { BoxStyled } from './BoletoComponentStyled';

function BoletoComponent() {
  const { setEtapaAtual } = useContext(Context);
  return (
    <BoxStyled>
      <Box
        sx={ {
          display: 'flex',
          width: '200px',
          alignItems: 'center',
          justifyContent: 'center',
        } }
      >
        <Typography variant="body1" textAlign="center">
          Seu boleto acaba de ser enviado por email
        </Typography>
      </Box>
      <ViewWeekIcon sx={ { fontSize: 100 } } />
      <Button
        onClick={ () => setEtapaAtual(4) }
        variant="contained"
        color="primary"
      >
        OK
      </Button>
    </BoxStyled>
  );
}

export default BoletoComponent;
