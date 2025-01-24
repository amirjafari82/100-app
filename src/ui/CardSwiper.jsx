import styled from "styled-components";
import { useCard } from "../features/card/useCard";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import TransactionCardItem from "./TransactionCardItem";
import { useSearchParams } from "react-router-dom";

const Container = styled.div`
    margin-top: 32px;
    margin-bottom: 27px;
`;

function CardSwiper({ setActiveCard }) {
    const { data, isPending } = useCard();
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <Container>
            <Swiper
                spaceBetween={108}
                slidesPerView={2}
                centeredSlides={true}
                modules={[Pagination]}
                watchSlidesProgress
                onSlideChange={(swiper) => {
                    searchParams.set("card", swiper.realIndex);
                    setSearchParams(searchParams);
                }}
            >
                {data?.map((card, index) => {
                    return (
                        <SwiperSlide
                            key={card.card_number}
                            card={card.card_number}
                        >
                            {({ isActive }) => (
                                <TransactionCardItem
                                    card={card}
                                    isActive={isActive}
                                />
                            )}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Container>
    );
}

export default CardSwiper;
