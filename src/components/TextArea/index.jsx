import { TextAreaContainer } from "./styles"
export function TextArea({ value, ...rest }) {
    return (
        <TextAreaContainer {...rest}>
            {value}
        </TextAreaContainer>
    )
};
