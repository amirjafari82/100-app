import { HiCheck } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ArrowRight from "../icons/ArrowRight";
import Check from "../icons/Check";

const Div1 = styled.div`
    border-radius: 100%;
    background-color: #0f1fd1;
    width: 64px;
    height: 64px;
    border-spacing: 10px;
    z-index: 10;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
`;

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 64px;
    margin-bottom: 54px;
    cursor: pointer;
`;

const Icon = styled.div`
    z-index: 100;
    margin-top: 4px;
`;

function OnboardingNextButton({ setIndex, index }) {
    const navigate = useNavigate();

    return (
        <Container
            onClick={() => {
                index !== 2 ? setIndex((i) => i + 1) : navigate("/login");
            }}
        >
            <Div1>
                {index !== 2 ? (
                    <Icon>
                        <ArrowRight />
                    </Icon>
                ) : (
                    <Icon>
                        <Check />
                    </Icon>
                )}
            </Div1>
        </Container>
    );
}

export default OnboardingNextButton;
