import styled from "styled-components";

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fdfeff;
    border-radius: 50%;
    padding: 14px;
`;

const ItemName = styled.span`
    font-size: 10px;
`;

function OperationItem({ item }) {
    return (
        <Item>
            <Icon>{item.icon}</Icon>
            <ItemName>{item.name}</ItemName>
        </Item>
    );
}

export default OperationItem;
