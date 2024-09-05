import { Logo } from "../../components/Logo";
import { Form, SignUpContainer, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

export function SignUp() {
    return (
        <SignUpContainer>
            <Background />
            <Form>
                <Logo />
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>
                <Input
                    icon={FiUser}
                    placeholder="Nome"
                    type="text"
                />
                <Input
                    icon={FiMail}
                    placeholder="E-Mail"
                    type="email"
                />
                <Input
                    icon={FiLock}
                    placeholder="Senha"
                    type="password"
                />

                <Button title="Cadastrar" />
                <Link to="/">Voltar para o login</Link>
            </Form>
        </SignUpContainer>
    )
}