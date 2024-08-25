import { ContainerButton } from "./styles";

export function Button({title}) {
    return (
        <ContainerButton type="button">
            {title}
        </ContainerButton>         
    );
}