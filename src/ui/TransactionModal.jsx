import styled, { css, keyframes } from "styled-components";
import { useEffect } from "react";
import ArrowDown2 from "../icons/ArrowDown2";
import FaildStatus from "../icons/FaildStatus";
import SuccessfulStatus from "../icons/SuccessfulStatus";
import { cardFormat, numberWithCommas, phoneFormat } from "../utils/utils";
import { useCard } from "../features/card/useCard";
import GreenLight from "../icons/GreenLight";
import RedLight from "../icons/RedLight";
import Upload from "../icons/Upload";
import Repeat from "../icons/Repeat";

const Main = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    bottom: 0;
    background-color: rgba(6, 6, 7, 0.48);
`;

const openSlide = keyframes`
    0% {
        transform: translateY(100%);
    }

    100% {
        transform: translateY(0);
    }
`;

const Container = styled.div`
    width: calc(100% - 32px);
    height: 100%;
    background-color: #fdfeff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 8px;
    padding: 0 16px;
    clip-path: polygon(
        50% 2.766%,
        50% 2.766%,
        50.731% 2.738%,
        51.431% 2.657%,
        52.092% 2.526%,
        52.706% 2.35%,
        53.268% 2.132%,
        53.768% 1.876%,
        54.202% 1.586%,
        54.561% 1.266%,
        54.838% 0.919%,
        55.027% 0.55%,
        55.027% 0.55%,
        55.07% 0.462%,
        55.133% 0.378%,
        55.213% 0.299%,
        55.309% 0.227%,
        55.42% 0.163%,
        55.545% 0.107%,
        55.682% 0.062%,
        55.83% 0.028%,
        55.988% 0.007%,
        56.154% 0%,
        93.846% 0%,
        93.846% 0%,
        94.844% 0.043%,
        95.791% 0.169%,
        96.674% 0.371%,
        97.481% 0.64%,
        98.198% 0.972%,
        98.813% 1.359%,
        99.313% 1.794%,
        99.686% 2.27%,
        99.919% 2.781%,
        100% 3.32%,
        100% 100%,
        0% 100%,
        0% 3.32%,
        0% 3.32%,
        0.081% 2.781%,
        0.314% 2.27%,
        0.687% 1.794%,
        1.187% 1.359%,
        1.802% 0.972%,
        2.519% 0.64%,
        3.326% 0.371%,
        4.209% 0.169%,
        5.156% 0.043%,
        6.154% 0%,
        43.846% 0%,
        43.846% 0%,
        44.012% 0.007%,
        44.17% 0.028%,
        44.318% 0.062%,
        44.455% 0.107%,
        44.58% 0.163%,
        44.691% 0.227%,
        44.787% 0.299%,
        44.867% 0.378%,
        44.93% 0.462%,
        44.973% 0.55%,
        44.973% 0.55%,
        45.162% 0.919%,
        45.439% 1.266%,
        45.798% 1.586%,
        46.232% 1.876%,
        46.733% 2.132%,
        47.294% 2.35%,
        47.908% 2.526%,
        48.569% 2.657%,
        49.269% 2.738%,
        50% 2.766%
    );
`;

const Content = styled.div`
    display: block;
    ${(props) =>
        props.isActive
            ? css`
                  animation: ${openSlide} 0.7s ease forwards;
              `
            : css`
                  transform: translateY(100%);
                  transition: all 0.7s ease;
              `}
    height: 93vh;
    width: 100vw;
    position: absolute;
    bottom: -8px;
    z-index: 100;
`;

const Content2 = styled.div`
    width: auto;
    height: auto;
    position: relative;
`;

const DropIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: calc((100% / 2) - 16px);
    top: calc((100% / 2) - 14px);
    justify-content: center;
    background-color: #fdfeff;
    width: fit-content;
    margin: 0 auto;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    z-index: 999;
`;

const TopContainer = styled.div`
    box-shadow: 0px 4px 16px 0px #0f194f14;
    padding: 0px 16px 42px 16px;
    border-radius: 32px;
    margin-top: 100px;
`;

const Status = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;

const StatusLogo = styled.div``;

const Type = styled.span`
    font-size: 12px;
    font-weight: 600;
`;

const AmountMoney = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
`;

const Amount = styled.span`
    font-size: 12px;
    font-weight: 500;
`;

const Currency = styled.span`
    font-size: 10px;
    font-weight: 500;
    color: #929299;
`;

const Inforamtions = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 72px;
`;

const Border = styled.div`
    border-bottom: 1px dashed rgba(208, 208, 211, 1);
    width: 108%;
    margin-left: -15px;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Name = styled.span`
    color: #929299;
    font-size: 10px;
    font-weight: 500;
`;

const Data = styled.span`
    font-weight: 500;
    color: #060607;
    font-size: 10px;
`;

const TransactionStatus = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-top: 42px;
`;

const ShareButton = styled.button`
    border: 1px solid #0f1fd1;
    color: #0f1fd1;
    font-size: 12px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 16px 0px;
    background-color: transparent;
    border-radius: 12px;
    flex: 1;
`;

const Button = styled.button`
    color: #fdfeff;
    font-size: 12px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 16px 0px;
    border: none;
    background-color: #0f1fd1;
    border-radius: 12px;
    flex: 1;
`;

const RepeatButton = styled.button`
    border: 1px solid #0f1fd1;
    color: #0f1fd1;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 12px 0px;
    background-color: transparent;
    border-radius: 12px;
`;

function TransactionModal({ transaction, show, setShowModal, clickedItem }) {
    useEffect(
        function () {
            const body = document.getElementsByTagName("body");
            body[0].style.height = "100%";
            body[0].style.margin = "0";
            body[0].style.overflow = "hidden";
        },
        [show]
    );

    return (
        <>
            {clickedItem === transaction.id && show && (
                <>
                    <Main />
                    <Content isActive={show}>
                        <Content2>
                            <DropIcon onClick={() => setShowModal(false)}>
                                <ArrowDown2 />
                            </DropIcon>
                        </Content2>
                        <Container>
                            <TopContainer>
                                <Status>
                                    <StatusLogo>
                                        {transaction.status === "Successful" ? (
                                            <SuccessfulStatus />
                                        ) : (
                                            <FaildStatus />
                                        )}
                                    </StatusLogo>
                                    <Type>{transaction.type}</Type>
                                    <AmountMoney>
                                        <Amount>
                                            {numberWithCommas(
                                                transaction.amount
                                            )}
                                        </Amount>
                                        <Currency>IRT</Currency>
                                    </AmountMoney>
                                </Status>
                                <Inforamtions>
                                    <Row>
                                        <Name>Date and Time</Name>
                                        <Data>{transaction.created_at}</Data>
                                    </Row>
                                    <Row>
                                        <Name>From</Name>
                                        <Data>
                                            {cardFormat(
                                                transaction.from_card_num
                                            )}
                                        </Data>
                                    </Row>
                                    {transaction.type === "Transfer" && (
                                        <Row>
                                            <Name>To</Name>
                                            <Data>
                                                {cardFormat(
                                                    transaction.des_card_num
                                                )}
                                            </Data>
                                        </Row>
                                    )}
                                    <Row>
                                        <Name>Status</Name>
                                        <Data>
                                            {transaction.status ===
                                            "Successful" ? (
                                                <TransactionStatus>
                                                    <GreenLight />
                                                    Success
                                                </TransactionStatus>
                                            ) : (
                                                <TransactionStatus>
                                                    <RedLight />
                                                    Failed
                                                </TransactionStatus>
                                            )}
                                        </Data>
                                    </Row>
                                    {transaction.type === "Recharge" && (
                                        <Row>
                                            <Name>Number</Name>
                                            <Data>
                                                {phoneFormat(
                                                    transaction.number
                                                )}
                                            </Data>
                                        </Row>
                                    )}
                                    <Row>
                                        <Name>Issue Tracking</Name>
                                        <Data>
                                            {transaction.issue_tracking}
                                        </Data>
                                    </Row>
                                    <Row>
                                        <Name>Refrence No</Name>
                                        <Data>
                                            {transaction.refrence_number}
                                        </Data>
                                    </Row>
                                </Inforamtions>
                                <Border />
                                <Buttons>
                                    <ShareButton>
                                        Share to
                                        <Upload />
                                    </ShareButton>
                                    <Button>Back to home</Button>
                                </Buttons>
                            </TopContainer>
                            <RepeatButton>
                                Repeat Transaction
                                <Repeat />
                            </RepeatButton>
                        </Container>
                    </Content>
                </>
            )}
        </>
    );
}

export default TransactionModal;
