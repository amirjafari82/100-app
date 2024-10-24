import { useState } from "react";
import styled, { css } from "styled-components";
import Check from "../icons/Check";
import CheckBoxIcon from "../icons/CheckBoxIcon";
import { useEffect } from "react";

const StyledCheckInput = styled.div`
    display: flex;
    gap: 24px;
`;

const StyledOption = styled.div`
    gap: 4px;
    display: flex;
    align-items: center;
    position: relative;
`;

const CheckBox = styled.div`
    width: 16px;
    height: 16px;
    border: 1px solid #d9d9d9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        display: none;
    }

    ${(props) =>
        props.isChecked &&
        css`
            background-color: #0f1fd1;
            svg {
                display: block;
            }
        `}
`;

const Label = styled.span`
    font-size: 12px;
    font-weight: 500;
`;

function CheckInput({ options, setSelectedGender, defaultValue }) {
    const initialStateArray = options.map(function (option) {
        return {
            [option]: false,
        };
    });
    const initialState = Object.assign({}, ...initialStateArray);
    const [optionsState, setOptions] = useState(initialState);

    useEffect(
        function () {
            options.map((option) => {
                if (option === defaultValue) {
                    setOptions({
                        ...initialState,
                        [option]: !optionsState[option],
                    });
                    setSelectedGender(option);
                }
            });
        },
        [defaultValue]
    );

    function handleClick(e) {
        const target = e.target.accessKey;

        if (target) {
            options.map((option) => {
                if (option === target) {
                    setOptions({
                        ...initialState,
                        [target]: !optionsState[target],
                    });
                    setSelectedGender(option);
                }
            });
        }
    }

    return (
        <StyledCheckInput>
            {options.map((option) => (
                <StyledOption
                    key={option}
                    className="edit-profile-checkbox"
                    onClick={(e) => handleClick(e)}
                    accessKey={option}
                >
                    <CheckBox
                        id={option}
                        accessKey={option}
                        isChecked={optionsState[option]}
                    >
                        <CheckBoxIcon />
                    </CheckBox>
                    <Label accessKey={option}>{option}</Label>
                </StyledOption>
            ))}
        </StyledCheckInput>
    );
}

export default CheckInput;
