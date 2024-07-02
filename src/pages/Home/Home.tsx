import { useState } from 'react';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import { ProductType } from '../../types/apiTypes';
// import { getCategories, getProductById, getProductsFromCategoryAndQuery } from '../../services/api';

// MLB5672

function Home() {
  const [inputSearch, setInputSearch] = useState<string>('');
  const [noResultsApi, setNoResultsApi] = useState('');
  const [searchApi, setSearchApi] = useState<ProductType[]>([]);

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

  console.log(searchApi);

  return (
    <div className="container">
      <h2>Home</h2>
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
      {/* <button onClick={ () => getProductsFromCategoryAndQuery('MLB5672', null) }>
        fetch
      </button> */}
    </div>
  );
}

export default Home;
