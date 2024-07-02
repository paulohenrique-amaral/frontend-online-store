const createSearchUrl = (categoryId: string | null, query: string | null): string => {
  const url = new URL('https://api.mercadolibre.com/sites/MLB/search');
  if (categoryId) {
    url.searchParams.append('category', categoryId);
  }
  if (query) {
    url.searchParams.append('q', query);
  }
  return url.toString();
};

export async function getCategories(): Promise<CategoryType[]> {
  try {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    throw error;
  }
}

export async function getProductsFromCategoryAndQuery(
  categoryId: string | null,
  query: string | null,
): Promise<any> {
  try {
    const url = createSearchUrl(categoryId, query);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data.results);

    return data.results;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
}

export async function getProductById(productId: string): Promise<any> {
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${productId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error(`Failed to fetch product by ID: ${productId}`, error);
    throw error;
  }
}
