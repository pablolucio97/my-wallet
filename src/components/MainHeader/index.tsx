import React, { useMemo, useState } from 'react';

import emojis from '../../utils/emojis'

import Toggle from '../Toggle'

import { Container, UserName, Welcome, Profile } from './styles';

import {useTheme} from '../../hooks/theme'


const MainHeader: React.FC = () => {

  const {theme, toggleTheme} = useTheme()

  const [checkedVal, setCheckedVal] = 
  useState(() => theme.title === 'dark' ? true : false )

  const sortEmojis = useMemo(() => {
    const emojiIndex = Math.floor(Math.random() * emojis.length)
    return emojis[emojiIndex]
  }, [])

  const handleChangeTheme = () => {
    setCheckedVal(!checkedVal);
    toggleTheme();
  }

  return (
    <Container>
      <Toggle
        labelLeft='Light'
        labelRight='Dark'
        checked={checkedVal}
        onChange={handleChangeTheme}
      />
      <Profile>
        <Welcome>
          Hello, {sortEmojis}
        </Welcome>
        <UserName>
          Pablo Silva
        </UserName>
      </Profile>
    </Container>

  );
}

export default MainHeader;