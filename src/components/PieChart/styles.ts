import styled from 'styled-components'

interface IlegendProps{
    color: string;
}


export const Container = styled.div`
    display: flex;
    width: 48%;
    height: 260px;

    background-color: ${props => props.theme.colors.tertiary};
    margin: 10px 0;
    color: ${props => props.theme.colors.white};
    border-radius: 7px;


`


export const SideLeft = styled.aside`
    padding: 30px 20px;
    h2{
        margin-bottom: 20px;
    }
`


export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;
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
    
`


