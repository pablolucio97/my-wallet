import React, {ChangeEvent} from 'react';

import { Container } from './styles';


interface ISelectInputProps{
    options:{
        value: string | number,
        label: string | number

    }[],
    onChange(event: ChangeEvent<HTMLSelectElement>) : void | undefined,
    defaultValue?: string | number
}

const SelectInput: React.FC<ISelectInputProps> = ({options, onChange, defaultValue}) => {
  return (
      <Container>
          <select name="option" id="option" 
          defaultValue={defaultValue}
          onChange={onChange}>
              {options.map((option, index) => (
                  <option key={index} value={option.value}>{option.label}</option>
              ))}

          </select>
      </Container>
  );
}

export default SelectInput;