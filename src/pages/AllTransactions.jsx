import styled from "styled-components";
import AllTransactionsHeader from "../ui/AllTransactionsHeader";
import Transactions from "../ui/Transactions";

const Container = styled.div`
    padding: 24px 16px 48px 16px;
    height: 100vh;
    overflow-y: scroll;
`;

function AllTransactions() {
    return (
        <Container id="last-transactions">
            <AllTransactionsHeader />
            <Transactions />
        </Container>
    );
}

export default AllTransactions;
