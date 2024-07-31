import { useEffect, useState } from 'react';
import { Grid, Box, Container, Typography } from '@mui/material';
import OffersGrid from '../OffersGrid/OffersGrid';
import { CategoryType } from '../../types/apiTypes';
import { getCategories } from '../../services/api';
import Loading from '../Loading/Loading';

function Offers() {
  const [randomCategories, setRandomCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const fetchAndSetCategories = async () => {
      const categories = await getCategories();
      const shuffledCategories = categories.sort(() => Math.random() - 0.5);
      const selectedCategories = shuffledCategories.slice(0, 4);
      setRandomCategories(selectedCategories);
    };
    fetchAndSetCategories();
    setLoading(false);
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid
          item
          xs={ 12 }
          md={ 12 }
          sx={ {
            padding: '1rem',
            backgroundColor: 'background.paper',
          } }
        >
          <Typography
            variant="h4"
            align="center"
            textTransform="uppercase"
          >
            Ofertas do dia
          </Typography>
        </Grid>
        {randomCategories.length > 0 ? (
          randomCategories.map((category, index) => (
            <Grid
              key={ index }
              item
              xs={ 12 }
              md={ 12 }
              sx={ {
                display: 'flex',
                flexDirection: 'column',
                padding: '3rem 1rem',
                backgroundColor: 'background.paper',
              } }
            >
              <Box
                sx={ {
                  marginBottom: '1rem',
                  height: '370px',
                } }
              >
                <Typography
                  variant="body1"
                  align="left"
                  textTransform="uppercase"
                  style={ { fontWeight: 'bold', marginBottom: '1rem' } }
                >
                  {`Ofertas e Novidades - ${category.name}`}
                </Typography>
                <OffersGrid category={ category } />
              </Box>
            </Grid>
          ))
        ) : (
          <Box
            sx={ {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              width: '100vh',
            } }
          >
            <Loading />
          </Box>
        )}
      </Grid>
    </Container>
  );
}

export default Offers;
