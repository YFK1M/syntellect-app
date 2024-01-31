import React from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import AutocompleteControlViewModel from '../components/AutocompleteControl/AutocompleteControlViewModel';

interface TenSuggestionStoreProviderProps  { 
  children: React.ReactNode
}

const TenSuggestionStoreContext = React.createContext<AutocompleteControlViewModel>({} as any);

export const TenSuggestionStoreProvider: React.FC<TenSuggestionStoreProviderProps> = ({ children }) => {

  const tenSuggestionStoreViewModel = new AutocompleteControlViewModel();
  const store = useLocalObservable(() => (tenSuggestionStoreViewModel));

  return (
    <TenSuggestionStoreContext.Provider value={store}>
      {children}
    </TenSuggestionStoreContext.Provider>
  );
};

export const useTenSuggestionStore = () => {
  const context = React.useContext(TenSuggestionStoreContext);
  if (!context) {
    throw new Error('useThreeSuggestionStore must be used within a ThreeSuggestionStoreProvider');
  }
  return context;
};