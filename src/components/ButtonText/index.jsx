import { ButtonTextContainer } from "./styles";

export function ButtonText({title, ...rest}){
    return(
        <ButtonTextContainer type="buttom" {...rest}>
{title}            
        </ButtonTextContainer>
    )
};
