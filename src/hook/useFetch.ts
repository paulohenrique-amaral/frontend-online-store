import { useState } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import { CategoryType, ProductType } from '../types/apiTypes';

function useFetch() {
  const [searchApi, setSearchApi] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCategories = async () => {
    setLoading(true);
    const resultCategories = await getCategories();
    setCategories(resultCategories);
    setLoading(false);
  };

  const searchFromCategories = async (id: string) => {
    const dataFetchCategory = await getProductsFromCategoryAndQuery(id, null);
    setSearchApi(dataFetchCategory);
  };

  const searchFromInput = async (inputSearch: string) => {
    const fetchInputSearch = await getProductsFromCategoryAndQuery(null, inputSearch);
    setSearchApi(fetchInputSearch);
  };

  return {
    searchApi,
    setSearchApi,
    categories,
    loading,
    fetchCategories,
    searchFromCategories,
    searchFromInput,
  };
}

export default useFetch;
