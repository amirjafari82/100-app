import styled from "styled-components";
import NavigationBar from "../ui/NavigationBar";
import Header from "../ui/Header";
import Notification from "../icons/Notification";
import Scan from "../icons/Scan";

import "swiper/css";
import CardSwiper from "../ui/CardSwiper";
import TransactionOperations from "../ui/TransactionOperations";
import Lasts from "../ui/Lasts";
import { useState } from "react";

const Container = styled.div`
    padding: 16px 0px 92px 0px;
    background-color: #f7f7f8;
    height: 100vh;
`;

function Transaction() {
    const [ActiveCard, setActiveCard] = useState();

    return (
        <>
            <Container>
                <Header
                    onlyImage={true}
                    icons={[
                        <Scan key={"qr"} color={"#060607"} />,
                        <Notification key={"notification"} />,
                    ]}
                    padding={true}
                />
                <CardSwiper setActiveCard={setActiveCard} />
                <TransactionOperations />
                <Lasts ActiveCard={ActiveCard} />
            </Container>
            <NavigationBar />
        </>
    );
}

export default Transaction;
