// import styled from "@emotion/styled";
import { styled, Grid, Typography } from '@mui/material';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

const HeaderStyled = styled('header')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.secondary,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem 1rem',
  marginBottom: '1rem',
}));

function Header() {
  return (
    <HeaderStyled id="home">
      <Grid container>
        <Grid item xs={ 6 } md={ 6 }>
          <Typography variant="h3">
            Bazar Store
          </Typography>
        </Grid>
        <Grid
          item
          xs={ 6 }
          md={ 6 }
          sx={
            { display: 'flex', justifyContent: 'end' }
          }
        >
          <ShoppingCart />
        </Grid>
      </Grid>
    </HeaderStyled>
  );
}

export default Header;
