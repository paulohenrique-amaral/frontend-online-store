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

export type ProductWithQuantityType = ProductType &
{ quantity: number, available_quantity: number };

export type ProviderValues = {
  cart: ProductWithQuantityType[],
  cartSize: number,
  handleAddToCart: (product: ProductWithQuantityType) => void,
  removeItem: (id: string) => void,
  incrementItemQuantity: (id: string) => void,
  decrementItemQuantity: (id: string) => void,
  clearCart: () => void,
};

export type ProviderProps = {
  children: React.ReactNode;
};
