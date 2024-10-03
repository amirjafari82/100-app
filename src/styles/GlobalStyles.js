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
`;

export default GlobalStyles;
