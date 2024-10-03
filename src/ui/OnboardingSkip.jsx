import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSkip = styled.div`
    text-align: right;
    margin: 32px 15px;
`;

const StyledLink = styled(Link)`
    color: #929299;
    text-decoration: none;
`;

function OnboardingSkip() {
    return (
        <StyledSkip onClick={null}>
            <StyledLink to="/login">Skip</StyledLink>
        </StyledSkip>
    );
}

export default OnboardingSkip;
