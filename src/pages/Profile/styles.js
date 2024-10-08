import styled from "styled-components";

export const ProfileContainer = styled.div`
width: 100%;
>header{
    width: 100%;
    height: 144px;

    background: ${({theme})=>theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 0 124px;

    svg{
        color: ${({theme})=>theme.COLORS.GRAY_100};
        font-size: 24px;
    }
}
`
export const Avatar = styled.div`
position: relative;
margin: 0 auto 32px;
text-align: center;

width: 186px;
height: 186px;

>img{
    border-radius: 50%;
    width: 186px;
    height: 186px;

}
>label{
    width: 48px;
    height: 48px;
    background: ${({theme})=>theme.COLORS.ORANGE};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 7px;
    bottom: 7px;

    cursor: pointer;

    >input{
        display: none;
    }
    >svg{
        font-size: 24px;
    }
}
`
export const FormContainer = styled.form`
max-width: 340px;
margin: -84px auto 0;
color: ${({theme})=>theme.COLORS.BACKGROUND_800};

>div:nth-child(4){
    margin-top: 24px;
}
`