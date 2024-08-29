import { NoteContainer } from "./styles";
import { Tag } from "../Tag"

export function Note({ data, ...rest }) {
    return (
        <NoteContainer>

            <h2>
                {data.title}
            </h2>
            {

                <footer>
                    {
                        data.tags.map(tag => {
                            return (
                                <Tag key={tag.id} title={tag.name} />
                            )
                        })
                    }
                </footer>
            }
        </NoteContainer>

    )
}