import { useEffect, useState } from "react";
import { useCard } from "../features/card/useCard";
import axios from "axios";
import styled, { css } from "styled-components";
import { ThreeDot } from "react-loading-indicators";
import BankIcon from "./BankIcon";
import More from "../icons/More";
import { cardFormat } from "../utils/utils";

const LoadingContainer = styled.div`
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledCardItem = styled.div`
    background-color: #f7f7f8;
    border-top: 2px solid rgba(135, 143, 232, 0.7);
    border-radius: 12px;
    padding: 18px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${(props) =>
        !props.isRendered &&
        css`
            display: none;
        `}
`;

const ContentContainer = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fdfeff;
    border-radius: 100%;
    width: 40px;
    height: 40px;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const CardInfo = styled.span`
    font-size: 12px;
    font-weight: 600;
    color: #060607;
`;

const MoreIcon = styled.div``;

function MyCardsItem() {
    const [banksInfo, setBanksInfo] = useState([]);
    const { data, isPending } = useCard();

    useEffect(
        () =>
            async function () {
                const res = await axios.get("http://127.0.0.1:8000/");
                setBanksInfo(res.data);
            },
        []
    );
    return (
        <>
            {isPending ? (
                <LoadingContainer>
                    <ThreeDot
                        color="#2735d6"
                        size="large"
                        text=""
                        textColor=""
                    />
                </LoadingContainer>
            ) : (
                data?.map((card) =>
                    banksInfo.map((bank) => {
                        return (
                            <StyledCardItem
                                key={bank["pre-card"]}
                                isRendered={card.card_number.startsWith(
                                    bank["pre-card"]
                                )}
                            >
                                {card.card_number.startsWith(
                                    bank["pre-card"]
                                ) && (
                                    <ContentContainer>
                                        <LogoContainer>
                                            <BankIcon bank={bank.bank} size="24" />
                                        </LogoContainer>
                                        <InfoContainer>
                                            <CardInfo>
                                                {bank.bank} Bank
                                            </CardInfo>
                                            <CardInfo>
                                                {cardFormat(card.card_number)}
                                            </CardInfo>
                                        </InfoContainer>
                                    </ContentContainer>
                                )}
                                <MoreIcon>
                                    <More />
                                </MoreIcon>
                            </StyledCardItem>
                        );
                    })
                )
            )}
        </>
    );
}

export default MyCardsItem;
