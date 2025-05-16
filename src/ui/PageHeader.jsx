import styled from "styled-components";
import ArrowLeft from "../icons/ArrowLeft";
import Filter from "../icons/Filter";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${props => props.margin};
`;

const BackIcon = styled.div``;

const Heading = styled.h3`
    font-size: 16px;
    font-weight: 500;
`;

function PageHeader({ header, backUrl, filter, margin }) {
    const navigate = useNavigate();

    return (
        <Container margin={margin}>
            <BackIcon onClick={() => navigate(`/${backUrl}`)}>
                <ArrowLeft />
            </BackIcon>
            <Heading>{header}</Heading>
            {filter ? <Filter /> : <div></div>}
        </Container>
    );
}

export default PageHeader;
