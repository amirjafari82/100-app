import { HiArrowRight, HiCheck } from "react-icons/hi";
import { redirect, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Div1 = styled.div`
    border-radius: 100%;
    background-color: #0f1fd1;
    width: 64px;
    height: 64px;
    border-spacing: 10px;
    z-index: 10;
    position: absolute;
    top: 0;
`;

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 64px;
    margin-bottom: 54px;
`;

const HiArrowRight2 = styled(HiArrowRight)`
    z-index: 10;
    width: 24px !important;
    height: 24px !important;
    color: #fff;
    margin-top: 18px;
`;

const HiCheck2 = styled(HiCheck)`
    z-index: 10;
    width: 24px !important;
    height: 24px !important;
    color: #fff;
    margin-top: 18px;
`;

function OnboardingNextButton({ setIndex, index }) {
    const navigate = useNavigate();

    return (
        <Container
            onClick={() => {
                index !== 2 ? setIndex((i) => i + 1) : navigate("/login");
            }}
        >
            <Div1></Div1>
            {index !== 2 ? <HiArrowRight2 /> : <HiCheck2 />}
        </Container>
    );
}

export default OnboardingNextButton;
