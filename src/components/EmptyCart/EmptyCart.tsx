import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { styled, Grid, Typography, Container, Box, keyframes } from '@mui/material';

const jelloVertical = keyframes`
  0% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
  }
  40% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
  }
  50% {
    -webkit-transform: scale3d(0.85, 1.15, 1);
            transform: scale3d(0.85, 1.15, 1);
  }
  65% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
  }
  75% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
`;

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
