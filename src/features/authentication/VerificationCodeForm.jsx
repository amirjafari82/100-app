import { useEffect, useState } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useLogin as usePhone } from "../../context/LoginContext";
import Button from "../../ui/Button";
import CountDownTimer from "../../ui/CountDownTimer";
import VerificationCodeInput from "../../ui/VerificationCodeInput";
import { getRandomCode } from "../../utils/utils";
import { useCode } from "./useCode";
import { useLogin } from "./useLogin";
import { useUser } from "./useUser";

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
    const { phone } = usePhone();
    const [userInput, setUserInput] = useState();
    const [isTimerFinished, setIsTimerFinished] = useState(false);
    const { code, setCode } = useCode();
    const navigate = useNavigate();
    console.log(code);

    const { isLoading: isLoadingUser, isAuthenticated } = useUser();

    useEffect(
        function () {
            if (isAuthenticated && !isLoadingUser) navigate("/account");
        },
        [navigate, isAuthenticated, isLoadingUser]
    );

    const { login, isLoading } = useLogin();

    function handleResendCode(e) {
        e.preventDefault();
        setCode(getRandomCode(10000, 99999));
        setIsTimerFinished(false);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (userInput === code) {
            const data = await login(phone);
            console.log(data);
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
            <Button disabled={isLoading}>
                {!isLoading ? "Enter" : "Logging in"}
            </Button>
        </StyledForm>
    );
}

export default VerificationCodeForm;
