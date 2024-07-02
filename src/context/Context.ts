import { createContext } from 'react';
import { ProviderValues } from '../types/apiTypes';

const Context = createContext({} as ProviderValues);

export default Context;
