import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import { getCategories, getProductsFromCategoryAndQuery } from '../../services/api';
import { CategoryType } from '../../types/apiTypes';
import Loading from '../Loading/Loading';

type CategoriesListProps = {
  setSearchApi: (value: any) => void;
};

function CategoriesList({ setSearchApi }: CategoriesListProps) {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const searchFromCategories = async (id: string) => {
    const dataFetchCategory = await getProductsFromCategoryAndQuery(id, null);
    setSearchApi(dataFetchCategory);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const resultCategories = await getCategories();
      setCategories(resultCategories);
      setLoading(false);
    };
    fetchCategories();
  }, []);

  if (loading) return <Loading />;

  return (
    <Box sx={ { width: '100%', maxWidth: 360, bgcolor: 'background.paper' } }>
      <Box sx={ { padding: '0.9rem' } }>
        <Typography variant="h6">
          CATEGORIAS
        </Typography>
      </Box>
      <aside aria-label="main mailbox folders">
        <List>
          {categories?.map((category) => (
            <div key={ category.id }>
              <ListItem disablePadding>
                <ListItemButton onClick={ () => searchFromCategories(`${category.id}`) }>
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
