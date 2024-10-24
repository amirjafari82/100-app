import styled from "styled-components";

const StyledFormRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 4px;
`;

const Label = styled.label`
    font-size: 12px;
    font-weight: 500;
`;

const Error = styled.span`
    font-size: 12px;
    color: #ff6161;
`

function FormRow({ label, children, error }) {
    return (
        <StyledFormRow>
            {label && <Label htmlFor={children.props.id}>{label}</Label>}
            {children}
            {error && <Error>{error}</Error>}
        </StyledFormRow>
    );
}

export default FormRow;
