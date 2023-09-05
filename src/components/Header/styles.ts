import { styled } from "styled-components";

export const Container = styled.header`
    background: #fff;
    display: flex;
    justify-content: center;
    height: 270px;
    align-items: center;
`;


export const Content = styled.div `
    width: 100%;
    max-width: 1216px;
    display: flex;
    align-items: flex;
    justify-content: space-between;

    .page-details {
        h1{
            color: black;
            font-size: 32px;
        }

        h2 {
            color: black;
            font-weight: 400;
            font-size: 16px;
            opacity: 0.9;
            margin-top: 6px;
        }
    }
    
`