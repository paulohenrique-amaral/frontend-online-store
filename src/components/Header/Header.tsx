import { Grid, Typography } from '@mui/material';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { HeaderStyled } from './HeaderStyled';

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
