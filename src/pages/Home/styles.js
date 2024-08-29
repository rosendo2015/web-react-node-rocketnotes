import {styled} from 'styled-components'
export const ContainerHome = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-columns: 250px auto;
grid-template-rows: 105px 128px auto 64px;
grid-template-areas: 
"brand header" 
"menu search"
"menu content"
"newnote content";

background-color: ${({theme})=>theme.COLORS.BACKGROUND_800};
`

export const Brand  = styled.div`
grid-area: brand;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid ${({theme})=>theme.COLORS.BACKGROUND_700};

background: ${({theme})=>theme.COLORS.BACKGROUND_900};

>h1{
    font-size: 24px;
    color: ${({theme})=>theme.COLORS.ORANGE};
}
`
export const Menu  = styled.ul`
grid-area: menu;
background: ${({theme})=>theme.COLORS.BACKGROUND_900};
padding-top: 64px;
text-align: center;
>li{
    margin-bottom: 1rem;
}
`
export const Search  = styled.div`
padding: 4rem;
grid-area: search;
`
export const Content  = styled.div`
grid-area: content;
padding: 4rem;
overflow-y: auto;
`
export const NewNote = styled.button`
grid-area: newnote;
display: flex;
align-items: center;
justify-content: center;
gap: 8px;

background: ${({theme})=>theme.COLORS.ORANGE};
color: ${({theme})=>theme.COLORS.BACKGROUND_900};

font-size: 1.25rem;
font-weight: 400;

border: none;
`