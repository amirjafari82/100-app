import styled from "styled-components";

const HeadingSec = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Heading = styled.h3`
    font-size: 12px;
    font-weight: 500;
`;

const ViewAll = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: #929299;
`;

function HeadingContainer({ title, onClick }) {
    return (
        <HeadingSec>
            <Heading>{title}</Heading>
            <ViewAll onClick={onClick}>View all</ViewAll>
        </HeadingSec>
    );
}

export default HeadingContainer;
