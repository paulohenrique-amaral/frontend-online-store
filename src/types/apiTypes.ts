export type CategoryType = {
  id: string;
  name: string;
};

export type ProductType = {
  id: string,
  title: string,
  thumbnail: string,
  price: number,
  shipping: { free_shipping: boolean },
};

export type ProviderValues = {
  isLoading: boolean;
  // fetchApi: (url: string) => void;
};

export type ProviderProps = {
  children: React.ReactNode;
};
