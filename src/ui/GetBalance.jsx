import styled from "styled-components";
import GreenLight from "../icons/GreenLight";
import SuccessfulStatus from "../icons/SuccessfulStatus";
import { format } from "date-fns";
import { useCard } from "../features/card/useCard";
import { cardFormat, numberWithCommas } from "../utils/utils";
import Upload from "../icons/Upload";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Container = styled.div`
    margin: 80px 12px;
    box-shadow: 0 4px 16px 0 #0f194f14;
    border-radius: 24px;
    padding: 0px 16px 16px;
`;

const TransactionStatus = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const Status = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;

const StatusLogo = styled.div``;

const Type = styled.h3`
    margin-top: -20px;
    font-size: 16px;
    font-weight: 600;
`;

const Inforamtions = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 72px;
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

const Heading = styled.h2`
    text-align: center;
    margin: 24px 0px 32px;
`;

const Unit = styled.span`
    color: #929299;
    font-size: 10px;
    font-weight: 500;
    margin-left: 4px;
`;

const Border = styled.div`
    border-bottom: 1px dashed rgba(208, 208, 211, 1);
    width: 108%;
    margin-left: -15px;
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

function GetBalance({ balance, searchParams, setSearchParams }) {
    const date = format(new Date(), "hh:mm b - MMMM dd , yyyy");
    const { data: cards, isPending: isGettingCards } = useCard();
    const navigate = useNavigate();

    const card =
        !isGettingCards &&
        cards[searchParams.get("card") ? searchParams.get("card") : 0];

    // useEffect(() => {
    //     //  if (balance == "") {
    //     //     setSearchParams((state) => {
    //     //         state.delete("status");

    //     //         return state;
    //     //     });

    //     // }
    //     navigate("/balance?card=0");
    // }, [balance, navigate, setSearchParams]);

    if (balance == "") return;

    return (
        <>
            <Heading>Reciept</Heading>

            <Container>
                <Status>
                    <StatusLogo>
                        <SuccessfulStatus />
                    </StatusLogo>
                    <Type>Balance</Type>
                </Status>
                <Inforamtions>
                    <Row>
                        <Name>Date and Time</Name>
                        <Data>{date}</Data>
                    </Row>
                    <Row>
                        <Name>From</Name>
                        <Data>{cardFormat(card?.card_number)}</Data>
                    </Row>
                    <Row>
                        <Name>Status</Name>
                        <Data>
                            <TransactionStatus>
                                <GreenLight />
                                Success
                            </TransactionStatus>
                        </Data>
                    </Row>
                    <Row>
                        <Name>Balance</Name>
                        <Data>
                            {numberWithCommas(balance)}
                            <Unit>IRT</Unit>
                        </Data>
                    </Row>
                </Inforamtions>
                <Border />
                <Buttons>
                    <ShareButton>
                        Share to
                        <Upload />
                    </ShareButton>
                    <Button onClick={() => navigate("/transaction")}>
                        Back to home
                    </Button>
                </Buttons>
            </Container>
        </>
    );
}

export default GetBalance;
