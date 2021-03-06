import styled, {keyframes} from 'styled-components'



interface ITagProps{
    color: string
}


const animate = keyframes`
    0%{
        transform: translateX(-100px);
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
    justify-content: space-between;

    width: 100%;
    position: relative;

    background-color: ${props => props.theme.colors.tertiary};
    list-style: none;
    border-radius: 5px;
    margin: 10px;
    padding: 10px 12px;
    animation: ${animate} .5s ease;

    cursor: pointer;
    transition: all .3s;

    &:hover{
        opacity: .7;
        transform: translateX(10px);
    }

    div{
        display: flex;
        flex-direction: column;
    }

    div span{
        font-size: 18px;
        font-weight: 500;
    }

`


export const Tag = styled.li<ITagProps>`
   
    position: absolute;
    left: 2px;
    top: 0;
    width: 7px;
    height: 99%;
    margin-right: 4px;
    background-color: ${props => props.color};


`