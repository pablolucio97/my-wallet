import styled from 'styled-components'

export const SignInBtn = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;

    width: 100%;
    height: 40px;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.warning};
    border-radius: 7px;
    margin: 30px 0;
    transition: opacity .3s;

    &:hover{
        opacity: .8;
    }

`