import styled, { css } from "styled-components";
import Sim from "../icons/Sim";
import ArrowUpRed from "../icons/ArrowUpRed";
import { numberWithCommas } from "../utils/utils";
import { useEffect, useState } from "react";
import Transfer from "../icons/Transfer";
import { differenceInDays, format, parse } from "date-fns";
import { useSearchParams } from "react-router-dom";
import ArrowDownGreen from "../icons/ArrowDownGreen";

const Container = styled.div`
    background-color: #f7f7f8;
    border-top: 2px solid #878fe8;
    border-radius: 12px;
    width: calc(100% - 32px);
    max-height: 60px;
    padding: 16px;
    display: flex;
    justify-content: space-between;
`;

const LeftSec = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    background-color: #fdfeff;
    border-radius: 50%;
`;

const Information = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const TransType = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: #060607;
`;

const DateSec = styled.span`
    font-size: 10px;
    font-weight: 500;
    color: #929299;
`;

const Amount = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
`;

const AmountNumber = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
    margin-right: 2px;
    font-size: 12px;
    color: #1bbc6f;
    ${(props) =>
        props.isRed &&
        css`
            color: #d21f3f;
        `}
`;

const Currency = styled.span`
    color: #929299;
    font-size: 10px;
    font-weight: 500;
`;

function TransactionItem({ item, cards, setShowModal, setClickedItem }) {
    const [icon, setIcon] = useState(null);
    const [searchParams] = useSearchParams();

    useEffect(
        function () {
            switch (item.type) {
                case "Transfer":
                    setIcon(<Transfer />);
                    return;

                case "Recharge":
                    setIcon(<Sim />);
                    return;

                default:
                    return;
            }
        },
        [item.type]
    );

    const date = parse(
        String(item.created_at),
        "hh:mm b - MMMM dd , yyyy",
        new Date()
    );

    const difference = differenceInDays(new Date(), date);

    function handleTransactionClick(id) {
        setShowModal(true);
        setClickedItem(id);
    }

    return (
        <Container
            key={item.card}
            onClick={() => handleTransactionClick(item.id)}
        >
            <LeftSec>
                <Icon>{icon}</Icon>
                <Information>
                    <TransType>{item.type}</TransType>
                    <DateSec>
                        {difference === 0
                            ? `Today , ${format(date, "hh:mm b")}`
                            : item.created_at}
                    </DateSec>
                </Information>
            </LeftSec>
            <Amount>
                <AmountNumber
                    isRed={
                        item.card ===
                        cards[
                            searchParams.get("card")
                                ? searchParams.get("card")
                                : 0
                        ].id
                    }
                >
                    {item.card ===
                    cards[
                        searchParams.get("card") ? searchParams.get("card") : 0
                    ].id ? (
                        <ArrowUpRed />
                    ) : (
                        <ArrowDownGreen />
                    )}
                    {numberWithCommas(item.amount)}
                </AmountNumber>
                <Currency>IRT</Currency>
            </Amount>
        </Container>
    );
}

export default TransactionItem;
