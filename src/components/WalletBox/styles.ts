import styled from 'styled-components'

interface IContainerProps{
    color: string
}

export const Container = styled.div<IContainerProps>`
    display: flex;
    width: 32%;
    height: 150px;
    margin: 10px 0;
    background-color: ${props => props.color};
    color: ${props => props.theme.colors.white};
    padding: 10px 20px;
    position: relative;
    overflow: hidden;
    border-radius: 4px;

    span{
        font-size: 18px;
        font-weight: 500;
    }

    small{
        font-size: 12px;
        position: absolute;
        bottom: 10px;
    }

    h1{
        position:absolute;
        top: 30px;
        left: 20px;
    }

    img{
        opacity: .4;
        position: absolute;
        height: 110%;
        top: -10px;
        right: -30px;
    }

`


  

