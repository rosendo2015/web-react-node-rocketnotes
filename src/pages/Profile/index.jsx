import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Avatar, FormContainer, ProfileContainer } from "./styles";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function Profile() {
    const {user} = useAuth()
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()
    
    return (
        <ProfileContainer>

            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>
            <FormContainer>
                <Avatar>
                    <img
                        src="https://github.com/rosendo2015.png"
                        alt="photo user"
                    />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input
                            id="avatar"
                            type="file"
                        />
                    </label>
                </Avatar>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    placeholder="E=Mail"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}

                />
                <Input
                    placeholder="Nova Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}

                />
                <Button title="Salvar" />
            </FormContainer>
        </ProfileContainer>
    )
};
