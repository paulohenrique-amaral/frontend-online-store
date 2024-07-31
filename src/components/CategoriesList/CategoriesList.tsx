import { useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import Context from '../../context/Context';
import Loading from '../Loading/Loading';

function CategoriesList() {
  const {
    categories,
    loading,
    fetchCategories,
    searchFromCategories,
    toggleDrawer,
    setPage,
  } = useContext(Context);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) return <Loading />;

  return (
    <Box
      sx={ { width: '100%', maxWidth: 360, bgcolor: 'background.paper' } }
    >
      <Box sx={ { padding: '0.9rem' } }>
        <Typography variant="h6">
          CATEGORIAS
        </Typography>
      </Box>
      <aside aria-label="categories-products">
        <List>
          {categories?.map((category) => (
            <div key={ category.id }>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={ async () => {
                    if (location.pathname !== '/') {
                      navigate('/');
                    }
                    await searchFromCategories(`${category.id}`);
                    toggleDrawer(false);
                    setPage(1);
                  } }
                >
                  <ListItemText primary={ category.name } />
                </ListItemButton>
              </ListItem>
            </div>
          ))}
        </List>
      </aside>
    </Box>
  );
}

export default CategoriesList;
