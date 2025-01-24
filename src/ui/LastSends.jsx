import styled from "styled-components";
import { useLastSend } from "../features/transaction/useLastSend";
import UserFill from "../icons/UserFill";
import HeadingContainer from "./HeadingContainer";

const Container = styled.div``;

const LastsSendsItems = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 16px;
`;

const ProfileItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

const ProfileImage = styled.div`
    background-color: #f7f7f8;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
`;

const Image = styled.img`
    width: 36px;
    height: 36px;
    object-fit: cover;
`;

const Username = styled.span`
    font-size: 10px;
    font-weight: 500;
`;

function LastSends() {
    const { data, isPending } = useLastSend();
    const new_data = data?.filter(
        (item, index, self) =>
            index === self.findIndex((t) => t.to_user === item.to_user)
    );

    return (
        <Container>
            <HeadingContainer title={"Last Sends"} />
            <LastsSendsItems>
                {new_data?.map((item) => (
                    <ProfileItem key={item.id}>
                        <ProfileImage>
                            {item.to_image ? (
                                <Image
                                    src={`http://127.0.0.1:8000${item.to_image}`}
                                />
                            ) : (
                                <UserFill />
                            )}
                        </ProfileImage>
                        <Username>{item.to_firstname}</Username>
                    </ProfileItem>
                ))}
            </LastsSendsItems>
        </Container>
    );
}

export default LastSends;
