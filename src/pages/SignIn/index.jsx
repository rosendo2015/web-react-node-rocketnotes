import { Logo } from "../../components/Logo";
import { Form, SignInContainer, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TfiEmail, TfiLock } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { signIn } = useAuth()

    function handleSignIn() {
        signIn({email, password})
    }

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
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    icon={TfiLock}
                    placeholder="Senha"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <Button
                    title="Entrar"
                    onClick={handleSignIn}
                />
                <Link to="/register">Ciar conta</Link>
            </Form>
            <Background />
        </SignInContainer>
    )
}