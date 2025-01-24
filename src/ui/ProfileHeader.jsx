import { useUser } from "../features/authentication/useUser";
import styled from "styled-components";
import User from "../icons/User";

const Container = styled.div`
    display: flex;
    gap: 4px;
    flex-basis: 150px;
`;

const ImageContainer = styled.div`
    width: 40px;
    height: 40px;
    background-color: #b7bbf1;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const UserImage = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 100%;
`;

const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Username = styled.p`
    font-size: 12px;
`;

const Welcome = styled.span`
    font-size: 8px;
    font-weight: 600;
    color: #929299;
`;

function ProfileHeader({ onlyImage }) {
    const { user } = useUser();

    return (
        <Container>
            <ImageContainer>
                {user?.user.image ? (
                    <UserImage
                        src={`http://127.0.0.1:8000${user?.user.image}`}
                    />
                ) : (
                    <User />
                )}
            </ImageContainer>
            {!onlyImage && (
                <UserContainer>
                    <Username>Hi {user.user.first_name}!</Username>
                    <Welcome>Good to See You!</Welcome>
                </UserContainer>
            )}
        </Container>
    );
}

export default ProfileHeader;
