import { styled } from '@mui/material';

export const FooterStyled = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  marginTop: '2rem',
  padding: '.5rem',
}));
