import styled from "styled-components";
import Balance2 from "../icons/Balance2";
import Transfer2 from "../icons/Transfer2";
import TopUp from "../icons/TopUp";
import AddCard from "../icons/AddCard";
import OperationItem from "./OperationItem";

const Container = styled.div`
    margin-top: 27px;
    display: flex;
    gap: 32px;
    justify-content: center;
    align-items: center;
`;

function TransactionOperations() {
    const items = [
        {
            name: "Balance",
            icon: <Balance2 />,
            url: 'balance'
        },
        {
            name: "Transfer",
            icon: <Transfer2 />,
        },
        {
            name: "Top up",
            icon: <TopUp />,
        },
        {
            name: "Add",
            icon: <AddCard />,
        },
    ];

    return (
        <Container>
            {items.map((item) => (
                <OperationItem item={item} key={item.name} />
            ))}
        </Container>
    );
}

export default TransactionOperations;
