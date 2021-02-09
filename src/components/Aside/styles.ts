import styled from 'styled-components'

export const Container = styled.div`
    grid-area: AS;

    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;

`

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
`

export const LogoImg = styled.img`
    margin: 7px;

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

