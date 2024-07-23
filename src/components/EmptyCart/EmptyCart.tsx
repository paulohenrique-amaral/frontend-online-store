import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { Grid, Typography, Container, Box } from '@mui/material';
import { jelloVertical } from './EmptyCartStyled';

function EmptyCart() {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        sx={ {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        } }
      >
        <Grid
          item
          sx={ {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '1em',
            padding: '1em',
          } }
        >
          <Typography
            variant="h5"
            sx={ {
              padding: '0 1em',
              textAlign: 'center',
              marginBottom: '1em',
            } }
          >
            Seu Carrinho está vazio
          </Typography>
          <Box
            sx={ {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2em',
              borderRadius: '50%',
              background: 'white',
              '& svg': {
                fontSize: '5em',
                animation: `${jelloVertical} 1s infinite`,
              },
            } }
          >
            <ProductionQuantityLimitsIcon />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default EmptyCart;
