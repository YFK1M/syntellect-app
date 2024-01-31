import React from "react";
import AutocompleteControl from "./AutocompleteControl";
import { TenSuggestionStoreProvider, useTenSuggestionStore } from "../../stores/TenSuggestionStore";

const TenSuggestionContent = () => {
  const store = useTenSuggestionStore();

  return <AutocompleteControl data={store} maxSuggestions={10}/>;
}

const TenSuggestion = () => {
  return (
    <TenSuggestionStoreProvider>
      <TenSuggestionContent />
    </TenSuggestionStoreProvider>
  );
}

export default TenSuggestion;