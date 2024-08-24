import styled from "styled-components";

export const ContainerDetails = styled.div`
margin: 0;
padding: 0;
box-sizing: border-box;

h1{
    font-weight: 700;
    color: ${({theme})=>theme.COLORS.ORANGE};
}
p{
    font-weight: 100;
    color: ${({theme})=>theme.COLORS.GRAY_100};
}
`