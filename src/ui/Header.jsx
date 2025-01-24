import styled, { css } from "styled-components";
import ProfileHeader from "./ProfileHeader";
import Logo from "../icons/Logo";

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${(props) => props.padding && css`
        padding: 0 16px;
    `}
`;

const Main = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

function Header({ onlyImage, icons, padding }) {
    return (
        <Container padding={padding}>
            <Main>
                <ProfileHeader onlyImage={onlyImage} />
                <Logo />
            </Main>
            <Icons>{icons.map((icon) => icon)}</Icons>
        </Container>
    );
}

export default Header;
