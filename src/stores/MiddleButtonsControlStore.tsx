import React from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import TextControlViewModel from '../components/TextControl/TextControlViewModel';

interface MiddleButtonsControlStoreProviderProps  { 
  children: React.ReactNode
}

const MiddleButtonsControlStoreContext = React.createContext<TextControlViewModel>({} as any);

export const MiddleButtonsControlStoreProvider: React.FC<MiddleButtonsControlStoreProviderProps> = ({ children }) => {

  const middleButtonsControlViewModel = new TextControlViewModel();
  const store = useLocalObservable(() => (middleButtonsControlViewModel));

  return (
    <MiddleButtonsControlStoreContext.Provider value={store}>
      {children}
    </MiddleButtonsControlStoreContext.Provider>
  );
};

export const useMiddleButtonsControlStore = () => {
  const context = React.useContext(MiddleButtonsControlStoreContext);
  if (!context) {
    throw new Error('useTextControlStore must be used within a TextControlStoreContext');
  }
  return context;
};