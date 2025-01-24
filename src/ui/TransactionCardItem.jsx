import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import BankIcon from "./BankIcon";
import { cardFormat } from "../utils/utils";
import { css } from "styled-components";
import MoreWhite from "../icons/MoreWhite";

const Item = styled.div`
    background-color: #5762df;
    border-radius: 24px;
    padding: 16px 24px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: relative;
    transition: all 0.3s ease;
    ${(props) =>
        props.isActive &&
        css`
            width: 150%;
            padding: 24px 24px;
            background-color: #0f1fd1;
        `}
`;

const BankInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const BankInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 8px;
`;

const BankName = styled.span`
    color: #ffffff;
    font-size: 12px;
    z-index: 10;
`;

const BankLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fdfeff;
    border-radius: 100%;
    width: 16px;
    height: 16px;
    z-index: 10;
`;

const CardNumberContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
    margin: 0 50px;
    z-index: 10;
`;

const CardNumber = styled.span``;

const CardOwner = styled.span`
    z-index: 10;
`;

const BigBankLogo = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;

    svg {
        opacity: 0.29;
        box-shadow: 0px 3.3px 3.96px 0px #0b34594d inset;
    }
    z-index: 1;
`;

function TransactionCardItem({ card, isActive }) {
    const [banksInfo, setBanksInfo] = useState([]);

    useEffect(
        () =>
            async function () {
                const res = await axios.get("http://127.0.0.1:8000/");
                setBanksInfo(res.data);
            },
        []
    );


    return (
        <Item isActive={isActive}>
            {banksInfo.map((bank) => {
                return (
                    card.card_number.startsWith(bank["pre-card"]) && (
                        <BankInfoContainer key={bank["pre-card"]}>
                            <>
                                <BankInfo>
                                    <BankLogo>
                                        <BankIcon bank={bank.bank} size="10" />
                                    </BankLogo>
                                    <BankName>{bank.bank} Bank</BankName>
                                </BankInfo>
                            </>
                            <MoreWhite />
                            <BigBankLogo>
                                <BankIcon bank={bank.bank} size="88" />
                            </BigBankLogo>
                        </BankInfoContainer>
                    )
                );
            })}
            <CardNumberContainer>
                {cardFormat(card.card_number, "tab").map((num) => (
                    <CardNumber key={num}>{num}</CardNumber>
                ))}
            </CardNumberContainer>
            <CardOwner>{card.owner}</CardOwner>
        </Item>
    );
}

export default TransactionCardItem;
