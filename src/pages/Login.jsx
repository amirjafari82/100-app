import styled from "styled-components";
import { LoginProvider } from "../context/LoginContext";
import LoginForm from "../features/authentication/LoginForm";
import VerificationCodeForm from "../features/authentication/VerificationCodeForm";
import LoginTitle from "../ui/LoginTitle";
import Logo from "../ui/Logo";
import VerificationTitle from "../ui/VerificationTitle";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0px;
`;

function Login({ page }) {

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
