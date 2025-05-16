import { useForm, Controller } from "react-hook-form";
import FormRow from "./FormRow";
import Input from "./Input";
import { useCard } from "../features/card/useCard";
import { useSearchParams } from "react-router-dom";
import { cardFormat } from "../utils/utils";
import styled, { css } from "styled-components";
import Card from "../icons/Card";
import Lock from "../icons/Lock";
import Form from "./Form";
import { useState } from "react";
import { getBalance } from "../services/apiBalance";
import { useGetBalance } from "../features/card/useGetBalance";

const Container = styled.div`
    margin-top: 24px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 12px;
`;

const CardsSelector = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #d0d0d3;
    border-radius: 12px;
    padding: 12px 16px;
`;

const CustomFormCol = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 4px;
    position: relative;
`;

const CustomFormRow = styled.div`
    display: flex;
    align-items: start;
    gap: 12px;
    position: relative;
`;

const CustomLabel = styled.label`
    font-size: 12px;
    font-weight: 500;
`;

const Error = styled.span`
    font-size: 12px;
    color: #ff6161;
`;

const ExpInput = styled.input`
    border: 1px solid #d0d0d3;
    border-radius: 8px;
    padding: 16px;
    outline: none;
    width: 40px;
    font-size: 12px;
    font-weight: 500;
    ${(props) =>
        props.isError &&
        css`
            border: 1px solid #ff3f32;
        `}
    transition: all 0.3s ease;
    font-family: "Poppins";
    &::placeholder {
        font-weight: 400;
        font-size: 12px;
        color: #929299;
        text-align: center;
    }
`;

const CustomInput = styled.input`
    border: 1px solid #d0d0d3;
    border-radius: 8px;
    padding: 16px;
    outline: none;
    font-size: 12px;
    width: calc(100% - 32px);
    font-weight: 500;
    ${(props) =>
        props.isError &&
        css`
            border: 1px solid #ff3f32;
        `}
    transition: all 0.3s ease;
    font-family: "Poppins";
    position: "relative";
`;

const SubmitButton = styled.button`
    border: none;
    background-color: #0f1fd1;
    outline: none;
    color: #fdfeff;
    padding: 12px 0px;
    border-radius: 12px;
    justify-self: center;
    width: 100%;
    grid-area: 6 / 1 / 6 / 2;
`;

const StyledIcon = styled.div`
    position: absolute;
    right: 6px;
    bottom: 28px;
`;

function BalanceForm({ setBalance }) {
    const { register, formState, handleSubmit, reset, getValues } = useForm({
        mode: "onChange",
    });
    const { data: cards, isPending: isGettingCards } = useCard();
    const [searchParams, setSearchParams] = useSearchParams();
    const { errors, isSubmitSuccessful } = formState;
    const { getBalance, isPending, isSuccess, data } = useGetBalance();

    const card =
        !isGettingCards &&
        cards[searchParams.get("card") ? searchParams.get("card") : 0];

    async function onSubmit(formValue) {
        function transformData(data) {
            const { expY, expM, ...rest } = data;
            const exp = `${expY}/${expM}`;

            return {
                ...rest,
                exp,
            };
        }
        const res = await getBalance(transformData(formValue));
        setBalance(res?.data?.balance);
    }

    const card_number = card?.card_number;

    if (isGettingCards) return "Loading...";
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Container>
                <CustomFormRow style={{ gridArea: "1 / 1 / 2 / 6" }}>
                    <CustomFormCol style={{ width: "100%" }}>
                        <CustomLabel>Card Number</CustomLabel>
                        <CustomFormRow
                            style={{
                                display: "flex",
                                gap: "12px",
                                width: "100%",
                            }}
                        >
                            <Input
                                inputType="edit-profile"
                                name="card_number"
                                id="card_number"
                                style={{ textAlign: "center", width: "100%" }}
                                defaultValue={card_number}
                                {...register("card_number", {
                                    required: "This fields is required",
                                })}
                            />
                            <CardsSelector>
                                <Card />
                            </CardsSelector>
                        </CustomFormRow>
                        {errors?.card_number?.message && (
                            <Error>{errors?.card_number?.message}</Error>
                        )}
                    </CustomFormCol>
                </CustomFormRow>
                <CustomFormRow
                    style={{
                        justifyContent: "space-between",
                        gridArea: "2 / 1 / 3 / 6",
                    }}
                >
                    <CustomFormCol style={{ flexBasis: "60%" }}>
                        <CustomLabel>CVV2</CustomLabel>
                        <CustomInput
                            name="cvv2"
                            id="cvv2"
                            type="number"
                            {...register("cvv2", {
                                required: "This fields is required",
                            })}
                        />
                        {errors?.cvv2?.message && (
                            <Error>{errors?.cvv2?.message}</Error>
                        )}
                    </CustomFormCol>
                    <CustomFormCol>
                        <CustomLabel>Expiry date</CustomLabel>
                        <div style={{ display: "flex", gap: "8px" }}>
                            <ExpInput
                                name="expY"
                                id="expY"
                                type="number"
                                minLength={2}
                                maxLength={2}
                                {...register("expY", {
                                    required: "Year is required",
                                })}
                                placeholder="Year"
                            />
                            <ExpInput
                                name="expM"
                                id="expM"
                                type="number"
                                minLength={2}
                                maxLength={2}
                                {...register("expM", {
                                    required: "Month is required",
                                })}
                                placeholder="Month"
                            />
                        </div>
                        {errors?.expY?.message && (
                            <Error>{errors?.expY?.message}</Error>
                        )}
                        {errors?.expM?.message && (
                            <Error>{errors?.expM?.message}</Error>
                        )}
                    </CustomFormCol>
                </CustomFormRow>
                <CustomFormRow>
                    <CustomFormCol style={{ width: "calc(100% - 32px)" }}>
                        <CustomLabel>Passcode</CustomLabel>
                        <CustomInput
                            name="passcode"
                            id="passcode"
                            {...register("passcode", {
                                required: "This fields is required",
                            })}
                            placeholder="Passcode"
                            style={{
                                width: "100%",
                            }}
                        />
                        {<Error>{errors?.passcode?.message}</Error>}
                    </CustomFormCol>

                    {/* <StyledIcon>
                        <Lock />
                    </StyledIcon> */}
                </CustomFormRow>

                <SubmitButton type="submit">Inquiry</SubmitButton>
            </Container>
        </Form>
    );
}

export default BalanceForm;
