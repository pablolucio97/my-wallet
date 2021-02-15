import React, { useState } from 'react';

import {
  Container,
  Header,
  LogoImg,
  MenuContainer,
  MenuItemLink,
  Title,
  MenuItemButton,
  ToggleMenu,
  ThemeToggleFooter
} from './styles';

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp
} from 'react-icons/md'

import { MdMenu, MdClose } from 'react-icons/md'

import logoImg from '../../assets/logo.svg'
import Toggle from '../Toggle'

import { useAuth } from '../../hooks/auth'
import { useTheme } from '../../hooks/theme'

const Aside: React.FC = () => {


  const { signOut } = useAuth()
  const { theme, toggleTheme } = useTheme()

  const [toggleMenu, setToggleMenu] = useState(false)
  const [dark, setDark] = useState(() => theme.title === 'dark' ? true : false)


  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  const handleTheme = () => {
    setDark(!dark)
    toggleTheme()
  }

  return (
    <Container isOpen={toggleMenu}>
      <Header>
        <ToggleMenu onClick={handleToggleMenu}>
          {toggleMenu ? <MdClose /> : <MdMenu />}
        </ToggleMenu>
        <LogoImg src={logoImg} alt='Logo My Wallet' />
        <Title>My Wallet</Title>
      </Header>
      <MenuContainer>
        <MenuItemLink href='/'>
          <MdDashboard />
          Dashboard
          </MenuItemLink>
        <MenuItemLink href='/list/entrances'>
          <MdArrowUpward />
          Entrances
          </MenuItemLink>
        <MenuItemLink href='/list/budgets'>
          <MdArrowDownward />
          Budgets
          </MenuItemLink>
        <MenuItemButton onClick={signOut}>
          <MdExitToApp />
          Get Out
          </MenuItemButton>
      </MenuContainer>
      <ThemeToggleFooter isOpen={toggleMenu}>
        <Toggle
          labelLeft='Light'
          labelRight='Dark'
          checked={dark}
          onChange={handleTheme}
        />
      </ThemeToggleFooter>
    </Container>

  )
};


export default Aside;