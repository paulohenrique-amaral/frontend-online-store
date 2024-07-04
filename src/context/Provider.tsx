import { useState } from 'react';
import { ProviderProps, ProviderValues } from '../types/apiTypes';
import Context from './Context';
import useCart from '../hook/useCart';
import useFetch from '../hook/useFetch';

function Provider({ children }: ProviderProps) {
  const [open, setOpen] = useState(false);

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
  };

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
