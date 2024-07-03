import { useEffect, useState } from 'react';
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
    <aside>
      <h2>CATEGORIAS</h2>
      <ul>
        {categories?.map((category) => (
          <li key={ category.id }>
            <label data-testid="category" htmlFor={ category.name }>
              <input
                type="radio"
                name="category"
                value={ category.name }
                id={ category.name }
                onClick={ () => searchFromCategories(`${category.id}`) }
              />
              {category.name}
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CategoriesList;
