import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Avatar, FormContainer, ProfileContainer } from "./styles";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Profile() {
    return (
        <ProfileContainer>

            <header>
                <a href="/">
                    <FiArrowLeft />
                </a>
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
                />
                <Input
                    placeholder="E=Mail"
                    type="text"
                    icon={FiMail}
                />
                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />
                <Input
                    placeholder="Nova Senha"
                    type="password"
                    icon={FiLock}
                />
                <Button title="Salvar" />
            </FormContainer>
        </ProfileContainer>
    )
};
