import styled from "styled-components";
import ArrowLeft from "../icons/ArrowLeft";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    margin-bottom: 30px;
`;

const Heading = styled.h3`
    font-size: 16px;
    font-weight: 500;
    text-align: center;
`;

const Icon = styled.div`
    float: left;
`;

function EditProfileHeader() {
    const navigate = useNavigate();

    return (
        <Container>
            <Icon onClick={() => navigate(-1)}>
                <ArrowLeft />
            </Icon>
            <Heading>Edit Profile</Heading>
        </Container>
    );
}

export default EditProfileHeader;
