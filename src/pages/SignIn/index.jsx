import { Logo } from "../../components/Logo";
import { Form, SignInContainer, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TfiEmail, TfiLock } from "react-icons/tfi";

export function SignIn() {
    return (
        <SignInContainer>
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
                <Button title="Entrar" />
                <a href="#">Ciar conta</a>
            </Form>
            <Background />
        </SignInContainer>
    )
}