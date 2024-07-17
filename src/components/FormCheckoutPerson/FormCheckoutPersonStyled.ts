import { styled } from '@mui/material';
import theme from '../../themes/ligth';

export const style = {
  position: 'absolute' as const,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  // alignItems: 'center',
  overflow: 'auto',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const FormStyled = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const CssTextField = {
  margin: '20px 5px',
  '& .MuiInputLabel-root': {
    color: '#6F7E8C',
  },
  '& label.Mui-focused': {
    color: theme.palette.primary.main,
  },
};
