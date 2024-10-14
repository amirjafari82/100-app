import { useEffect, useState } from "react";
import { useDesCard } from "../features/card/useDesCard";
import axios from "axios";
import styled, { css } from "styled-components";
import { ThreeDot } from "react-loading-indicators";
import UserFill from "../icons/UserFill";
import { cardFormat } from "../utils/utils";
import BankIcon from "./BankIcon";
import More from "../icons/More";

const LoadingContainer = styled.div`
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledCardItem = styled.div`
    background-color: #f7f7f8;
    border-top: 2px solid rgba(135, 143, 232, 0.6);
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
    gap: 16px;
    align-items: center;
`;

const MainProfileContainer = styled.div`
    position: relative;
`;

const ProfileContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    position: relative;
    background-color: #f7f7f8;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MaskContainer = styled.div`
    position: absolute;
    top: -1px;
    right: 1px;
    transform: rotate(-270deg);
    width: 39px;
    height: 40px;
    border-radius: 100%;
    background-color: rgb(135, 143, 232);
    z-index: 1;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const CardInfo = styled.div`
    font-size: 12px;
    font-weight: 600;
    color: #060607;
    display: flex;
    align-items: center;
    gap: 4px;
`;

function DesCardsItem() {
    const { data, isPending } = useDesCard();

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
                    banksInfo?.map((bank) => {
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
                                        <MainProfileContainer>
                                            <MaskContainer></MaskContainer>
                                            <ProfileContainer>
                                                <UserFill />
                                            </ProfileContainer>
                                        </MainProfileContainer>
                                        <InfoContainer>
                                            <CardInfo>
                                                {card.card_owner}
                                            </CardInfo>
                                            <CardInfo>
                                                <BankIcon
                                                    bank={bank.bank}
                                                    size="16"
                                                />
                                                {cardFormat(card.card_number)}
                                            </CardInfo>
                                        </InfoContainer>
                                    </ContentContainer>
                                )}
                                <div>
                                    <More />
                                </div>
                            </StyledCardItem>
                        );
                    })
                )
            )}
        </>
    );
}

export default DesCardsItem;
