import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Location from "../icons/Location";
import Cards from "../icons/Cards";
import Category from "../icons/Category";
import Transaction from "../icons/Transaction";
import Profile from "../icons/Profile";

const Container = styled.div`
    position: fixed;
    bottom: 0;
    background-color: #fdfeff;
    padding: 16px 24px;
    border-radius: 16px 16px 0px 0px;
    box-shadow: 0px -4px 16px 0px rgba(15, 20, 47, 0.03);
    width: calc(100% - 48px);
`;

const NavBar = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0;
`;

const NavItem = styled.li``;

const Link = styled(NavLink)`
    text-decoration: none;
    color: #b2b2b7;
    font-size: 8px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    &:active,
    &.active:link,
    &.active:visited {
        color: #0f1fd1;
    }

    &:active path,
    &.active:link path,
    &.active:visited path {
        stroke: #0f1fd1 !important;
    }
`;

function NavigationBar() {
    return (
        <Container>
            <NavBar>
                <NavItem>
                    <Link to="/map">
                        <Location />
                        Map
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/cards">
                        <Cards />
                        Cards
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/services">
                        <Category />
                        Services
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/transaction">
                        <Transaction />
                        Transaction
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/profile">
                        <Profile />
                        Profile
                    </Link>
                </NavItem>
            </NavBar>
        </Container>
    );
}

export default NavigationBar;
