import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { phoneFormat } from "../utils/utils";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    position: ${(props) => props.position && props.position};
    top: 48px;
    width: 100%;
    text-align: center;
`;

const Name = styled.span`
    font-size: 16px;
    font-weight: 500;
`;

const Phone = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: #b2b2b7;
`;

function UserInfo({ position }) {
    const { user } = useUser();

    return (
        <Container position={position}>
            <Name>
                {user?.user.first_name} {user?.user.last_name}
            </Name>
            <Phone>{phoneFormat(user?.user.phone)}</Phone>
        </Container>
    );
}

export default UserInfo;
