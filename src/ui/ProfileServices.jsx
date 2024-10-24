import styled from "styled-components";
import Notification from "../icons/Notification";
import Star from "../icons/Star";
import Support from "../icons/Support";
import Privacy from "../icons/Privacy";
import About from "../icons/About";
import Logout from "../icons/Logout";
import { useLogout } from "../features/authentication/useLogout";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
`;

const ItemSection = styled.div`
    background-color: #f7f7f8;
    border-radius: 20px;
    padding: 12px 16px;
    width: calc(100% - 64px);
`;

const Border = styled.div`
    width: 91%;
    height: 1px;
    background-color: #efeff0;
    margin: 12px 0px;
`;

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fdfeff;
    border-radius: 50%;
    padding: 8px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
`;

const ItemText = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: #060607;
`;

function ProfileServices() {
    const { logout } = useLogout();

    function handleLogout() {
        logout();
    }

    return (
        <Container>
            <ItemSection>
                <Item>
                    <Icon>
                        <Notification />
                    </Icon>
                    <ItemText>Notifications</ItemText>
                </Item>
                <Border />
                <Item>
                    <Icon>
                        <Star />
                    </Icon>
                    <ItemText>Lottery</ItemText>
                </Item>
            </ItemSection>
            <ItemSection>
                <Item>
                    <Icon>
                        <Support />
                    </Icon>
                    <ItemText>Support</ItemText>
                </Item>
                <Border />
                <Item>
                    <Icon>
                        <Privacy />
                    </Icon>
                    <ItemText>Privacy Policy</ItemText>
                </Item>
                <Border />
                <Item>
                    <Icon>
                        <About />
                    </Icon>
                    <ItemText>About Us</ItemText>
                </Item>
            </ItemSection>
            <ItemSection>
                <Item onClick={handleLogout}>
                    <Icon>
                        <Logout />
                    </Icon>
                    <ItemText>Log Out</ItemText>
                </Item>
            </ItemSection>
        </Container>
    );
}

export default ProfileServices;
