import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const ValidityTime = styled.span`
    ${(props) =>
        props.color &&
        css`
            color: ${props.color};
        `}
`;

function CountDownTimer({ initialTime, color, setCode, setIsTimerFinished }) {
    const [timer, setTimer] = useState(initialTime);

    useEffect(function () {
        const id = setInterval(function () {
            setTimer((prevTime) => {
                if (prevTime === 0) {
                    clearInterval(id);
                    return 0;
                } else {
                    return prevTime - 1;
                }
            });
        }, 1000);

        return () => clearInterval(id);
    }, []);

    useEffect(
        function () {
            if (timer === 0) {
                setCode("null");
                setIsTimerFinished(true);
            }
        },
        [timer, setCode, setIsTimerFinished]
    );

    const minutes = Math.floor((timer % 3600) / 60);
    const seconds =
        timer % 60 < 10
            ? `0${timer % 60}`
            : timer % 60 === 0
            ? "00"
            : timer % 60;
    return (
        <ValidityTime color={color}>
            {minutes}:{seconds}
        </ValidityTime>
    );
}

export default CountDownTimer;
