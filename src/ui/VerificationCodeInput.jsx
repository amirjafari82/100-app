import { useEffect, useState } from "react";
import styled from "styled-components";

const Input = styled.input`
    width: 66px;
    padding: 12px 0px;
    text-align: center;
    font-family: "Poppins";
    font-weight: 600;
    background-color: #ffffff;
    border: 1px solid #0f1fd1;
    border-radius: 8px;
    outline: none;
    transition: all 0.6s ease;

    &.filled {
        background-color: #e7e8fa;
    }
`;

const StyledInputContainer = styled.div`
    display: flex;
    gap: 16px;
`;

function VerificationCodeInput({ length, setUserInput }) {
    const inputNumbers = Array.from({ length: length }, (x, i) => i);
    const initialStateArray = inputNumbers.map(function (input) {
        return {
            [input]: "",
        };
    });
    const initialState = Object.assign({}, ...initialStateArray);
    const [code, setCode] = useState(initialState);

    function handleChange(e) {
        const name = e.target.name;
        setCode(function (code) {
            return { ...code, [name]: e.target.value };
        });
        if (!code[name]) {
            const nextElName = Number(name) + 1;
            document.getElementById(name).className += " filled";
            if (nextElName <= length - 1)
                document.getElementById(nextElName).focus();
        }
    }

    const inputCode = Number(
        Object.values(code).toString().replaceAll(",", "")
    );

    useEffect(
        function () {
            setUserInput(inputCode);
        },
        [inputCode, setUserInput]
    );

    return (
        <StyledInputContainer>
            {inputNumbers.map((input) => (
                <Input
                    type="text"
                    maxLength={1}
                    minLength={1}
                    name={input}
                    id={input}
                    max={9}
                    min={9}
                    value={code[input]}
                    onChange={handleChange}
                    key={input}
                />
            ))}
        </StyledInputContainer>
    );
}

export default VerificationCodeInput;
