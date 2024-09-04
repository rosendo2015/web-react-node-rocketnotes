import styled from "styled-components";

export const NoteItemContainer = styled.div`
display: flex;
align-items: center;

background: ${({theme, $isnew}) => $isnew ? "transparente" : theme.COLORS.BACKGROUND_900};

color: ${({theme}) => theme.COLORS.GRAY_300};

border: ${({theme, $isnew}) => $isnew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

margin-bottom: 8px;
border-radius: 10px;
padding-right: 16px;

>button{
    border: none;
    background: none;
}
.button-delete{color: ${({theme})=>theme.COLORS.RED}}
.button-add{color: ${({theme})=>theme.COLORS.ORANGE}}

>input{
    width: 100%;
    height: 56px;

    padding: 12px;
    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }
}
`