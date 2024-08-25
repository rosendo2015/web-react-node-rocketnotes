import styled from "styled-components";

export const ContainerDetails = styled.div`
margin: 0;
padding: 0;
box-sizing: border-box;

h1{    
    color: ${({theme})=>theme.COLORS.ORANGE};
}
h2{   
    color: ${({theme})=>theme.COLORS.GRAY_100};
}
`