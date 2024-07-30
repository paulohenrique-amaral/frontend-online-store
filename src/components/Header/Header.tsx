import { Grid, Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Divider from '@mui/material/Divider';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { HeaderStyled } from './HeaderStyled';

function Header() {
  const navigate = useNavigate();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <HeaderStyled id="home">
      <Grid container>
        <Grid item xs={ 6 } md={ 6 }>
          <Typography
            component={ RouterLink }
            to="/"
            sx={ {
              fontSize: '2.3rem',
              textDecoration: 'none',
              color: 'inherit',
              margin: 0,
              padding: 0,
              display: 'inline-block',
            } }
          >
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
          <Box
            sx={ {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '1rem',
              gap: '1rem',
            } }
          >
            {!matchesXS && (
              <>
                <IconButton
                  aria-label="dashboard"
                  size="small"
                  color="inherit"
                  onClick={ () => navigate('/carrinho') }
                >
                  <Box
                    sx={ {
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    } }
                  >
                    <DashboardIcon fontSize="medium" />
                    <Typography variant="caption">
                      Dashboard
                    </Typography>
                  </Box>
                </IconButton>
                <IconButton
                  aria-label="home"
                  size="small"
                  color="inherit"
                  onClick={ () => navigate('/') }
                >
                  <Box
                    sx={ {
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    } }
                  >
                    <HomeIcon fontSize="medium" />
                    <Typography variant="caption">
                      Home
                    </Typography>
                  </Box>
                </IconButton>
              </>
            )}
            {/* <IconButton
                aria-label="home"
                size="small"
                color="inherit"
                onClick={ () => navigate('/login') }
              >
                <Box
                  sx={ {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  } }
                >
                  <AccountBoxIcon fontSize="medium" />
                  <Typography variant="caption">
                    Login
                  </Typography>
                </Box>
              </IconButton> */}
          </Box>
          <Divider
            orientation="vertical"
            sx={ {
              backgroundColor: 'white',
            } }
          />
          <Box
            sx={ {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            } }
          >
            <ShoppingCart />
          </Box>
        </Grid>
      </Grid>
    </HeaderStyled>
  );
}

export default Header;
