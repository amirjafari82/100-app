import styled from "styled-components";
import User from "../icons/User";
import UserInfo from "./UserInfo";
import EditProfile from "../icons/EditProfile";
import { Outlet, useNavigate } from "react-router-dom";
import SubtractBackground from "./SubtractBackground";

const Container = styled.div`
    position: relative;
    width: fit-content;
    margin: 56px auto 0 auto;
`;

const ImageContainer = styled.div`
    width: 64px;
    height: 64px;
    background-color: #b7bbf1;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -36px;
    right: 41%;
`;

const EditIcon = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    background-color: #fdfeff;
    border-radius: 100%;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function ProfileInfo() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/profile/edit");
    }

    return (
        <Container>
            <SubtractBackground />
            <ImageContainer>
                <User size={36} />
            </ImageContainer>
            <UserInfo position={"absolute"} />
            <EditIcon onClick={handleClick}>
                <EditProfile />
            </EditIcon>
            <Outlet />
        </Container>
    );
}

export default ProfileInfo;
