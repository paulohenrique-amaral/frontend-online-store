import { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListIcon from '@mui/icons-material/List';
import Context from '../../context/Context';
import CategoriesListDrawer from '../CategoriesListDrawer/CategoriesListDrawer';
import { scrollToSection } from '../../help/helper';
import { ContainerStyled, BottomBar, Icon } from './NavigateMobileStyled';

function NavigateMobile() {
  const [activeIcon, setActiveIcon] = useState('');
  const { open, toggleDrawer } = useContext(Context);

  const navigate = useNavigate();
  const location = useLocation();

  const change = (iconName: any) => {
    setActiveIcon(iconName);
  };

  const handleNavigationHome = () => {
    if (location.pathname === '/') {
      scrollToSection('home');
      setTimeout(() => setActiveIcon(''), 2000);
    } else {
      navigate('/');
      setTimeout(() => setActiveIcon(''), 2000);
    }
  };

  useEffect(() => {
    if (open === false) {
      setActiveIcon('');
    }
  }, [open]);

  return (
    <ContainerStyled>
      <BottomBar>
        <Grid container>
          <Grid
            item
            xs={ 3 }
            md={ 3 }
            sx={ { display: 'flex', justifyContent: 'center' } }
          >
            <Icon
              name="home-outline"
              className={ `icon ${activeIcon === 'home-outline' ? 'active' : ''}` }
              onClick={ () => {
                change('home-outline');
                handleNavigationHome();
              } }
            >
              <HomeRoundedIcon />
              <Typography variant="caption">Home</Typography>
            </Icon>
          </Grid>
          <Grid
            item
            xs={ 3 }
            md={ 3 }
            sx={ { display: 'flex', justifyContent: 'center' } }
          >
            <Icon
              name="search-outline"
              className={ `icon ${activeIcon === 'search-outline' ? 'active' : ''}` }
              onClick={ () => {
                change('search-outline');
                handleNavigationHome();
              } }
            >
              <SavedSearchIcon />
              <Typography variant="caption">Busca</Typography>
            </Icon>
          </Grid>
          <Grid
            item
            xs={ 3 }
            md={ 3 }
            sx={ { display: 'flex', justifyContent: 'center' } }
          >
            <Icon
              name="dashboard"
              className={ `icon ${activeIcon === 'dashboard' ? 'active' : ''}` }
              onClick={ () => {
                change('dashboard');
                navigate('/carrinho');
                setTimeout(() => setActiveIcon(''), 2000);
              } }
            >
              <DashboardIcon />
              <Typography variant="caption">DashBoard</Typography>
            </Icon>
          </Grid>
          <Grid
            item
            xs={ 3 }
            md={ 3 }
            sx={ { display: 'flex', justifyContent: 'center' } }
          >
            <Icon
              name="Itens-outline"
              className={ `icon ${activeIcon === 'Itens-outline' ? 'active' : ''}` }
              onClick={ () => {
                change('Itens-outline');
                toggleDrawer(true);
              } }
            >
              <ListIcon />
              <Typography variant="caption">Seção</Typography>
            </Icon>
          </Grid>
        </Grid>
      </BottomBar>
      <CategoriesListDrawer />
    </ContainerStyled>
  );
}

export default NavigateMobile;
