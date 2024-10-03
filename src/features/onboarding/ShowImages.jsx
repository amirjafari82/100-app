import styled from "styled-components";
import { useImages } from "./useImages";
import { ThreeDot } from "react-loading-indicators";

const Container = styled.div`
    width: 206px;
    height: 161px;
    z-index: 100;
    position: absolute;
    top: 50px;
`;

const StyledImg = styled.img`
    width: 100%;
    opacity: 1 !important;
`;

const StyledLoading = styled.div`
    position: absolute;
    left: 64px;
    top: 88px;
`;

function ShowImages({ index }) {
    const { isLoading, images } = useImages();

    const imageURL = `http://127.0.0.1:8000${images?.[index].image}`;

    return (
        <Container>
            {isLoading ? (
                <StyledLoading>
                    <ThreeDot
                        color="#0F1FD1"
                        size="medium"
                        text=""
                        textColor=""
                    />
                </StyledLoading>
            ) : (
                <StyledImg src={imageURL} alt="" />
            )}
        </Container>
    );
}

export default ShowImages;
