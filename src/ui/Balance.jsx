import styled from "styled-components";
import Mask from "./Mask";
import BalanceAmount from "./BalanceAmount";
import BalanceOperations from "./BalanceOperations";

const Container = styled.div`
    background-color: #2735d6;
    margin-top: 24px;
    border-radius: 16px;
    position: relative;
    overflow: hidden;
    padding: 16px 14px 14px;
    text-align: center;
    z-index: 100;
`;

const BalanceTitle = styled.p`
    font-size: 12px;
    color: #fdfeff;
`;

function Balance() {
    return (
        <Container>
            <Mask />
            <BalanceTitle>Current Balance</BalanceTitle>
            <BalanceAmount />
            <BalanceOperations />
        </Container>
    );
}

export default Balance;
