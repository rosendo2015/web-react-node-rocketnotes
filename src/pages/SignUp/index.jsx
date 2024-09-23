import { Logo } from "../../components/Logo";
import { Form, SignUpContainer, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api"
import { useState } from "react";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos");
            navigate("/")
        }
        api.post("/users", {
            name, email, password
        }).then(() => {
            alert("Usuário cadastrado com sucesso.")
        }).catch(error => {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("não foi possível cadastrar")
            }
        })

    }

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
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    icon={FiMail}
                    placeholder="E-Mail"
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    icon={FiLock}
                    placeholder="Senha"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />

                <Button
                    title="Cadastrar"
                    onClick={handleSignUp}
                />
                <Link to="/">Voltar para o login</Link>
            </Form>
        </SignUpContainer>
    )
}