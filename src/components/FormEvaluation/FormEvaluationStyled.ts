import { styled } from '@mui/material';
import theme from '../../themes/ligth';

export const FormStyled = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const CssTextField = {
  margin: '20px 5px',
  '& .MuiInputLabel-root': {
    color: '#1d1d1e',
  },
  '& label.Mui-focused': {
    color: theme.palette.primary.main,
  },
};
