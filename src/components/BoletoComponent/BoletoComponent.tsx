import { useContext } from 'react';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import { styled, Box, keyframes, Typography, Button } from '@mui/material';
import Context from '../../context/Context';

const animation = keyframes`
  0% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
`;

const BoxStyled = styled('header')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '100px',
  '& svg': {
    color: theme.palette.primary.main,
    animation: `${animation} 1s`,
  },
}));

function BoletoComponent() {
  const { personData, setPersonData, setEtapaAtual } = useContext(Context);
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
