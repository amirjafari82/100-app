import styled from "styled-components";
import ProfileHeader from "./ProfileHeader";
import Notification from "../icons/Notification";
import Logo from "../icons/Logo";

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Main = styled.div`
    display: flex;
    gap: 80px;
    align-items: center;
`;

function Header() {
    return (
        <Container>
            <Main>
                <ProfileHeader />
                <Logo />
            </Main>
            <Notification />
        </Container>
    );
}

export default Header;
