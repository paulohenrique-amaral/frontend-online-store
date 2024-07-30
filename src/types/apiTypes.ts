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

export type ProductDetailType = ProductWithQuantityType & {
  id: string,
  title: string,
  thumbnail: string,
  price: number,
  shipping: { free_shipping: boolean },
  warranty: string,
  pictures: { url: string }[],
  available_quantity: number,
};

export type ProductWithQuantityType = ProductType &
{ quantity: number, available_quantity: number };

export type ProviderValues = {
  cart: ProductWithQuantityType[],
  cartSize: number,
  handleAddToCart: (product: ProductWithQuantityType) => void,
  removeItem: (id: string) => void,
  incrementItemQuantity: (id: string, stock: number) => void,
  decrementItemQuantity: (id: string) => void,
  clearCart: () => void,
  errorEditCart: boolean,
  setErrorEditCart: (error: boolean) => void,
  searchApi: ProductType[],
  setSearchApi: (data: ProductType[]) => void,
  categories: CategoryType[],
  loading: boolean,
  fetchCategories: () => void,
  searchFromCategories: (id: string) => void,
  searchFromInput: (inputSearch: string) => void,
  open: boolean,
  toggleDrawer: (newOpen: boolean) => void,
  personData: ClientDataType,
  setPersonData: (data: ClientDataType) => void,
  etapaAtual: number,
  setEtapaAtual: (etapa: number) => void,
  productReviews: EvaluationListType[],
  setProductReviews: (reviews: EvaluationListType[]) => void,
  cartDrawer: boolean,
  toggleCartDrawer: (newOpen: boolean) => void,
};

export type ProviderProps = {
  children: React.ReactNode;
};

export type ProductRatingType = {
  email: string,
  textarea: string,
};

export type PersonDataType = {
  name: string,
  cpf: string,
  date: string
  email: string,
  telefone: string,
};

export type AdressDataType = {
  zipCode: string,
  street: string,
  number: string,
  district: string,
  complement: string,
  city: string,
  state: string,
};

export type PaymentDataType = {
  cardNumber: string,
  expiryDate: string,
  cvc: string,
  cardHolderName: string,
};

export type ClientDataType = {
  person: PersonDataType,
  adress: AdressDataType,
  payment: PaymentDataType,
};

export type FormCheckoutProps = {
  setEtapaAtual: (etapa: number) => void,
};

export type EvaluationListType = {
  id?: string,
  email: string,
  evaluation: string,
  rating: number,
};
