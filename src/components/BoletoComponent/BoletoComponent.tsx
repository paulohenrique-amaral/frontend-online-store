import { useContext } from 'react';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import { Typography, Button } from '@mui/material';
import Context from '../../context/Context';
import { BoxStyled } from './BoletoComponentStyled';

function BoletoComponent() {
  const { setEtapaAtual } = useContext(Context);
  return (
    <BoxStyled>
      <Typography variant="body1">
        Seu boleto acaba de ser enviado por email
      </Typography>
      <ViewWeekIcon sx={ { fontSize: 150 } } />
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
