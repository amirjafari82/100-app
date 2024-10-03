import styled from "styled-components";
import Logo from "../ui/Logo";
import LoginTitle from "../ui/LoginTitle";
import LoginForm from "../features/authentication/LoginForm";
import { LoginProvider } from "../context/LoginContext";
import VerificationTitle from "../ui/VerificationTitle";
import VerificationCodeForm from "../features/authentication/VerificationCodeForm";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0px;
`;

function Login({ page }) {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(
        function () {
            if (isAuthenticated) navigate("/account");
        },
        [navigate, isAuthenticated]
    );

    return (
        <LoginProvider>
            <Container>
                {page === "welcome" ? (
                    <>
                        <Logo />
                        <LoginTitle />
                        <LoginForm />
                    </>
                ) : (
                    <>
                        <Logo />
                        <VerificationTitle />
                        <VerificationCodeForm length={5} />
                    </>
                )}
            </Container>
        </LoginProvider>
    );
}

export default Login;
