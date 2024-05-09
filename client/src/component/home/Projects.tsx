import React, { useState, useEffect } from "react";
import * as Pro from "../../styles/home/projects.styled";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Navigation, Pagination, Controller, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { salesData } from "../../util/saleData";
import { useNavigate } from "react-router-dom";
import useHoverCursor from "../../hook/useHoverCursor";

function Projects() {
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [activeIndex, setActiveIndex] = useState(0);

  const [data, setData] = useState(salesData.slice(0, 6));
  const navigate = useNavigate();

  const { cursor, handleHover, handleLeave } = useHoverCursor();
  useEffect(() => {
    // 이벤트 핸들러 추가
    window.addEventListener("mousemove", cursor);

    // 컴포넌트 언마운트 시 이벤트 핸들러 제거
    return () => {
      window.removeEventListener("mousemove", cursor);
    };
  }, []);

  return (
    <Pro.Wrapper>
      <Pro.TitleContainer>
        <Pro.TitleCaption
          initial={{ scale: 1 }}
          transition={{
            duration: 0.5,
          }}
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
        >
          <p>주요 실적</p>
          <h2>
            <span>거림은 어떤 부동산이든</span>
            <span>전문성을 바탕으로</span>
            <span>솔루션을 찾아</span>
            <span>
              <span className="accent">조기 분양 성공</span>을 달성합니다.
            </span>
          </h2>
        </Pro.TitleCaption>
        <button onClick={() => navigate("/project/sales")}>
          VIEW ALL
          <Pro.PlusIcon />
        </button>
      </Pro.TitleContainer>

      <Pro.Carousel>
        <Swiper
          modules={[Navigation, Pagination, Controller, Autoplay]}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={4.15}
          centeredSlides={false}
          allowTouchMove={false}
          pagination={{
            el: ".swiper-pagination", // pagination 컴포넌트를 표시할 위치 지정
            clickable: true, // pagination 버튼 클릭 가능 여부
            renderBullet: (index: number, className: string) => {
              // 각 pagination 버튼을 커스텀하는 함수
              return `<span class="${className}"></span> `; // 예시: 숫자로 된 pagination
            },
          }}
          onSwiper={(e: SwiperClass) => {
            setSwiper(e);
          }}
          onActiveIndexChange={(e: { realIndex: number }) =>
            setActiveIndex(e.realIndex)
          }
          loop={true}
          navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
          breakpoints={{
            300: {
              slidesPerView: 1.5,
              allowTouchMove: true,
              centeredSlides: true,
              spaceBetween: 16,
            },
            350: {
              slidesPerView: 1.5,
              centeredSlides: true,
              spaceBetween: 16,
              allowTouchMove: true,
            },
            500: {
              slidesPerView: 2.5,
              centeredSlides: true,
              spaceBetween: 20, // 이미지 간의 간격
              allowTouchMove: true,
            },
            1280: {
              slidesPerView: 3.5,
              centeredSlides: true,
              spaceBetween: 20, // 이미지 간의 간격
              slidesOffsetBefore: 80, // 첫 번째 슬라이드의 offset
              slidesOffsetAfter: 0, // 마지막 슬라이드의 offset
            },
            1536: {
              slidesPerView: 4.15,
              spaceBetween: 20, // 이미지 간의 간격
              slidesOffsetBefore: 0,
              slidesOffsetAfter: 50,
              centeredSlides: false,
            },
          }}
        >
          {data.map((item, idx) => {
            return (
              <SwiperSlide key={item.img + idx}>
                <Pro.BuildingContainer
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                  onClick={() => navigate(`/project/sales/${item.id}`)}
                >
                  <Pro.SwiperImg src={item.img} alt={item.img} />
                  <Pro.BuildingContent>
                    <Pro.BuildingName>
                      <p>{item.category}</p>
                      <h4>{item.name}</h4>
                    </Pro.BuildingName>
                    <span>100% 분양완료</span>
                  </Pro.BuildingContent>
                </Pro.BuildingContainer>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Pro.Pagination>
          <div className="swiper-pagination"></div>
          <div className="pagination-info">
            <p>{activeIndex + 1}</p>
            <p>/</p>
            <p>{data.length}</p>
          </div>
        </Pro.Pagination>

        <Pro.SwiperBtnContainer>
          <Pro.NaviButton id="swiper-back">
            <Pro.NextArrow />
          </Pro.NaviButton>
          <Pro.NaviButton id="swiper-forward">
            <Pro.PrevArrow />
          </Pro.NaviButton>
        </Pro.SwiperBtnContainer>
      </Pro.Carousel>
    </Pro.Wrapper>
  );
}

export default Projects;
