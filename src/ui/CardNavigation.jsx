import { NavLink, useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #f7f7f8;
    border-radius: 12px;
    padding: 4px;
    margin-top: 24px;
`;
const Item = styled.div`
    text-decoration: none;
    color: #929299;
    font-size: 12px;
    font-weight: 500;
    border-radius: 8px;
    padding: 11px 0px;
    flex-basis: 50%;
    text-align: center;
    background-color: transparent;
    transition: all 0.3s ease;

    ${(props) =>
        props.active &&
        css`
            color: #0f1fd1;
            background-color: #fdfeff;
        `}
`;

function CardNavigation() {
    const [searchParams, setSearchParams] = useSearchParams();

    function handleClick(params) {
        if (params) {
            searchParams.set("cards", params);
            setSearchParams(searchParams);
        }
    }

    return (
        <Container>
            <Item
                onClick={() => handleClick("my-cards")}
                active={searchParams.get("cards") === "my-cards"}
            >
                My Cards
            </Item>
            <Item
                onClick={() => handleClick("des-cards")}
                active={searchParams.get("cards") === "des-cards"}
            >
                Destination Cards
            </Item>
        </Container>
    );
}

export default CardNavigation;
