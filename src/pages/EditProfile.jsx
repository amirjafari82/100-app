import styled from "styled-components";
import EditProfileHeader from "../ui/EditProfileHeader";
import EditProfileForm from "../ui/EditProfileForm";

const Container = styled.div`
    padding: 16px 24px;
`;

function EditProfile() {
    return (
        <Container>
            <EditProfileHeader />
            <EditProfileForm />
        </Container>
    );
}

export default EditProfile;
