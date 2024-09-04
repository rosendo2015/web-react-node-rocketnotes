import styled from "styled-components";

export const TextAreaContainer = styled.textarea`
width: 100%;
height: 9.375rem;

background: ${({theme})=>theme.COLORS.BACKGROUND_900};
color: ${({theme})=>theme.COLORS.WHITE};

border: none;
resize: none;

margin-bottom: 8px;

border-radius: 10px;
padding: 1rem 3rem;

&::placeholder{
    color: ${({theme})=>theme.COLORS.GRAY_300};
    font-size: 0.875rem;
    font-weight: 400;
}
`