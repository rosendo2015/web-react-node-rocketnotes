import { Logo } from "../../components/Logo";
import { Form, SignUpContainer, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TfiEmail, TfiLock } from "react-icons/tfi";

export function SignUp() {
    return (
        <SignUpContainer>
            <Background />
            <Form>
                <Logo />
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>
                    <Input
                        icon={TfiEmail}
                        placeholder="E-Mail"
                        type="email"
                    />
                    <Input
                        icon={TfiLock}
                        placeholder="Senha"
                        type="password"
                    />
                    <Input
                        icon={TfiEmail}
                        placeholder="E-Mail"
                        type="email"
                    />
                    <Input
                        icon={TfiLock}
                        placeholder="Senha"
                        type="password"
                    />
                
                <Button title="Cadastrar" />
                <a href="#">Voltar para o login</a>
            </Form>
        </SignUpContainer>
    )
}