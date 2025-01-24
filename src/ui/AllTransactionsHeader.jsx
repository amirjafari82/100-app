import styled from "styled-components";
import ArrowLeft from "../icons/ArrowLeft";
import Filter from "../icons/Filter";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 72px;
`;

const BackIcon = styled.div``;

const Heading = styled.h3`
    font-size: 16px;
    font-weight: 500;
`;

function AllTransactionsHeader() {
    const navigate = useNavigate();

    return (
        <Container>
            <BackIcon onClick={() => navigate("/transaction")}>
                <ArrowLeft />
            </BackIcon>
            <Heading>Transactions</Heading>
            <Filter />
        </Container>
    );
}

export default AllTransactionsHeader;
