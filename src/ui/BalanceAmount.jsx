import axios from "axios";
import { useRef, useState } from "react";
import { ThreeDot } from "react-loading-indicators";
import styled, { css } from "styled-components";
import { useUser } from "../features/authentication/useUser";
import ArrowDown from "../icons/ArrowDown";
import { numberWithCommas } from "../utils/utils";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top: 8px;
`;

const Money = styled.span`
    font-weight: 500;
    color: #fdfeff;
`;

const Currency = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #fdfeff;
    gap: 2px;
    z-index: 999;
    position: relative;
`;

const CurrencyMenu = styled.div`
    position: absolute;
    background-color: #fdfeff;
    color: #000000;
    border-radius: 8px;
    padding: 4px 8px;
    top: 16px;
    ${(props) =>
        !props.isOpen &&
        css`
            display: none;
        `}
`;

function BalanceAmount() {
    const [currency, setCurrency] = useState("IRT");
    const [isOpen, setIsOpen] = useState(false);
    const [usdRate, setUsdRate] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useUser();
    const ref = useRef();
    const money = user.balance;

    function handleClick() {
        setIsOpen((open) => !open);
    }

    async function handleCurrency() {
        setCurrency(ref.current.innerText);
        if (ref.current.innerText === "USD") {
            setIsLoading(true);
            const res = await axios.get(
                "https://api.navasan.tech/latest/?api_key=freeuTL7BHgiJ9ygl0cB1W2Qm9NP9BBU",
                { withCredentials: false }
            );
            const rate = res.data["usd_sell"].value;
            const usd = (user.balance / rate).toFixed(2);
            setUsdRate(usd);
            setIsLoading(false);
        }
    }

    return (
        <Container>
            <Money>
                {isLoading ? (
                    <ThreeDot
                        color="#ffffff"
                        size="small"
                        text=""
                        textColor=""
                    />
                ) : currency === "IRT" ? (
                    `${numberWithCommas(money)}T`
                ) : (
                    `$${numberWithCommas(usdRate)}`
                )}
            </Money>
            <Currency onClick={handleClick}>
                {currency}
                <ArrowDown />
                <CurrencyMenu isOpen={isOpen}>
                    <span onClick={handleCurrency} ref={ref}>
                        {currency === "IRT" ? "USD" : "IRT"}
                    </span>
                </CurrencyMenu>
            </Currency>
        </Container>
    );
}

export default BalanceAmount;
