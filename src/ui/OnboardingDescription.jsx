import styled from "styled-components";

const Container = styled.div`
    text-align: center;
`;

const Heading = styled.h1`
    font-size: 20px;
    font-weight: 600;
    color: #060607;
    margin-top: 46px;
`;

const P = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: #556061;
    width: 268px;
    margin: 16px auto;
`;

function OnboardingDescription({ index }) {
    const desc = [
        {
            title: "Secure And Trusted Bank",
            desc: "Our banking system is working every day to improve security structures to protect your important information so that you can do your financial work safely.",
        },
        {
            title: "Fast And Accesible",
            desc: "Due to the simple and convenient design of the app and its quick reaction, you can easily meet your financial needs in any situation and place",
        },
        {
            title: "Developed Banking",
            desc: "By maintaining the simplicity of the app, we are trying to improve the features and usability of the app in line with the advancement of technology",
        },
    ];

    return (
        <Container>
            <Heading as="h1">{desc[index].title}</Heading>
            <P>{desc[index].desc}</P>
        </Container>
    );
}

export default OnboardingDescription;
