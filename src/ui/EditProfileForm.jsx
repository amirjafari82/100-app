import styled from "styled-components";
import Camera from "../icons/Camera";
import FileInput from "./FileInput";
import Form from "./Form";
import FormRow from "./FormRow";
import { useUser } from "../features/authentication/useUser";
import User from "../icons/User";
import UserInfo from "./UserInfo";
import Input from "./Input";
import Mobile from "../icons/Mobile";
import CheckInput from "./CheckInput";
import { useState } from "react";
import DatePickerInput from "./DatePickerInput";
import { useForm } from "react-hook-form";
import { useUpdateUser } from "../features/authentication/useUpdateUser";
import { useEffect } from "react";
import { useRef } from "react";

const Image = styled.div`
    background-color: #b7bbf1;
    border-radius: 100%;
    width: 64px;
    height: 64px;
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CameraIcon = styled.div`
    position: absolute;
    background-color: #fdfeff;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    bottom: -8px;
    left: 0;
`;

const UserImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const UserImage = styled.img`
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 100%;
`;

const TopForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

const CustomFormRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 4px;
    position: relative;
`;

const CustomLabel = styled.label`
    font-size: 12px;
    font-weight: 500;
`;

const StyledIcon = styled.div`
    position: absolute;
    right: 6px;
    bottom: 12px;
`;

const CustomFormDatePickerRow = styled.div`
    position: relative;
    margin-top: 4px;
`;

const Error = styled.span`
    font-size: 12px;
    color: #ff6161;
`;

const ButtonRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    margin-top: 48px;
    padding-bottom: 24px;
`;

const SubmitButton = styled.button`
    border: none;
    background-color: #0f1fd1;
    outline: none;
    color: #fdfeff;
    flex-basis: 50%;
    padding: 12px 0px;
    border-radius: 12px;
`;

const CancleButton = styled.button`
    border: 1px solid #0f1fd1;
    color: #0f1fd1;
    outline: none;
    background-color: transparent;
    flex-basis: 50%;
    padding: 11px 0px;
    border-radius: 12px;
`;

function EditProfileForm() {
    const { user } = useUser();
    const [error, setError] = useState();
    const [gender, setSelectedGender] = useState("");
    const [birthday, setBirthday] = useState();
    const { updateUser, isUpdating } = useUpdateUser();

    const { register, formState, handleSubmit, reset } = useForm();
    const { errors, isSubmitSuccessful } = formState;

    function onSubmit({
        first_name,
        last_name,
        image,
        national_id,
        phone = user.user.phone,
    }) {
        const data = {
            first_name,
            last_name,
            national_id,
            phone,
            gender,
            birthday,
            image,
        };
        updateUser(data);
    }

    useEffect(
        function () {
            reset({
                image: null,
            });
        },
        [isSubmitSuccessful]
    );

    return (
        <Form
            onSubmit={handleSubmit(onSubmit)}
            style={{ height: "calc(100vh - 88px)" }}
        >
            <TopForm>
                <FormRow
                    label={
                        <Image>
                            <CameraIcon>
                                <Camera />
                            </CameraIcon>
                            <UserImageContainer>
                                {user?.user.image ? (
                                    <UserImage
                                        src={`http://127.0.0.1:8000${user?.user.image}`}
                                    />
                                ) : (
                                    <User size={36} />
                                )}
                            </UserImageContainer>
                        </Image>
                    }
                    error={errors?.image?.message}
                >
                    <FileInput
                        id="image"
                        {...register("image")}
                        accept="image/*"
                    />
                </FormRow>
                <FormRow>
                    <UserInfo position="unset" />
                </FormRow>
            </TopForm>
            <FormRow label="First Name" error={errors?.first_name?.message}>
                <Input
                    id="first_name"
                    inputType="edit-profile"
                    name="first_name"
                    defaultValue={user?.user?.first_name}
                    {...register("first_name", {
                        required: "This fields is required",
                    })}
                />
            </FormRow>
            <FormRow label="Last Name" error={errors?.last_name?.message}>
                <Input
                    id="last_name"
                    inputType="edit-profile"
                    name="last_name"
                    defaultValue={user?.user?.last_name}
                    {...register("last_name", {
                        required: "This fields is required",
                    })}
                />
            </FormRow>
            <FormRow label="National ID" error={errors?.national_id?.message}>
                <Input
                    id="national_id"
                    inputType="edit-profile"
                    name="national_id"
                    defaultValue={user?.user?.national_id}
                    {...register("national_id", {
                        required: "This fields is required",
                    })}
                />
            </FormRow>
            <CustomFormRow>
                <CustomLabel htmlFor="phone">Phone Number</CustomLabel>
                <Input
                    id="phone"
                    inputType="edit-profile"
                    name="phone"
                    defaultValue={user?.user?.phone}
                    {...register("phone")}
                    disabled={true}
                />
                <Error>{errors?.phone?.message}</Error>
                <StyledIcon>
                    <Mobile />
                </StyledIcon>
            </CustomFormRow>
            <FormRow label="Gender">
                <CheckInput
                    options={["Female", "Male"]}
                    setSelectedGender={setSelectedGender}
                    defaultValue={user?.user?.gender}
                />
            </FormRow>
            <CustomFormDatePickerRow>
                <DatePickerInput
                    setError={setError}
                    error={error}
                    setBirthday={setBirthday}
                    defaultValue={user?.user?.birthday}
                />
            </CustomFormDatePickerRow>
            <ButtonRow>
                <CancleButton
                    type="reset"
                    onClick={() =>
                        reset(undefined, { keepDefaultValues: true })
                    }
                >
                    Cancle
                </CancleButton>
                <SubmitButton type="submit">
                    {isUpdating ? "Saving..." : "Save"}
                </SubmitButton>
            </ButtonRow>
        </Form>
    );
}

export default EditProfileForm;
