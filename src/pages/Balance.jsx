import styled from "styled-components";
import PageHeader from "../ui/PageHeader";
import BalanceForm from "../ui/BalanceForm";
import { useNavigate, useSearchParams } from "react-router-dom";
import GetBalance from "../ui/GetBalance";
import { useEffect, useState } from "react";

const Container = styled.div`
    padding: 24px 16px 48px 16px;
    height: 100vh;
    overflow-y: scroll;
`;

const Warning = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: #b2b2b7;
    text-align: center;
`;

function Balance() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [balance, setBalance] = useState("");
    const navigate = useNavigate();

    const success = searchParams.get("status") === "success";

    useEffect(() => {
        console.log(balance);
        if (balance == "") {
            searchParams.delete("status");
            setSearchParams(searchParams);
        }
    }, [balance, navigate, setSearchParams, searchParams]);

    return (
        <>
            {!success ? (
                <Container id="balance">
                    <PageHeader
                        {...{
                            header: "Balance",
                            backUrl: "transaction?card=0",
                            filter: false,
                            margin: "0px 0px 28px 0px",
                        }}
                    />
                    <Warning>
                        The fee for balance inquiry operstion is 1,440 IRR.
                    </Warning>
                    <BalanceForm {...{ setBalance }} />
                </Container>
            ) : (
                <GetBalance
                    {...{ balance, setBalance, searchParams, setSearchParams }}
                />
            )}
        </>
    );
}

export default Balance;
