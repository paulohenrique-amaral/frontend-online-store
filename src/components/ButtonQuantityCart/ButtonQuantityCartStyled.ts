import { Box, styled } from '@mui/material';

export const BoxStyled = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '0.5rem',
  position: 'absolute',
  top: 0,
  right: 0,
  margin: '0.7rem',
  '& button': {
    minWidth: '0px',
  },
}));
