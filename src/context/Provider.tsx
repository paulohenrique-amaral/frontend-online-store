import { useState } from 'react';
import {
  ProviderProps, ProviderValues, EvaluationListType, ClientDataType,
} from '../types/apiTypes';
import Context from './Context';
import useCart from '../hook/useCart';
import useFetch from '../hook/useFetch';
import { initialState } from '../help/helper';

function Provider({ children }: ProviderProps) {
  const [open, setOpen] = useState(false);
  const [cartDrawer, setCartDrawer] = useState(false);
  const [personData, setPersonData] = useState<ClientDataType>(initialState);
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [productReviews, setProductReviews] = useState<EvaluationListType[]>([]);
  const [page, setPage] = useState(1);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const toggleCartDrawer = (newOpen: boolean) => {
    setCartDrawer(newOpen);
  };

  const {
    cart,
    cartSize,
    handleAddToCart,
    removeItem,
    incrementItemQuantity,
    decrementItemQuantity,
    clearCart,
    errorEditCart,
    setErrorEditCart,
  } = useCart();

  const {
    searchApi,
    setSearchApi,
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
    errorEditCart,
    setErrorEditCart,
    searchApi,
    setSearchApi,
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
    productReviews,
    setProductReviews,
    cartDrawer,
    toggleCartDrawer,
    page,
    setPage,
  };

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
