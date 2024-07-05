import { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled, Grid, Typography } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Search from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import Context from '../../context/Context';
import CategoriesListDrawer from '../CategoriesListDrawer/CategoriesListDrawer';
import { scrollToSection } from '../../help/helper';

const ContainerStyled = styled('header')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.secondary,
  width: '100%',
  // height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 0,
  position: 'fixed',
  bottom: 0,
  zIndex: 1000,
}));

const BottomBar = styled('div')(({ theme }) => ({
  backgroundColor: '#eee',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center',
  marginTop: '.7em',
  width: '90%',
  borderRadius: '20px 20px 0 0',
}));

const Icon = styled('button')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1em',
  padding: '.3em',
  margin: '.3em',
  marginTop: 0,
  transition: '.2s ease-in-out',
  borderRadius: '100%',
  border: '7px solid #eee',
  background: 'linear-gradient(135deg, #eee, #ddd)',
  '&.active': {
    transform: 'scale(1) translateY(-1em)',
    background: 'linear-gradient(135deg, #23f,#6589ff)',
    border: '3px solid #dcdcdc',
    color: 'white',
  },
}));

function NavigateMobile() {
  const [activeIcon, setActiveIcon] = useState('');
  const { open, toggleDrawer } = useContext(Context);

  const navigate = useNavigate();
  const location = useLocation();

  const change = (iconName: any) => {
    setActiveIcon(iconName);
  };

  const handleNavigationSearch = () => {
    if (location.pathname === '/') {
      window.location.reload();
    } else {
      navigate('/');
    }
  };

  const handleNavigationHome = () => {
    if (location.pathname === '/') {
      scrollToSection('home');
      setTimeout(() => setActiveIcon(''), 2000);
    } else {
      navigate('/');
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
            xs={ 4 }
            md={ 4 }
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
            xs={ 4 }
            md={ 4 }
            sx={ { display: 'flex', justifyContent: 'center' } }
          >
            <Icon
              name="search-outline"
              className={ `icon ${activeIcon === 'search-outline' ? 'active' : ''}` }
              onClick={ () => {
                change('search-outline');
                handleNavigationSearch();
              } }
            >
              <Search />
              <Typography variant="caption">Busca</Typography>
            </Icon>
          </Grid>
          <Grid
            item
            xs={ 4 }
            md={ 4 }
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
