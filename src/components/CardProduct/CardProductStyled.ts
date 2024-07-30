import { styled, Paper, keyframes, Grid } from '@mui/material';

export const rotate = keyframes`
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
`;

const scaleOutVertical = keyframes`
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    opacity: 1;
  }
`;

export const ContainerStyled = styled(Grid)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

type ItemProps = {
  remove: boolean;
};

export const Item = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'remove',
})<ItemProps>(({ theme, remove }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: theme.palette.text.primary,
  width: '90%',
  lineHeight: '60px',
  margin: '0.5rem',
  padding: '0.5rem',
  transition: '0.5s',
  animation: remove ? `${scaleOutVertical} 0.2s linear forwards` : 'none',
  '&:hover': {
    boxShadow: '0 0 10px 0 #000',
  },
}));
