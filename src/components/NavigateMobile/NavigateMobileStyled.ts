import { styled } from '@mui/material';

export const ContainerStyled = styled('header')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.secondary,
  width: '100%',
  // height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 0,
  position: 'fixed',
  bottom: 0,
  zIndex: 1000,
}));

export const BottomBar = styled('div')(() => ({
  backgroundColor: '#eee',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center',
  marginTop: '.7em',
  width: '90%',
  borderRadius: '20px 20px 0 0',
}));

export const Icon = styled('button')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1em',
  padding: '.3em',
  margin: '.3em',
  marginTop: 0,
  transition: '.2s ease-in-out',
  borderRadius: '100%',
  border: '7px solid #eee',
  background: 'linear-gradient(135deg, #eee, #ddd)',
  '&.active': {
    transform: 'scale(1) translateY(-1em)',
    background: 'linear-gradient(135deg, #23f,#6589ff)',
    border: '3px solid #dcdcdc',
    color: 'white',
  },
}));
