import React from "react";
import { TwoButtonsControlStoreProvider, useTwoButtonsControlStore } from "../../stores/TwoButtonsControlStore"
import ButtonViewModel from "../Button/ButtonViewModel";
import TextControl from "./TextControl"

const TwoButtonsControlContent = () => {
  const store = useTwoButtonsControlStore();

  React.useEffect(() => {
    const handleCleanButtonClick = () => {
      store.setControlText('')
    };
  
    const handleHelloWorldButtonClick = () => {
      store.setControlText('Hello World!')
    };

    store.setRightButtons([
      new ButtonViewModel('Очистить', handleCleanButtonClick),
      new ButtonViewModel('Hello World', handleHelloWorldButtonClick),
    ]);
  }, [store]);

  return <TextControl data={store} />;
}

const TwoButtonsControl = () => {
  return (
      <TwoButtonsControlStoreProvider>
          <TwoButtonsControlContent />
      </TwoButtonsControlStoreProvider>
  );
}

export default TwoButtonsControl;