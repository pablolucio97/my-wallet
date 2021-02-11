import React from 'react';

import {
  Container,
  Header,
  LogoImg,
  MenuContainer,
  MenuItemLink,
  Title
} from './styles';

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp
} from 'react-icons/md'

import logoImg from '../../assets/logo.svg'

const Aside: React.FC = () => 
   (
    <Container>
      <Header>
        <LogoImg src={logoImg} alt='Logo My Wallet' />
        <Title>My Wallet</Title>
      </Header>
      <MenuContainer>
        <MenuItemLink href='/'>
          <MdDashboard/>
          Dashboard
          </MenuItemLink>
        <MenuItemLink href='/list/entrances'>
          <MdArrowUpward/>
          Entrances
          </MenuItemLink>
        <MenuItemLink href='/list/budgets'>
          <MdArrowDownward/>
          Budgets
          </MenuItemLink>
        <MenuItemLink href='/get-out'>
          <MdExitToApp/>
          Get Out
          </MenuItemLink>
      </MenuContainer>
    </Container>

  );


export default Aside;