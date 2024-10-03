import { useLogin } from "../context/LoginContext";
import { Heading, P, Section, WelcomeConatainer } from "./LoginTitle";

function VerificationTitle() {
    const { phone } = useLogin();
    return (
        <Section>
            <WelcomeConatainer>
                <Heading>Verification Code</Heading>
            </WelcomeConatainer>
            <P> Please enter the code sent to {phone} </P>
        </Section>
    );
}

export default VerificationTitle;
