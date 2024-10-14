import styled from "styled-components";
import ShowImages from "../features/onboarding/showImages";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 58px;
    height: 304px;
    position: relative;
`;

const StyledCircles = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledCircleSmall = styled.div`
    background-color: #878fe8;
    width: 156px;
    height: 156px;
    opacity: 0.28;
    border-radius: 100%;
    position: absolute;
`;

const StyledCircleMed = styled.div`
    background-color: #b7bbf1;
    width: 222px;
    height: 222px;
    opacity: 0.18;
    border-radius: 100%;
    position: absolute;
`;

const StyledCircleLarge = styled.div`
    background-color: #e7e8fa;
    width: 304px;
    height: 304px;
    opacity: 0.24;
    border-radius: 100%;
    position: absolute;
`;

function OnboardingElipse({ index }) {
    const { isPending: isLoadingUser, isAuthenticated } = useUser();
    const navigate = useNavigate();

    useEffect(
        function () {
            if (isAuthenticated && !isLoadingUser) navigate("/services");
        },
        [navigate, isAuthenticated, isLoadingUser]
    );
    return (
        <Container>
            <StyledCircles>
                <StyledCircleSmall />
                <StyledCircleMed />
                <StyledCircleLarge />
            </StyledCircles>
            <ShowImages index={index} />
        </Container>
    );
}

export default OnboardingElipse;
