import React from 'react';


import { Container, ToggleLabel, Switcher } from './styles';

const Toggle: React.FC = () => {
  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <Switcher
        uncheckedIcon={false}
        checkedIcon={false}
        checked={false}
        onChange={() => { }}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>

  );
}

export default Toggle;