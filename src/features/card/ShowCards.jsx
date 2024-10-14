import { useSearchParams } from "react-router-dom";
import { useCard } from "./useCard";
import styled from "styled-components";
import Add from "../../icons/Add";
import CardItem from "../../ui/CardItem";
import { useEffect } from "react";

const Container = styled.div`
    margin-top: 40px;
`;

const ContainerHeading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeadingStyle = styled.span`
    font-size: 12px;
    font-weight: 500;
`;

const StyledAddCard = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const StyledAddIcon = styled.div`
    background-color: #0f1fd1;
    border-radius: 100%;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledAdd = styled.span`
    font-size: 12px;
    font-weight: 500;
`;

function ShowCards() {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(function () {
        searchParams.set("cards", "my-cards");
        setSearchParams(searchParams);
    }, []);

    const isMyCards = searchParams.get("cards") === "my-cards";

    return (
        <Container>
            <ContainerHeading>
                <HeadingStyle>
                    {isMyCards ? "My Cards List" : "Destination Cards List"}
                </HeadingStyle>
                <StyledAddCard>
                    <StyledAddIcon>
                        <Add />
                    </StyledAddIcon>
                    <StyledAdd>Add Card</StyledAdd>
                </StyledAddCard>
            </ContainerHeading>
            <CardItem isMyCards={isMyCards} />
        </Container>
    );
}

export default ShowCards;
