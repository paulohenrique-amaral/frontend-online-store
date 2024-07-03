import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { styled, Grid, Typography, Container } from '@mui/material';
import Context from '../../context/Context';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import { ProductType } from '../../types/apiTypes';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import SearchInput from '../../components/SearchInput/SearchInput';

function Home() {
  const [inputSearch, setInputSearch] = useState<string>('');
  const [noResultsApi, setNoResultsApi] = useState('');
  const [searchApi, setSearchApi] = useState<ProductType[]>([]);

  const { handleAddToCart } = useContext(Context);

  const msg = 'Digite algum termo de pesquisa ou escolha uma categoria.';
  const msgNoResults = 'Nenhum produto foi encontrado';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputSearch(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fetchInputSearch = await getProductsFromCategoryAndQuery(null, inputSearch);
    if (fetchInputSearch.length === 0) {
      setNoResultsApi(msgNoResults);
    } else {
      setSearchApi(fetchInputSearch);
    }
    setInputSearch('');
  };

  // console.log(searchApi);

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
        <Grid item xs={ 4 } md={ 4 }>
          <CategoriesList setSearchApi={ setSearchApi } />
        </Grid>
        <Grid item xs={ 8 } md={ 8 }>
          {searchApi.length > 0 && (
            searchApi.map((product: any) => (
              <div key={ product.id }>
                <Link
                  to={ `/produto/${product.id}` }
                >
                  <img src={ product.thumbnail } alt="Produto" />
                  <p>{product.title}</p>
                  <p>{`R$ ${product.price},00`}</p>
                </Link>
                <button
                  type="button"
                  onClick={ () => handleAddToCart(product) }
                >
                  Adicionar ao carrinho
                </button>
                {product.shipping.free_shipping
                && <span>Frete Grátis</span>}
              </div>
            ))
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
