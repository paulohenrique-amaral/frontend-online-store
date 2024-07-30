import { useCallback } from 'react';

export const useFormatCurrency = () => {
  return useCallback((value: number) => {
    return value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  }, []);
};
