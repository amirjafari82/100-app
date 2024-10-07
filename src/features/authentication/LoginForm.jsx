import Button from "../../ui/Button";
import Input from "../../ui/Input";
import styled from "styled-components";
import { useLogin } from "../../context/LoginContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./useUser";

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

function LoginForm() {
    const { phone, setPhone } = useLogin();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { isLoading, isAuthenticated } = useUser();

    useEffect(
        function () {
            if (isAuthenticated && !isLoading) navigate("/account");
        },
        [navigate, isAuthenticated, isLoading]
    );

    function handleSubmit(e) {
        e.preventDefault();
        if (!phone || phone.length !== 11) {
            setError("Please enter a valid phone number");
        } else {
            setError("");
            setPhone(phone);
            navigate("/login/verification");
        }
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
            {error && <Error>{error}</Error>}
            <Button>Continue</Button>
        </StyledForm>
    );
}

export default LoginForm;
