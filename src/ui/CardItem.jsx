import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDesCard } from "../features/card/useDesCard";
import MyCardsItem from "./MyCardsItem";
import DesCardsItem from "./DesCardsItem";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 16px;
`;

function CardItem({ isMyCards }) {

    return (
        <Container>{isMyCards ? <MyCardsItem /> : <DesCardsItem />}</Container>
    );
}

export default CardItem;
