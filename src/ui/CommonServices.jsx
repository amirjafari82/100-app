import styled from "styled-components";
import Edit2 from "../icons/Edit2";
import Bills from "../icons/Bills";
import SimCard from "../icons/SimCard";
import Internet from "../icons/Internet";
import Transfer from "../icons/Transfer";

const Container = styled.div`
    margin-top: 21px;
`;

const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ContainerHeading = styled.h3`
    font-size: 12px;
    font-weight: 500;
`;

const Operations = styled.div`
    display: flex;
    background-color: #f7f7f8;
    padding: 14px;
    gap: 8px;
    border-radius: 16px;
    margin-top: 8px;
    border-bottom: 3px solid #878fe8;
`;

const OperationItem = styled.div`
    background-color: #fdfeff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 14px 0px;
    flex-basis: 25%;
    border-radius: 12px;
`;

const OperationName = styled.span`
    font-size: 10px;
    font-weight: 500;
`;

const operations = [
    {
        name: "Bill",
        icon: <Bills />,
    },
    {
        name: "Recharge",
        icon: <SimCard />,
    },
    {
        name: "Internet",
        icon: <Internet />,
    },
    {
        name: "Transfer",
        icon: <Transfer />,
    },
];

function CommonServices() {
    return (
        <Container>
            <ContainerHeader>
                <ContainerHeading>Common Services</ContainerHeading>
                <Edit2 />
            </ContainerHeader>
            <Operations>
                {operations.map((operation) => (
                    <OperationItem key={operation.name}>
                        {operation.icon}
                        <OperationName>{operation.name}</OperationName>
                    </OperationItem>
                ))}
            </Operations>
        </Container>
    );
}

export default CommonServices;
