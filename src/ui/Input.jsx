import styled, { css } from "styled-components";

const Input = styled.input`
    ${(props) =>
        props.inputType === "regular" &&
        css`
            border: 1px solid #0f1fd1;
            border-radius: 12px;
            padding: 16px;
            outline: none;
            width: calc(100vw - 64px);
            font-size: 16px;
            font-weight: 600;
        `}

    ${(props) =>
        props.inputType === "edit-profile" &&
        css`
            border: 1px solid #d0d0d3;
            border-radius: 8px;
            padding: 16px;
            outline: none;
            width: calc(100vw - 82px);
            font-size: 12px;
            font-weight: 500;
        `}

    ${(props) =>
        props.isError &&
        css`
            border: 1px solid #ff3f32;
        `}
    transition: all 0.3s ease;
    font-family: "Poppins";
`;

Input.defaultProps = {
    inputType: "regular",
};

export default Input;
