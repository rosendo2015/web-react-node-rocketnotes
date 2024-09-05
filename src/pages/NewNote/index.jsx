import { NewNoteContainer } from "./stiles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Form } from "./stiles";
import { NoteItem } from "../../components/NoteItem";
import { Link } from "react-router-dom";


export function NewNote({ children }) {
    return (
        <NewNoteContainer>
            <Header />
            <main>
                <Form>
                    <header>
                        <h1>
                            Criar notas
                        </h1>
                        <Link to="/">
                            Voltar
                        </Link>
                    </header>
                    <Input placeholder="Título" />
                    <TextArea placeholder="Observações" />

                    <Section title="Links úteis">
                        <NoteItem value="" $isnew placeholder="Novo link" />
                        <NoteItem value="rosendc30@gmail.com" />
                    </Section>
                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem $isnew placeholder="Novo tag" />
                            <NoteItem value="react" />
                            <NoteItem value="react" />
                            <NoteItem value="react" />
                            <NoteItem value="react" />
                        </div>
                    </Section>
                    <Button title="Salvar" />
                </Form>
            </main>
        </NewNoteContainer>
    )
};
