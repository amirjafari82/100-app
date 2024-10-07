import styled from "styled-components";

const StyledButton = styled.button`
    width: calc(100vw - 24px);
    border: none;
    background-color: #0f1fd1;
    color: #fdfeff;
    font-size: 16px;
    font-weight: 500;
    border-radius: 12px;
    padding: 12px 0px;
`;

function Button({ children, onClick, disabled }) {
    return <StyledButton onClick={onClick} disabled={disabled}>{children}</StyledButton>;
}

export default Button;
