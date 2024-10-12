import styled, { css } from "styled-components";

const Input = styled.input`
    border: 1px solid #0f1fd1;
    border-radius: 12px;
    padding: 16px;
    outline: none;
    width: calc(100vw - 64px);
    font-size: 16px;
    font-weight: 600;
    transition: all 0.3s ease;

    ${(props) =>
        props.isError &&
        css`
            border: 1px solid #ff3f32;
        `}
`;

export default Input;
