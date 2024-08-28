import styled from "styled-components";

export const SectionContainer = styled.section`
margin: 28px 0;

>h2{
    border-bottom: 1px solid ${({theme})=>theme.COLORS.BACKGROUND_700};
    padding-bottom: 1rem;
    margin-bottom: 24px;
    color: ${({theme})=>theme.COLORS.GRAY_100};
    font-size: 20PX;
    font-weight: 400;
}
`;
