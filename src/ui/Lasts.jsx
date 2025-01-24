import styled from "styled-components";
import LastSends from "./LastSends";
import LastTransactions from "./LastTransactions";

const Container = styled.div`
    background-color: #fdfeff;
    border-radius: 24px 24px 0px 0px;
    padding: 32px 16px 96px 16px;
    margin-top: 30px;
    height: auto;
`;

function Lasts({ ActiveCard }) {
    return (
        <Container>
            <LastSends />
            <LastTransactions ActiveCard={ActiveCard} />
        </Container>
    );
}

export default Lasts;
