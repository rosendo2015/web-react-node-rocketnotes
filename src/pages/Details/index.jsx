import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ContainerDetails, LinksContainer } from "./styles";

export function Details() {
  return (
    <ContainerDetails>
      <Header />
      <ButtonText title = "Excluir nota"/>
      <Section title="Links Úteis">
        <LinksContainer>
        <li><a href="#">www.rocketseat.com.br</a></li>
        <li><a href="#">www.google.com</a></li>
        <li><a href="#">www.aromaro.com.br</a></li>
        </LinksContainer>
      </Section>
      <Section title="Marcadores">
        <Tag title="React"/>
        <Tag title="Express"/>
        <Tag title="Node"/>
      </Section>
      <Button title="Voltar"/>
      
    </ContainerDetails>
  )
}


