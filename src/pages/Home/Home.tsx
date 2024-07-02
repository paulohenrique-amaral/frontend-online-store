// import { getCategories, getProductById, getProductsFromCategoryAndQuery } from '../../services/api';

// MLB5672

function Home() {
  return (
    <>
      <h2>Home</h2>
      <button onClick={ () => getProductsFromCategoryAndQuery('MLB5672', null) }>
        fetch
      </button>
    </>
  );
}

export default Home;
