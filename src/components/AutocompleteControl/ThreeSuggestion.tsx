import React from "react";
import { ThreeSuggestionStoreProvider, useThreeSuggestionStore } from "../../stores/ThreeSuggestionStore";
import AutocompleteControl from "./AutocompleteControl";

const ThreeSuggestionContent = () => {
  const store = useThreeSuggestionStore();

  return <AutocompleteControl data={store} maxSuggestions={3}/>;
}

const ThreeSuggestion = () => {
  return (
    <ThreeSuggestionStoreProvider>
      <ThreeSuggestionContent />
    </ThreeSuggestionStoreProvider>
  );
}

export default ThreeSuggestion;