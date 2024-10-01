import { NewNoteContainer } from "./stiles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Form } from "./stiles";
import { NoteItem } from "../../components/NoteItem";
import { Link } from "react-router-dom";
import { useState } from "react";


export function NewNote({ children }) {
    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")

    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink])
        setNewLink("")
    }
    function handleRemoveLink(deleted) {
        setLinks(prevState => prevState.filter(link => link !== deleted));
    }
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
                        {links.map((link, index) => {
                            return (
                                <NoteItem
                                    key={index}
                                    value={link}
                                    onClick={() => handleRemoveLink(link)}
                                />
                            )
                        })}
                        <NoteItem
                            $isnew
                            placeholder="Novo Link"
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
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
