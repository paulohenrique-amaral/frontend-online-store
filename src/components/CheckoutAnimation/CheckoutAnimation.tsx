import PriceChangeIcon from '@mui/icons-material/PriceChange';
import { Box, styled, keyframes } from '@mui/material';

const animation = keyframes`
  0%,
  100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
  }
  10% {
    -webkit-transform: rotate(2deg);
            transform: rotate(2deg);
  }
  20%,
  40%,
  60% {
    -webkit-transform: rotate(-4deg);
            transform: rotate(-4deg);
  }
  30%,
  50%,
  70% {
    -webkit-transform: rotate(4deg);
            transform: rotate(4deg);
  }
  80% {
    -webkit-transform: rotate(-2deg);
            transform: rotate(-2deg);
  }
  90% {
    -webkit-transform: rotate(2deg);
            transform: rotate(2deg);
  }
`;

const BoxStyled = styled('header')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '100px',
  '& svg': {
    color: theme.palette.primary.main,
    animation: `${animation} 2s infinite`,
  },
}));

function CheckoutAnimation() {
  return (
    <BoxStyled>
      <PriceChangeIcon sx={ { fontSize: 150 } } />
    </BoxStyled>
  );
}

export default CheckoutAnimation;
