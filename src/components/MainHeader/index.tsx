import React, { useMemo } from 'react';

import emojis from '../../utils/emojis'

import Toggle from '../Toggle'

import { Container, UserName, Welcome, Profile } from './styles';

const MainHeader: React.FC = () => {

  const sortEmojis = useMemo(() => {
    const emojiIndex = Math.floor(Math.random() * emojis.length)
    return emojis[emojiIndex]
  }, [])

  return (
    <Container>
      <Toggle/>
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