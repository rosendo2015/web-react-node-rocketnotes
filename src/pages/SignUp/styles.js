import styled from "styled-components";
import backgroundImg from "../../assets/background.png" 

export const SignUpContainer = styled.div`
    width: 100%;    
    height: 100vh;
    
    display: flex;   
    align-items: stretch;

`
export const Form = styled.form`
padding: 0 136px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;

> h2 {
    color: ${({theme})=>theme.COLORS.WHITE};
    font-size: 1.5rem;
    font-weight: 500;
    padding: 3rem 0;
}
> p {
    color: ${({theme})=>theme.COLORS.GRAY_100};
    font-size: 0.875rem;
    font-weight: 400;
}
>a{
    margin-top: 7.7rem;
    color: ${({theme})=>theme.COLORS.ORANGE};
}

`

export const Background = styled.div`
flex: 1;
background: url(${backgroundImg}) no-repeat center center;
background-size: cover;
opacity: 0.4;
`