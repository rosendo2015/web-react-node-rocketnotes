import { ButtonTextContainer } from "./styles";

export function ButtonText({title, $isactive = false, ...rest}){
    return(
        <ButtonTextContainer 
        type="buttom" 
        $isactive={$isactive.toString()}
        {...rest}>
        {title}            
        </ButtonTextContainer>
    )
};
