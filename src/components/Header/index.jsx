import { RiShutDownLine } from "react-icons/ri";
import { HeaderContainer, LogoutContainer, ProfileContainer } from "./styles";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { useNavigate } from "react-router-dom";

export function Header() {
    const { signOut, user } = useAuth();
    const navigation = useNavigate()

    function handleSignOut() {
        navigation("/")
        signOut()
    }

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return (
        <HeaderContainer>
            <ProfileContainer to="/profile">
                <img src={avatarURL} alt="photo user" />
                <div>
                    <span>
                        Bem vindo,
                    </span>
                    <strong>
                        Francisco Rosendo
                    </strong>

                </div>
            </ProfileContainer>
            <LogoutContainer onClick={handleSignOut}>
                <RiShutDownLine size={36} />
            </LogoutContainer>
        </HeaderContainer>
    )
}