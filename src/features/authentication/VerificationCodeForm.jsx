import styled from "styled-components";
import VerificationCodeInput from "../../ui/VerificationCodeInput";
import Button from "../../ui/Button";
import { getRandomCode } from "../../utils/utils";
import CountDownTimer from "../../ui/CountDownTimer";
import { useState } from "react";
import { useCode } from "./useCode";
import { AiTwotoneEdit } from "react-icons/ai";
import { useLogin } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 60vh;
`;

const StyledTopForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ValidityTimeSection = styled.p`
    text-align: center;
    margin-top: 16px;
    font-size: 14px;
    font-weight: 600;
`;

const ResendCodeButton = styled.button`
    margin-top: 16px;
    border: none;
    /* background-color: #0f1fd1; */
    background-color: transparent;
    border: 1px solid #0f1fd1;
    color: #0f1fd1;
    border-radius: 8px;
    padding: 12px 16px;
`;

const EditPhone = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
    font-weight: 600;
`;

function VerificationCodeForm() {
    const { phone } = useLogin();
    const { setIsAuthenticated } = useAuth();
    const [userInput, setUserInput] = useState();
    const [isTimerFinished, setIsTimerFinished] = useState(false);
    const { code, setCode } = useCode();
    const navigate = useNavigate();
    console.log(code);

    console.log(userInput === code);

    function handleResendCode(e) {
        e.preventDefault();
        setCode(getRandomCode(99999));
        setIsTimerFinished(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (userInput === code) {
            setIsAuthenticated(true);
            navigate("/account");
        }
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledTopForm>
                <EditPhone onClick={() => navigate(-1)}>
                    <AiTwotoneEdit color="#0F1FD1" size="24" />
                    <p>{phone}</p>
                </EditPhone>
                <VerificationCodeInput length={5} setUserInput={setUserInput} />
                {isTimerFinished ? (
                    <ResendCodeButton onClick={handleResendCode}>
                        Resend Code
                    </ResendCodeButton>
                ) : (
                    <ValidityTimeSection>
                        Validity Time:{" "}
                        <CountDownTimer
                            initialTime={120}
                            color="#0f1fd1"
                            setCode={setCode}
                            setIsTimerFinished={setIsTimerFinished}
                        />
                    </ValidityTimeSection>
                )}
            </StyledTopForm>
            <Button>Enter</Button>
        </StyledForm>
    );
}

export default VerificationCodeForm;
