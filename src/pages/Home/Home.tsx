import { useState, useContext, useEffect } from 'react';
import { Grid, Container, useTheme, useMediaQuery } from '@mui/material';
import Divider from '@mui/material/Divider';
import Context from '../../context/Context';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import SearchInput from '../../components/SearchInput/SearchInput';
import CardProduct from '../../components/CardProduct/CardProduct';
import AlertSnackBar from '../../components/AlertSnackBar/AlertSnackBar';
import PaginationButton from '../../components/PaginationButton/PaginationButton';
import { Root } from './HomeStyled';
import Offers from '../../components/Offers/Offers';

function Home() {
  const [inputSearch, setInputSearch] = useState<string>('');
  const [msgResult, setMsgResult] = useState('');
  const [openSnackBar, setOpenSnackBar] = useState(false);
  // const [page, setPage] = useState(1);
  const { searchApi, searchFromInput, setSearchApi, page, setPage } = useContext(Context);
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('sm'));

  const msg = 'Digite algum termo de pesquisa ou escolha uma categoria.';
  const msgNoResults = 'Nenhum produto foi encontrado';
  const ITEMS_PER_PAGE = 8;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputSearch(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputSearch === '') {
      setMsgResult(msg);
      setOpenSnackBar(true);
      return;
    }
    await searchFromInput(inputSearch);
    if (searchApi.length === 0) {
      setMsgResult(msgNoResults);
      setOpenSnackBar(true);
    }
    setInputSearch('');
    setPage(1);
  };

  useEffect(() => {
    setSearchApi([]);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const selectedProducts = searchApi.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
            <AlertSnackBar
              open={ openSnackBar }
              setOpen={ setOpenSnackBar }
              message={ msgResult }
            />
          </form>
        </Grid>
        <Root>
          <Divider />
        </Root>
        { !matchesXS && (
          <Grid item sm={ 4 } md={ 3 }>
            <CategoriesList />
          </Grid>
        )}
        <Grid item xs={ 12 } sm={ 8 } md={ 9 }>
          {selectedProducts.length > 0 ? (
            selectedProducts.map((product: any) => (
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
          ) : (
            <Offers />
          )}
        </Grid>
        <Grid
          item
          xs={ 12 }
          md={ 12 }
          sx={ {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '2rem',
            [theme.breakpoints.down('sm')]: {
              marginBottom: '120px',
            },
          } }
        >
          {searchApi.length > 0 && (
            <PaginationButton
              count={ Math.ceil(searchApi.length / ITEMS_PER_PAGE) }
              page={ page }
              onChange={ handleChangePage }
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
