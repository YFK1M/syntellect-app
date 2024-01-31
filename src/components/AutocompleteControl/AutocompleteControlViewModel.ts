import { makeAutoObservable } from 'mobx';
import { CountryInfo } from '../../api/apiService';

class AutocompleteControlViewModel {  
  controlText = '';
  suggestions = [] as CountryInfo[];
  cachedResults: { [key: string]: CountryInfo[] } = {};

  constructor() {
    makeAutoObservable(this);
  }

  setControlText(text: string) {
    this.controlText = text;
  }

  setSuggestions(suggestions: CountryInfo[]) {
    this.suggestions = suggestions;
  }

  getCachedResults(text: string): CountryInfo[] | undefined {
    return this.cachedResults[text];
  }

  cacheResults(text: string, suggestions: CountryInfo[]) {
    this.cachedResults[text] = suggestions;
  }
}

export default AutocompleteControlViewModel;