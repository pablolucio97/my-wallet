import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 48%;
    height: 260px;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;

    margin: 10px 0;
    padding: 30px 20px;


    img{
        width: 30px;
        height: 30px;
        margin: 5px 20px 0px;
    }

    p{
        font-size: 18px;
    }
`