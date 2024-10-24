import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        font-family: "Poppins", sans-serif;
        transition: color 0.3s, background-color 0.3s;
    }

    button {
        cursor: pointer;
    }

    *{
        padding: 0;
        margin: 0;
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 16px;
        width: 16px;
        background-color: transparent;
        border-radius: 50%;
        border: 1px solid #D9D9D9;
    }

    .edit-profile-checkbox input:checked ~ .checkmark {
        background-color: #0F1FD1;
    }

    .edit-profile-checkbox input ~ .checkmark {
        background-color: transparent;
    }
`;

export default GlobalStyles;
