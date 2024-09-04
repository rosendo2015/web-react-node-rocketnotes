import { FiPlus, FiX } from "react-icons/fi";
import { NoteItemContainer } from "./styles";

export function NoteItem({ $isnew = false, value, onClick, ...rest }) {
    return (
        <NoteItemContainer
            $isnew={$isnew}
        >
            <input
                type="text"
                value={value}
                readOnly={!$isnew}
                {...rest}
            />
            <button
                type="button"
                onClick={onClick}
                className={$isnew ? 'button-add' : 'button-delete'}
            >
                {$isnew ? <FiPlus /> : <FiX />}
            </button>
        </NoteItemContainer>
    )

};
