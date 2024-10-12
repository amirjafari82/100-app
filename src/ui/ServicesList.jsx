import styled from "styled-components";
import Balance from "../icons/Balance";
import Charity from "../icons/Charity";
import Scan from "../icons/Scan";
import ArrowRight2 from "../icons/ArrowRight2";

const Container = styled.div`
    margin-top: 16px;
`;

const ContainerHeading = styled.h3`
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 8px;
`;

const ContainerList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Service = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(247, 247, 248, 0.58);
    border-top: 1px solid #878fe8;
    border-radius: 12px;
    padding: 23px 16px 23px 16px;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const Right = styled.div``;

const ServiceName = styled.span`
    font-size: 12px;
    font-weight: 500;
`;

const services = [
    {
        name: "Balance",
        icon: <Balance />,
    },
    {
        name: "Charity",
        icon: <Charity />,
    },
    {
        name: "QR Code",
        icon: <Scan />,
    },
];

function ServicesList() {
    return (
        <Container>
            <ContainerHeading>Services</ContainerHeading>
            <ContainerList>
                {services.map((service) => (
                    <Service key={service.name}>
                        <Left>
                            {service.icon}
                            <ServiceName>{service.name}</ServiceName>
                        </Left>
                        <Right>
                            <ArrowRight2 />
                        </Right>
                    </Service>
                ))}
            </ContainerList>
        </Container>
    );
}

export default ServicesList;
