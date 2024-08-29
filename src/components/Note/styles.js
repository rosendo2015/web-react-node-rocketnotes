import styled from "styled-components";

export const NoteContainer = styled.button`
width: 100%;
background: ${({theme})=>theme.COLORS.BACKGROUND_700};

border: none;
border-radius: 0.625rem;
padding: 1rem;
margin-bottom: 1rem;

flex-direction: column;
gap: 1.5rem;
height: 7rem;

>h2{
    flex: 1;
    color: #F4EDE8;    
    font-size: 1.5rem;    
    font-weight: 700;
    color: ${({theme})=>theme.COLORS.WHITE};
    text-align: start;
}
>footer{
    width: 100%;
    display: flex;
    margin-top: 24px;

}
`