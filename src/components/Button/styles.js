import styled from "styled-components";

export const ContainerButton = styled.button`
width: 100%;
background-color: ${({theme})=>theme.COLORS.ORANGE};
height: 56px;
border: 0;
padding: 0 1rem;
margin-top: 1rem;
border-radius: 10px;
font-weight: 500;

&:disabled{
    cursor: not-allowed;
    opacity: 0.5;
}
&:not:disabled{
    cursor: pointer;
}
`