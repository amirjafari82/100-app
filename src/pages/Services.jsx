import Balance from "../ui/Balance";
import CommonServices from "../ui/CommonServices";
import Header from "../ui/Header";
import styled from "styled-components";
import ServicesList from "../ui/ServicesList";
import NavigationBar from "../ui/NavigationBar";

const Container = styled.div`
    padding: 16px 16px 92px 16px;
`;

function Services() {
    return (
        <main>
            <Container>
                <Header />
                <Balance />
                <CommonServices />
                <ServicesList />
            </Container>
            <NavigationBar />
        </main>
    );
}

export default Services;
