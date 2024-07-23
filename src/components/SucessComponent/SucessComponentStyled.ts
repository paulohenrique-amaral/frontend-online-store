import { styled, keyframes } from '@mui/material';

const animation = keyframes`
  0% {
    transform: scale3d(1, 1, 1);
    color: #1976d2; /* Cor inicial azul do tema primary */
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
    transform: translateY(-40px); 
  }
  60% {
    /* transform: translateY(0); */
    /* transform: translateY(-40px);  */
  }
  65% {
    /* transform: translateY(-20px);  */
  }
  70% {
    /* transform: translateY(0); */
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
    color: #4caf50;
  }
`;

export const BoxStyled = styled('header')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '50px',
  '& svg': {
    color: theme.palette.primary.main,
    animation: `${animation} 2s forwards`,
  },
}));
