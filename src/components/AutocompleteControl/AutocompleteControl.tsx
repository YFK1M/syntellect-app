import { observer } from 'mobx-react-lite';
import styles from './AutocompleteControl.module.scss';
import { FC, useEffect, useState } from 'react';
import AutocompleteControlViewModel from './AutocompleteControlViewModel';
import { CountryInfo, getCountryByName } from '../../api/apiService';

interface AutocompleteControlProps {
    maxSuggestions: number;
    data: AutocompleteControlViewModel;
}

const AutocompleteControl: FC<AutocompleteControlProps> = ({ data, maxSuggestions }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async (value: string) => {
      const cachedResults = data.getCachedResults(value);
      if (cachedResults) {
        data.setSuggestions(cachedResults);
      } else {
        try {
          const response = await getCountryByName(value);
          if (response.length === 0) {
            setError('No countries found');
          } else {
            setError('');
            data.setSuggestions(response.slice(0, maxSuggestions));
            data.cacheResults(value, response.slice(0, maxSuggestions));
          }
        } catch (error) {
          console.error('Error fetching suggestions:', error);
          setError('Error fetching suggestions');
          data.setSuggestions([]);
        }
      }
    };

    const timer = setTimeout(() => {
      if (inputValue.trim() !== '') {
        fetchData(inputValue);
      } else {
        setError('');
        data.setSuggestions([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue, data, maxSuggestions]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    data.setControlText(newValue);
    setError('');
  };

  const handleSuggestionClick = (suggestion: CountryInfo) => {
    setInputValue(suggestion.name);
    data.setControlText(suggestion.name);
    data.setSuggestions([]);
    setError('');
  };

  return (
    <div className={styles.autocomplete}>
      <input
        type="text"
        value={data.controlText}
        onChange={handleInputChange}
      />
      {error && <div className={styles.error}>{error}</div>}
      {data.suggestions.length > 0 && (
        <div className={styles.suggestions}>
          {data.suggestions.map((suggestion, index) => (
            <div key={index} className={styles.suggestions__block} onClick={() => handleSuggestionClick(suggestion)}>
              <img src={suggestion.flag} alt={suggestion.fullName} />
              <p>{suggestion.name} - {suggestion.fullName}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default observer(AutocompleteControl);