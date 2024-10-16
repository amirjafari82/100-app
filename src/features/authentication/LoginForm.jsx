import Button from "../../ui/Button";
import Input from "../../ui/Input";
import styled from "styled-components";
import { useLogin } from "../../context/LoginContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./useUser";
import { getRandomCode } from "../../utils/utils";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 60vh;
    position: relative;
`;

const Error = styled.p`
    color: #ff3f32;
    position: absolute;
    top: 60px;
`;

function LoginForm({ code, setCode }) {
    const { phone, setPhone } = useLogin();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { isPending, isAuthenticated } = useUser();

    useEffect(
        function () {
            if (isAuthenticated && !isPending) navigate("/services");
        },
        [navigate, isAuthenticated, isPending]
    );

    function handleSubmit(e) {
        e.preventDefault();
        if (!phone || phone.length !== 11) {
            setError("Please enter a valid phone number");
        } else {
            setError("");
            setPhone(phone);
            setCode(getRandomCode(10000, 99999));
            navigate("/login/verification");
        }
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                isError={error === "" ? false : true}
            />
            {error && <Error>{error}</Error>}
            <Button>Continue</Button>
        </StyledForm>
    );
}

export default LoginForm;
