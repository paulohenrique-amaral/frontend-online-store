import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, useTheme, useMediaQuery } from '@mui/material';
import Context from '../../context/Context';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import SearchInput from '../../components/SearchInput/SearchInput';
import CardProduct from '../../components/CardProduct/CardProduct';

function Home() {
  const [inputSearch, setInputSearch] = useState<string>('');
  const [noResultsApi, setNoResultsApi] = useState('');

  const { handleAddToCart, searchApi, searchFromInput } = useContext(Context);

  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('sm'));

  const msg = 'Digite algum termo de pesquisa ou escolha uma categoria.';
  const msgNoResults = 'Nenhum produto foi encontrado';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputSearch(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await searchFromInput(inputSearch);
    if (searchApi.length === 0) {
      setNoResultsApi(msgNoResults);
    }
    setInputSearch('');
  };

  return (
    <Container maxWidth="lg" className="container">
      <Grid container spacing={ 2 }>
        <Grid
          item
          xs={ 12 }
          md={ 12 }
          sx={ { display: 'flex', justifyContent: 'center' } }
        >
          <form
            onSubmit={ handleSubmit }
          >
            <SearchInput
              onChange={ handleChange }
              value={ inputSearch }
              name="search"
              type="text"
            />
            {inputSearch === '' && <p>{ msg }</p>}
            {noResultsApi !== '' && (
              <p>{noResultsApi}</p>
            )}
          </form>
        </Grid>
        { !matchesXS && (
          <Grid item sm={ 4 } md={ 3 }>
            <CategoriesList />
          </Grid>
        )}
        <Grid item xs={ 12 } sm={ 8 } md={ 9 }>
          {searchApi.length > 0 && (
            searchApi.map((product: any) => (
              <div key={ product.id }>
                <CardProduct
                  id={ product.id }
                  product={ product }
                  image={ product.thumbnail }
                  name={ product.title }
                  price={ product.price }
                  freight={ product.shipping.free_shipping }
                />
              </div>
            ))
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
