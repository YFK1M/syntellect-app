import React from 'react';
import ButtonViewModel from './ButtonViewModel';

interface ButtonProps {
  data: ButtonViewModel;
}

const Button: React.FC<ButtonProps> = ({data}) => {
  return (
    <button onClick={data.callback}>
      {data.text}
    </button>
  );
};

export default Button;