import { ClientDataType, ProductWithQuantityType } from '../types/apiTypes';

export const scrollToSection = (page: string) => {
  if (page) {
    const section = document.getElementById(page);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

export const initialState: ClientDataType = {
  person: {
    name: '',
    cpf: '',
    date: '',
    email: '',
    telefone: '',
  },
  adress: {
    zipCode: '',
    street: '',
    number: '',
    district: '',
    complement: '',
    city: '',
    state: '',
  },
  payment: {
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    cardHolderName: '',
  },
};

export const initialProductDetails = {
  id: '',
  title: '',
  thumbnail: '',
  price: 0,
  shipping: { free_shipping: false },
  warranty: '',
  pictures: [
    { url: '' },
  ],
  quantity: 0,
  available_quantity: 0,
};

export const handleCalculateTotalCart = (cart: ProductWithQuantityType[]) => {
  return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
};
