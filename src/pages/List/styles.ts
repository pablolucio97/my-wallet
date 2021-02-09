import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Content = styled.main`
    display: flex;
    flex-direction: column;
`

export const Filters = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    .tag-filter-commons{
        font-size: 18px;
        font-weight: 500;
        background: none;
        color: ${props => props.theme.colors.white};
        opacity: .4;
        margin: 0 10px;
        transition: opacity .3s;
        

        &:hover{
            opacity: .7;
        }

       
    }

    .tag-filter-commons::after{
            content:'';
            display: block;
            width: 115px;
            margin: 0 auto;
            border-bottom: 7px solid ${props => props.theme.colors.success}
        }


        .tag-filter-eventuals{
        font-size: 18px;
        font-weight: 500;
        opacity: .4;
        background: none;
        color: ${props => props.theme.colors.white};
        margin: 0 10px;
        transition: opacity .3s;
        

        &:hover{
            opacity: .7;
        }

       
    }

    .tag-filter-eventuals::after{
            content:'';
            display: block;
            width: 115px;
            margin: 0 auto;
            border-bottom: 7px solid ${props => props.theme.colors.warning}
        }

    .tag-actived{
        opacity: 1
    }

`