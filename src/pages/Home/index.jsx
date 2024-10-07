import { ContainerHome, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { FiPlus, FiSearch } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { useEffect, useState } from "react";
import { api } from "../../services/api";



export function Home() {
    const [tags, setTags] = useState([])


    useEffect(() => {
        async function fetchTags() {
            const response = await api.get("/tags")
            setTags(response.data)
        }

        fetchTags();
    }, [])
    return (
        <ContainerHome>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>
            <Header />
            <Menu>
                <li>
                    <ButtonText
                        title="Todos"
                        $isactive
                    />
                </li>
                {tags && tags.map(tag => (
                    <li
                        key={String(tag.id)}
                    ><ButtonText
                            title={tag.name}
                        />
                    </li>
                ))}

            </Menu>
            <Search>
                <Input icon={FiSearch} placeholder="Pesquisar por título" />
            </Search>
            <Content>
                <Section title="Minhas notas">
                    <Note data={{
                        title: 'react modal',
                        tags: [
                            { id: '1', name: 'react' },
                            { id: '2', name: 'rocket' },
                            { id: '3', name: 'front-end' },
                        ]
                    }}
                    />
                </Section>
            </Content>
            <NewNote to="/newnote">
                <FiPlus />
                Criar Nota
            </NewNote>
        </ContainerHome>
    )
}