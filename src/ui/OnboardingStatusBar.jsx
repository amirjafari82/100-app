import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 2px;
    align-items: center;
    justify-content: center;
    margin-top: 56px;
`;

const Status = styled.div`
    width: 4px;
    height: 4px;
    background-color: #b2b2b7;
    border-radius: 100%;
    transition: all 0.3s ease;

    &.active {
        width: 12px;
        background-color: #0f1fd1;
        border-radius: 2px;
    }
`;

function OnboardingStatusBar({ index }) {
    const divs = Array.from({ length: 3 }, (x, i) => i);

    return (
        <Container>
            {divs.map((div, i) => (
                <Status key={i} className={index === i && "active"} />
            ))}
        </Container>
    );
}

export default OnboardingStatusBar;
