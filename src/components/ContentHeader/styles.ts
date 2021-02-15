import styled from 'styled-components'

interface ILineColor {
    lineColor: string
}

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    margin-bottom: 25px;

    @media(max-width: 420px){
        flex-direction: column;
    }

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

    @media(max-width: 420px){
        h1{
            font-size: 22px;
        }
        
    }

`


export const Controllers = styled.div`
    display: flex;

    @media(max-width: 420px){
        width: 100%;
        justify-content: space-around;
        margin-top: 20px;
        
    }
    
`
