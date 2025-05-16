import styled from "styled-components";
import { useGetTransactions } from "../features/transaction/useTransaction";
import { useCard } from "../features/card/useCard";
import { useSearchParams } from "react-router-dom";
import TransactionItem from "./TransactionItem";
import { useEffect } from "react";
import TransactionModal from "./TransactionModal";
import { useState } from "react";
import React from "react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 16px;
    align-items: center;
    margin-bottom: 48px;
`;

function Transactions({ ActiveCard }) {
    const { data } = useGetTransactions();
    const { data: cards, isPending: isGettingCards } = useCard();
    const [searchParams, setSearchParams] = useSearchParams();
    const [showModal, setShowModal] = useState(false);
    const [clickedItem, setClickedItem] = useState();

    useEffect(
        function () {
            if (searchParams.get("card") == undefined) {
                if (!isGettingCards) {
                    searchParams.set("card", 0);
                    setSearchParams(searchParams);
                }
            }
        },
        [isGettingCards, searchParams, setSearchParams]
    );

    return (
        <Container>
            {data?.map((item) =>
                cards[searchParams.get("card") ? searchParams.get("card") : 0]
                    .id === item.card ||
                cards[searchParams.get("card") ? searchParams.get("card") : 0]
                    .id === item.des_card ? (
                    <React.Fragment key={item.id}>
                        <TransactionItem
                            item={item}
                            key={item.id}
                            ActiveCard={ActiveCard}
                            cards={cards}
                            setShowModal={setShowModal}
                            setClickedItem={setClickedItem}
                        />
                        <TransactionModal
                            transaction={item}
                            show={showModal}
                            setShowModal={setShowModal}
                            clickedItem={clickedItem}
                        />
                    </React.Fragment>
                ) : null
            )}
        </Container>
    );
}

export default Transactions;
