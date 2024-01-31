import React from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import AutocompleteControlViewModel from '../components/AutocompleteControl/AutocompleteControlViewModel';

interface ThreeSuggestionStoreProviderProps  { 
  children: React.ReactNode
}

const ThreeSuggestionStoreContext = React.createContext<AutocompleteControlViewModel>({} as any);

export const ThreeSuggestionStoreProvider: React.FC<ThreeSuggestionStoreProviderProps> = ({ children }) => {

  const threeSuggestionViewModel = new AutocompleteControlViewModel();
  const store = useLocalObservable(() => (threeSuggestionViewModel));

  return (
    <ThreeSuggestionStoreContext.Provider value={store}>
      {children}
    </ThreeSuggestionStoreContext.Provider>
  );
};

export const useThreeSuggestionStore = () => {
  const context = React.useContext(ThreeSuggestionStoreContext);
  if (!context) {
    throw new Error('useThreeSuggestionStore must be used within a ThreeSuggestionStoreProvider');
  }
  return context;
};