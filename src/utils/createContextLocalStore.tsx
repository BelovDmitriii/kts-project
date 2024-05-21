import * as React from 'react';
import { ILocalStore } from 'utils/useLocalStore';

export const createContextLocalStore = <T extends ILocalStore>(Constructor: new (...args: unknown[]) => T) => {
  const Context = React.createContext<T | null>(null);

  const Provider = ({ children, store }: React.PropsWithChildren<{ store: T }>) => (
    <Context.Provider value={store}>{children}</Context.Provider>
  );

  const useStore = () => {
    const context = React.useContext(Context);
    if (!context) {
      throw new Error(`${Constructor.name} not in Provider`);
    }
    return context;
  };

  return {
    Provider,
    useStore,
  };
};