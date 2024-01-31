import React from 'react';
import { observer } from 'mobx-react-lite';
import Button from '../Button/Button';
import TextControlViewModel from './TextControlViewModel';
import styles from './TextControl.module.scss'

interface TextControlProps {
  data: TextControlViewModel;
}

const TextControl: React.FC<TextControlProps> = ({data}) => {

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    data.setControlText(event.target.value);
  };

  return (
    <div className={styles.textControl}>
      {data.leftButtons.map((button, index) => <Button key={index} data={button}/>)}
      <input 
        type="text" 
        value={data.controlText}
        onChange={handleChangeText}
      />
      {data.rightButtons.map((button, index) => <Button key={index} data={button}/>)}
    </div>
  );
};

export default observer(TextControl);