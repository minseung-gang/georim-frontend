import React, { useState, useRef, useEffect } from "react";
import * as Sales from "../../styles/home/sales.styeld";
import { promotionData } from "../../util/saleData";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import useHoverCursor from "../../hook/useHoverCursor";
import { Navigation, Autoplay } from "swiper/modules";

function SalesInfo() {
  const [data, setData] = useState(promotionData.slice(0, 4));
  const { cursor, handleHover, handleLeave } = useHoverCursor();
  const [dataInfo, setDataInfo] = useState({
    pricePerRoom: [1503, 3964],
    areaPrice: [29200, 191000],
    url: data[0].image,
  });
  const navigate = useNavigate();

  useEffect(() => {
    // 이벤트 핸들러 추가
    window.addEventListener("mousemove", cursor);

    // 컴포넌트 언마운트 시 이벤트 핸들러 제거
    return () => {
      window.removeEventListener("mousemove", cursor);
    };
  }, []);

  const mouseHoverHandler = (
    pricePerRoom: number[],
    areaPrice: number[],
    url: string
  ) => {
    setDataInfo({
      pricePerRoom: pricePerRoom,
      areaPrice: areaPrice,
      url,
    });
    handleHover();
  };

  return (
    <Sales.Wrapper>
      <Sales.TitleContainer>
        <Sales.Title>
          <h3>최신 분양 정보</h3>
        </Sales.Title>
        <Sales.TitleBtnCotainer onClick={() => navigate("/news/salesApt")}>
          <p>VIEW ALL</p>
          <Sales.RightArrow />
        </Sales.TitleBtnCotainer>
      </Sales.TitleContainer>
      <Sales.BrowserContent>
        <Sales.FlexBox className="inner flex-column gap-y-8 justify-center">
          {data.map((item, idx) => {
            return (
              <Sales.ContentDetails
                key={item.name + idx}
                onMouseEnter={() =>
                  mouseHoverHandler(
                    item.pyeng[0].areaPrice as number[],
                    item.pyeng[0].pricePerRoom as number[],
                    item.image
                  )
                }
                onMouseLeave={handleLeave}
                onClick={() =>
                  navigate(`/news/salesApt/pageDetail?order=${item.id}`)
                }
              >
                <Sales.Card className="card">
                  <Sales.ItemName>{item.name}</Sales.ItemName>
                  <Sales.FlexBox className="oth-info gap-x-31">
                    <p className="location_text">{item.location}</p>
                    <p className="category_text">{item.category}</p>
                  </Sales.FlexBox>
                </Sales.Card>
                <Sales.ArrowContainer>
                  <Sales.RightArrow2 />
                </Sales.ArrowContainer>
                <Sales.BackDrop className="backdrop">
                  <Sales.ArrowContainer>
                    <Sales.RightArrow />
                  </Sales.ArrowContainer>
                </Sales.BackDrop>
              </Sales.ContentDetails>
            );
          })}
        </Sales.FlexBox>
        <Sales.Image $link={dataInfo.url}>
          <Sales.ImageContainer className="m-t-24">
            <span className="sticker">분양중</span>
            <div>
              <Sales.PriceInfo>
                <p>분양가</p>
                <p className="sl-price">
                  {dataInfo.areaPrice[0].toLocaleString()}만원 - 최고{" "}
                  {dataInfo.areaPrice[1].toLocaleString()}만원
                </p>
              </Sales.PriceInfo>
              <Sales.PriceInfo>
                <p>평당가</p>
                <p className="py-price">
                  {dataInfo.pricePerRoom[0].toLocaleString()}만원 - 최고{" "}
                  {dataInfo.pricePerRoom[1].toLocaleString()}만원
                </p>
              </Sales.PriceInfo>
            </div>
          </Sales.ImageContainer>
        </Sales.Image>
      </Sales.BrowserContent>
      <Sales.MobileContent>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={16}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={2.5}
          centeredSlides={false}
          loop={true}
          navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
          breakpoints={{
            300: {
              slidesPerView: 1.6,
              slidesOffsetBefore: 16,
            },
            600: {
              slidesPerView: 2.5,
              slidesOffsetBefore: 30,
              slidesOffsetAfter: 50,
            },
          }}
        >
          {data.map((item, idx) => {
            return (
              <SwiperSlide
                key={item.name + idx}
                onClick={() =>
                  navigate(`/news/salesApt/pageDetail?order=${item.id}`)
                }
              >
                <Sales.SwiperContainer>
                  <Sales.SwiperContent>
                    <Sales.SwiperImage>
                      <img src={item.image} alt={item.image} />
                      <Sales.Status className="status">분양중</Sales.Status>
                    </Sales.SwiperImage>
                    <Sales.SwiperDetails>
                      <Sales.BuildingName>{item.name}</Sales.BuildingName>
                      <Sales.BuildingAddress>
                        {item.location}
                      </Sales.BuildingAddress>
                    </Sales.SwiperDetails>
                  </Sales.SwiperContent>
                  <Sales.ViewBtn>VIEW MORE</Sales.ViewBtn>
                </Sales.SwiperContainer>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Sales.MobileContent>
    </Sales.Wrapper>
  );
}

export default SalesInfo;
