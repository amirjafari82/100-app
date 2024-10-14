import styled from "styled-components";
import NavigationBar from "../ui/NavigationBar";
import CardNavigation from "../ui/CardNavigation";
import ShowCards from "../features/card/ShowCards";

const Container = styled.div`
    padding: 24px 16px 96px 16px;
    height: 100%;
    overflow: hidden;
`;

const PageHeading = styled.h3`
    text-align: center;
    font-size: 16px;
    font-weight: 500;
`;

function Cards() {
    return (
        <>
            <Container>
                <PageHeading>Cards</PageHeading>
                <CardNavigation />
                <ShowCards />
            </Container>
            <NavigationBar />
        </>
    );
}

export default Cards;
