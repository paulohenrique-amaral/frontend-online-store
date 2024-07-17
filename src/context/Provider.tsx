import { useState } from 'react';
import {
  ProviderProps, ProviderValues, PersonDataType, ClientDataType,
} from '../types/apiTypes';
import Context from './Context';
import useCart from '../hook/useCart';
import useFetch from '../hook/useFetch';

const initialState: ClientDataType = {
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

function Provider({ children }: ProviderProps) {
  const [open, setOpen] = useState(false);
  const [personData, setPersonData] = useState<ClientDataType>(initialState);
  const [etapaAtual, setEtapaAtual] = useState(0);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const {
    cart,
    cartSize,
    handleAddToCart,
    removeItem,
    incrementItemQuantity,
    decrementItemQuantity,
    clearCart,
  } = useCart();

  const {
    searchApi,
    categories,
    loading,
    fetchCategories,
    searchFromCategories,
    searchFromInput,
  } = useFetch();

  const value: ProviderValues = {
    cart,
    cartSize,
    handleAddToCart,
    removeItem,
    incrementItemQuantity,
    decrementItemQuantity,
    clearCart,
    searchApi,
    categories,
    loading,
    fetchCategories,
    searchFromCategories,
    searchFromInput,
    open,
    toggleDrawer,
    personData,
    setPersonData,
    etapaAtual,
    setEtapaAtual,
  };

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
