import NavigationBar from "../ui/NavigationBar";
import Logo from "../icons/Logo";
import styled from "styled-components";
import ProfileInfo from "../ui/ProfileInfo";
import ProfileServices from "../ui/ProfileServices";

const Container = styled.div`
    padding: 16px 16px 90px 16px;
    text-align: center;
`;

function Profile() {
    return (
        <main>
            <Container>
                <Logo />
                <ProfileInfo />
                <ProfileServices />
            </Container>
            <NavigationBar />
        </main>
    );
}

export default Profile;
