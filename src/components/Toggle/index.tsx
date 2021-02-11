import React from 'react';


import { Container, ToggleLabel, Switcher } from './styles';

interface IToggle{
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  onChange: () => void;
}

const Toggle: React.FC<IToggle> = ({
  labelLeft,
  labelRight,
  checked,
  onChange
}) => 
   (
    <Container>
      <ToggleLabel>{labelLeft}</ToggleLabel>
      <Switcher
        uncheckedIcon={false}
        checkedIcon={false}
        checked={checked}
        onChange={onChange}
      />
      <ToggleLabel>{labelRight}</ToggleLabel>
    </Container>

  );


export default Toggle;