import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
grid-area: header;
width: 100%;
height: 105px;
border-bottom: 1px solid ${({theme})=>theme.COLORS.BACKGROUND_700};
display: flex;
justify-content: space-between;
padding: 0 80px;
`
export const ProfileContainer = styled(Link)`
display: flex;
align-items: center;

> img{
    width: 56px;
    height: 56px;
    border-radius: 50%;
}

>div{
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    line-height: 24px;
}
span{
    font-size: 14px;
    color: ${({theme})=>theme.COLORS.GRAY_100};
}
strong{
    font-size: 18px;
    color: ${({theme})=>theme.COLORS.WHITE};
}
`
export const LogoutContainer = styled.button`
border: none;
background: transparent;

>svg{
    color: ${({theme})=>theme.COLORS.GRAY_100};
}
`