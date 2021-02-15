import styled, { css } from 'styled-components'

interface IMenuProps {
    isOpen: boolean;
}

interface IToggleTheme {
    isOpen: boolean;
}

export const Container = styled.div<IMenuProps>`
    grid-area: AS;

    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};
    position: relative;

    @media(max-width: 600px){
        padding-left: 20px;
        position: fixed;
        z-index: 2;
        width: 170px;
        height: ${props => props.isOpen ? '100vh' : '70px'};
        overflow: hidden;
        ${props => !props.isOpen && css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.gray};
        `};
    }
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;

`

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;

    @media(max-width: 600px){
        display: none;
    }
`

export const LogoImg = styled.img`
    margin: 7px;
    @media(max-width: 600px){
        display: none;
    }

`

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;

    margin-top: 50px;
`

export const MenuItemLink = styled.a`

    display:flex;
    align-items: center;

    color: ${props => props.theme.colors.white};
    text-decoration: none;
    margin: 7px;
    transition: all .3s;

    &:hover{
        opacity: .7;
    }

     svg{
        font-size: 1.2rem;
        margin-right: 7px;
    }

`


export const MenuItemButton = styled.button`

    
    font-size: 17px;
    border-radius: none;
    background: none;

    margin: 10px 0 0 -130px;
    color: ${props => props.theme.colors.white};

    transition: opacity .3s;

    &:hover{
        opacity: .8;
        cursor: pointer;
    }

    @media(max-width: 600px){
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0 0 -50px;
    }

`

export const ToggleMenu = styled.button`
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    font-size: 22px;
    background-color: ${props => props.theme.colors.warning};
    transition: opacity .3s;

    &:hover{
        cursor: pointer;
        opacity: .8
    }

    @media(max-width: 600px){
        display: flex;
        justify-content: center;
        align-items: center;
    }

`

export const ThemeToggleFooter = styled.footer<IToggleTheme>`
    display: none;
    position: absolute;
    bottom: 20px;

    @media(max-width: 600px){
        display: ${props => props.isOpen? 'flex' : 'none'}
    }
`

