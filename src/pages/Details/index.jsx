import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ContainerDetails, ContentContainer, LinksContainer } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Details() {
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()
  function handleBack() {
    navigate(-1)
  }


  async function handleRemoveNote() {
    const confirm = window.confirm("Apagar a nota?")
    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fetchNote()

  }, [])

  return (
    <ContainerDetails>
      <Header />
      {
        data &&
        <main>
          <ContentContainer>
            <ButtonText
              title="Excluir nota"
              onClick={handleRemoveNote}
            />
            <h1>
              {data.title}
            </h1>
            <p>
              {data.description}
            </p>
            {
              data.links &&
              <Section title="Links Úteis">
                <LinksContainer>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank">
                          {data.url}
                        </a>
                      </li>
                    ))
                  }
                </LinksContainer>
              </Section>
            }
            {
              data.tags.length > 0 &&
              <Section title="Marcadores">
                {
                  data.tags.map(
                    tag => (
                      <Tag
                        key={String(tag.id)}
                        title={tag.name}
                      />
                    ))
                }
              </Section>
            }
            <Button
              title="Voltar"
              onClick={handleBack}
            />
          </ContentContainer>
        </main>
      }
    </ContainerDetails>
  )
}


