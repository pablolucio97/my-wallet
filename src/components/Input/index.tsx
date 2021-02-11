import React, {InputHTMLAttributes} from 'react';

import { InputElement } from './styles';

type IInput = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<IInput> = ({...rest}) => {
  return (
    <InputElement {...rest}>
    </InputElement>

  );
}

export default Input;