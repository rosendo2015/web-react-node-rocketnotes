import { NewNoteContainer } from "./stiles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Form } from "./stiles";
import { NoteItem } from "../../components/NoteItem";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";


export function NewNote({ children }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()

    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink])
        setNewLink("")
    }
    function handleRemoveLink(deleted) {
        setLinks(prevState => prevState.filter(link => link !== deleted));
    }
    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }
    async function handleNewNote() {
        if(!title){
            return alert("Título não pode ficar vazio")
        }
        if(!description){
            return alert("Digite a descrição da nota")
        }
        if (newTag) {
            return alert("Clique no + para adiconar a tag")
        }
        if (newLink) {
            return alert("Clique no + para adiconar o link")
        }
        await api.post("/notes", {
            title,
            description,
            tags,
            links
        })
        alert("Nota cadastrada comsucesso.");
        navigate("/")
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
                    <Input
                        placeholder="Título"
                        onChange={e => setTitle(e.target.value)}
                    />
                    <TextArea
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    />

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
                        {
                            tags.map((tag, index) => (
                                <NoteItem
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => { }}
                                />
                            ))
                        }
                        <div className="tags">
                            <NoteItem
                                $isnew
                                placeholder="Novo tag"
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                            />

                        </div>
                    </Section>
                    <Button
                        title="Salvar"
                        onClick={handleNewNote}
                    />
                </Form>
            </main>
        </NewNoteContainer>
    )
};
