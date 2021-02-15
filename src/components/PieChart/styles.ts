import styled, {keyframes} from 'styled-components'

interface IlegendProps{
    color: string;
}

const animate = keyframes`
    0%{
        transform: translateX(100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`

export const Container = styled.div`
    display: flex;
    width: 48%;
    height: 260px;

    background-color: ${props => props.theme.colors.tertiary};
    margin: 10px 0;
    color: ${props => props.theme.colors.white};
    border-radius: 7px;
    animation: ${animate} .5s;

    @media(max-width: 770px){
        display: flex;
        width: 100%;
    }

`


export const SideLeft = styled.aside`
    padding: 30px 20px;
    h2{
        margin-bottom: 20px;
        margin-top: 15px;
    }

    @media(max-width: 1345px){
        padding: 0 15px 5px;
        margin-bottom: 7px;
    }

    @media(max-width: 420px){
        padding: 15px;
        margin-bottom: 7px;
    }
`


export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;

    @media(max-width: 1345px){
        height: 100%;
    }
`


export const LegendContainer = styled.ul`
    list-style: none;
    overflow-y: auto;

    height: 180px;
    padding: 10px 0px;
    margin-bottom: 10px;

    
    ::-webkit-scrollbar{
        width: 10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors.secondary};
        margin-bottom: 10px;
    }

    ::-webkit-scrollbar-track{
        background-color: ${props => props.theme.colors.primary};
        margin-bottom: 10px;
    }

    @media(max-width: 1345px){
        display: flex;
        flex-direction: column;
    }


`

export const Legend = styled.li<IlegendProps>`


    div{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.color};

        width: 48px;
        height: 42px;
        margin: 5px;
        border-radius: 3px;
        font-size: 14px;
        font-weight: 500;
    }

    span{
        margin-left: 7px;
        font-size: 14px;
    }

    @media(max-width: 145px){
        font-size: 14px;
        margin: 3px;

        div{
            height: 35px;
            width: 35px;
            line-height: 35px;
        }

        span{
            margin-left: 7px;
        }
    }
    
`


