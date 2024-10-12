import styled from "styled-components";
import { LoginProvider } from "../context/LoginContext";
import LoginForm from "../features/authentication/LoginForm";
import VerificationCodeForm from "../features/authentication/VerificationCodeForm";
import LoginTitle from "../ui/LoginTitle";
import VerificationTitle from "../ui/VerificationTitle";
import { useCode } from "../features/authentication/useCode";
import Logo from "../icons/Logo";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0px;
`;

function Login({ page }) {
    const { code, setCode } = useCode();

    return (
        <LoginProvider>
            <Container>
                {page === "welcome" ? (
                    <>
                        <Logo />
                        <LoginTitle />
                        <LoginForm code={code} setCode={setCode} />
                    </>
                ) : (
                    <>
                        <Logo />
                        <VerificationTitle />
                        <VerificationCodeForm
                            length={5}
                            code={code}
                            setCode={setCode}
                        />
                    </>
                )}
            </Container>
        </LoginProvider>
    );
}

export default Login;
