import React from "react";
import { MiddleButtonsControlStoreProvider, useMiddleButtonsControlStore } from "../../stores/MiddleButtonsControlStore"
import ButtonViewModel from "../Button/ButtonViewModel";
import TextControl from "./TextControl"

const MiddleButtonsControlContent = () => {
  const store = useMiddleButtonsControlStore();

  React.useEffect(() => {
    const handleAlertButtonClick = () => {
      alert(store.controlText);
    };
  
    const handleNumberAlertButtonClick = () => {
      const matches = store.controlText.match(/\d+/g);
      if (matches) {
        alert(matches.join(', '));
      } else {
        alert('В строке нет числа');
      }
    };

    store.setLeftButtons([
      new ButtonViewModel('Alert', handleAlertButtonClick),
    ]);

    store.setRightButtons([
      new ButtonViewModel('NumberAlert', handleNumberAlertButtonClick),
    ]);
  }, [store]);

  return <TextControl data={store} />;
}

const MiddleButtonsControl = () => {
  return (
      <MiddleButtonsControlStoreProvider>
          <MiddleButtonsControlContent />
      </MiddleButtonsControlStoreProvider>
  );
}

export default MiddleButtonsControl;