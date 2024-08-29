import styled from "styled-components";

export const InputContainer = styled.div`
width: 100%;

display: flex;
align-items: center;
justify-content: center;

background: ${({theme})=>theme.COLORS.BACKGROUND_900};
color: ${({theme})=>theme.COLORS.GRAY_300};
height: 3.5rem;
border-radius: 0.63rem;
padding-left: 1rem;
margin-bottom: 8px;


>input{
    border: none;
    border-radius: 0.63rem;
    color: ${({theme})=>theme.COLORS.WHITE};
    width: 100%;
    height: 3.5rem;
    background: transparent;
    margin-left: 16px;
    padding-left: 1rem;

    &::placeholder{
    color: ${({theme})=>theme.COLORS.GRAY_300};
    font-size: 0.875rem;
    font-weight: 400;
}
}
`