import { ProviderProps } from '../types/apiTypes';
import Context from './Context';

function Provider({ children }: ProviderProps) {
  const value = { isLoading: false };

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
