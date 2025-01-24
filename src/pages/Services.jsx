import Balance from "../ui/Balance";
import CommonServices from "../ui/CommonServices";
import Header from "../ui/Header";
import styled from "styled-components";
import ServicesList from "../ui/ServicesList";
import NavigationBar from "../ui/NavigationBar";
import Notification from "../icons/Notification";

const Container = styled.div`
    padding: 16px 16px 92px 16px;
`;

function Services() {
    return (
        <main>
            <Container>
                <Header
                    onlyImage={false}
                    icons={[<Notification key={"notification"} />]}
                />
                <Balance />
                <CommonServices />
                <ServicesList />
            </Container>
            <NavigationBar />
        </main>
    );
}

export default Services;
