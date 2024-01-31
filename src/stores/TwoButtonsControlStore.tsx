import React from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import TextControlViewModel from '../components/TextControl/TextControlViewModel';

interface TwoButtonsControlProviderProps  { 
  children: React.ReactNode
}

const TwoButtonsControlStoreContext = React.createContext<TextControlViewModel>({} as any);

export const TwoButtonsControlStoreProvider: React.FC<TwoButtonsControlProviderProps> = ({ children }) => {

  const twoButtonsControlViewModel = new TextControlViewModel();
  const store = useLocalObservable(() => (twoButtonsControlViewModel));

  return (
    <TwoButtonsControlStoreContext.Provider value={store}>
      {children}
    </TwoButtonsControlStoreContext.Provider>
  );
};

export const useTwoButtonsControlStore = () => {
  const context = React.useContext(TwoButtonsControlStoreContext);
  if (!context) {
    throw new Error('useTextControlStore must be used within a TextControlStoreContext');
  }
  return context;
};