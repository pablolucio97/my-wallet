import styled from 'styled-components'

interface ILineColor {
    lineColor: string
}

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    margin-bottom: 25px;

`

export const TitleContainer = styled.div<ILineColor>`

    h1{
        color: ${props => props.theme.colors.white}
    }

    &::after{
        content:'';
        display: block;
        width: 55px;
        border-bottom: 7px solid ${props => props.lineColor}
    }

`


export const Controllers = styled.div`
    display: flex;
    
`
