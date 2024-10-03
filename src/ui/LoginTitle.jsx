import styled from "styled-components";

export const Section = styled.div`
    margin-top: 112px;
    text-align: center;
    margin-bottom: 72px;
`;

export const Heading = styled.h1`
    margin-bottom: 16px;
    font-size: 20px;
`;

export const WelcomeConatainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    width: fit-content;
    margin: 0 auto;
`;

const WelcomeSVG = styled.img`
    position: absolute;
    right: -34px;
    bottom: 20px;
`;

export const P = styled.p`
    color: #b2b2b7;
`;

function LoginTitle() {
    return (
        <Section>
            <WelcomeConatainer>
                <Heading>Welcome</Heading>
                <WelcomeSVG src="/welcome.svg" alt="" />
            </WelcomeConatainer>
            <P>Please enter your mobile phone number</P>
        </Section>
    );
}

export default LoginTitle;
