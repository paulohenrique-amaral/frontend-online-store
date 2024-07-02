import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../context/Context';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import { ProductType } from '../../types/apiTypes';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';

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
    <div className="container">
      <h2>Home</h2>
      <div>
        <ShoppingCart />
      </div>
      <form
        onSubmit={ handleSubmit }
      >
        <input
          type="text"
          onChange={ handleChange }
          value={ inputSearch }
          name="search"
          placeholder="Digite sua busca"
        />
        <button>Pesquisar</button>

        {inputSearch === '' && <p>{ msg }</p>}
        {noResultsApi !== '' && (
          <p>{noResultsApi}</p>
        )}
      </form>
      <CategoriesList />
      <div>
        {searchApi.length > 0 && (
          searchApi.map((product: any) => (
            <div data-testid="product" key={ product.id }>
              <Link
                to={ `/produto/${product.id}` }
                data-testid="product-detail-link"
              >
                <img src={ product.thumbnail } alt="Produto" />
                <p>{product.title}</p>
                <p>{`R$ ${product.price},00`}</p>
              </Link>
              <button
                type="button"
                data-testid="product-add-to-cart"
                onClick={ () => handleAddToCart(product) }
              >
                Adicionar ao carrinho
              </button>
              {product.shipping.free_shipping
              && <span data-testid="free-shipping">Frete Grátis</span>}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
