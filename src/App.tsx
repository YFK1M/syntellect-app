import React from "react";
import TwoButtonsControl from "./components/TextControl/TwoButtonsControl";
import MiddleButtonsControl from "./components/TextControl/MiddleButtonsControl";
import styles from './App.module.scss';
import ThreeSuggestion from "./components/AutocompleteControl/ThreeSuggestion";
import TenSuggestion from "./components/AutocompleteControl/TenSuggestion";

const App = () => {
  return (
    <div className={styles.app}>
      <TwoButtonsControl />
      <MiddleButtonsControl />
      <ThreeSuggestion />
      <TenSuggestion />
    </div>
  );
};

export default App;