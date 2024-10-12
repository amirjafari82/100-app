import styled from "styled-components";
import Upload from "../icons/Upload";
import Report from "../icons/Report";
import Download from "../icons/Download";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    margin-top: 12px;
`;

const Button = styled.button`
    padding: 12px 16px;
    border: none;
    background-color: #fdfeff;
    outline: none;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;

function BalanceOperations() {
    return (
        <Container>
            <Button>
                Withdraw <Upload />
            </Button>
            <Button>
                Budgets <Report />
            </Button>
            <Button>
                Deposite <Download />
            </Button>
        </Container>
    );
}

export default BalanceOperations;
