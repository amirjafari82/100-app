import styled from "styled-components";
import HeadingContainer from "./HeadingContainer";
import { useCard } from "../features/card/useCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import Transactions from "./Transactions";

const Container = styled.div`
    margin-top: 27px;
`;

function LastTransactions({ ActiveCard }) {
    const { isPending: isGettingCards } = useCard();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    function handleViewAll(index) {
        navigate(`/transaction/all?card=${index}`);
    }

    return (
        <Container id='last-transactions'>
            <HeadingContainer
                title={"Last Transactions"}
                onClick={() => handleViewAll(searchParams.get("card"))}
            />
            {isGettingCards ? (
                "Loading"
            ) : (
                <Transactions ActiveCard={ActiveCard} />
            )}
        </Container>
    );
}

export default LastTransactions;
