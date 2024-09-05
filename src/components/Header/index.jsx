import { RiShutDownLine } from "react-icons/ri";
import { HeaderContainer, LogoutContainer, ProfileContainer } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <ProfileContainer to="/profile">
                <img src="https://github.com/rosendo2015.png" alt="photo user" />
                <div>
                    <span>
                        Bem vindo,
                    </span>
                    <strong>
                        Francisco Rosendo
                    </strong>

                </div>
            </ProfileContainer>
            <LogoutContainer>
                <RiShutDownLine size={36}/>
            </LogoutContainer>
        </HeaderContainer>
    )
}