import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import { Typography, Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Context from '../../context/Context';
import CartDrawerCard from '../CartDrawerCard/CartDrawerCard';
import theme from '../../themes/ligth';
import { handleCalculateTotalCart } from '../../help/helper';

function CartDrawer() {
  const { cartDrawer, toggleCartDrawer, cart } = useContext(Context);
  const navigate = useNavigate();

  return (
    <StyledEngineProvider injectFirst>
      <div>
        <Drawer
          anchor="right"
          open={ cartDrawer }
          onClose={ () => toggleCartDrawer(false) }
        >
          <Box
            sx={ {
              display: 'flex',
              alignItems: 'center',
            } }
          >
            <Box>
              <IconButton onClick={ () => toggleCartDrawer(false) }>
                <NavigateNextIcon sx={ { fontSize: '2rem' } } />
              </IconButton>
            </Box>
            <Typography
              variant="h5"
              sx={ {
                padding: '.5em',
                textAlign: 'center',
              } }
            >
              Carrinho de Compras
            </Typography>
          </Box>
          <Box
            sx={ {
              marginBottom: '8rem',
            } }
          >
            <CartDrawerCard />
          </Box>
          <Box
            sx={ {
              background: theme.palette.primary.light,
              position: 'fixed',
              bottom: 0,
              width: '100%',
              zIndex: 1000,
            } }
          >
            <Paper
              elevation={ 2 }
              sx={ {
                width: 320,
                margin: '1rem .5rem .2rem .5rem',
              } }
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={ {
                    padding: '.5em',
                  } }
                >
                  Total:
                  {' '}
                  { handleCalculateTotalCart(cart) }
                </Typography>
              </Box>
            </Paper>
            <Box
              sx={ {
                width: 320,
                margin: '1rem .5rem .2rem .5rem',
              } }
            >
              <Button
                variant="contained"
                size="medium"
                color="info"
                endIcon={ <ArrowForwardIosIcon /> }
                onClick={ () => {
                  toggleCartDrawer(false);
                  navigate('/checkout');
                } }
              >
                Checkout
              </Button>
            </Box>
          </Box>
        </Drawer>
      </div>
    </StyledEngineProvider>
  );
}

export default CartDrawer;
