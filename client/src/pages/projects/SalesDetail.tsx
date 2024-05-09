import React, { useState, useEffect, useRef, useCallback } from "react";
import * as Dev from "../../styles/project/projectDetail.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { salesData } from "../../util/saleData";
import { useRecoilState } from "recoil";
import { headerStates } from "../../recoil/modal";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Image from "../../component/LazyImage";
import { motion } from "framer-motion";
import Title from "../../component/Title";
import Breadcrumb from "../../component/Breadcrumb";

// 데이터 타입 정의
type DataType = {
  id: number;
  name: string;
  img: string;
  category: string;
  location: string;
  houseHoldSum: string;
  scale: string;
  floorAreaRatio?: string;
  buildingCoverRatio?: string;
  landArea?: string;
  totalFloorArea?: string;
  businessTiming?: string;
};

function DevelopProjects() {
  const [data, setData] = useState<DataType>();
  const [state, setState] = useRecoilState(headerStates);
  const { id } = useParams();
  const navigate = useNavigate();

  const filterDataHandler = (id: number) => {
    salesData.forEach((item) => {
      if (item.id == Number(id)) {
        return setData(item);
      }
    });
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => {
    filterDataHandler(Number(id));
  }, [id]);
  useEffect(() => {
    setState((prev) => ({ ...prev, headerDefault: false }));
  }, []);
  return (
    <Dev.Wrapper>
      <Dev.Inner>
        <Breadcrumb sections={["PROJECTS", "입주·분양"]} />

        <Dev.Content>
          <Dev.Product>
            <Dev.BuildingName>
              {data && <Title data={data.name} />}
              <p>{data?.category}</p>
            </Dev.BuildingName>
            <Dev.ProductDetails>
              <Dev.BuildingImg>
                <img
                  src={process.env.PUBLIC_URL + data?.img}
                  alt="건물이미지"
                />
                <p>
                  상기 이미지 및 건축개요는 프로젝트 진행에 따라 다소 변경될 수
                  있습니다.
                </p>
              </Dev.BuildingImg>
              <Dev.BuildingInfo>
                <h3>OVERVIEW</h3>
                <Dev.InfoContainer>
                  <div>
                    <Dev.Th>
                      <p>구분</p>
                    </Dev.Th>
                    <Dev.Td>
                      <p>{data?.category}</p>
                    </Dev.Td>
                  </div>
                  <div>
                    <Dev.Th>
                      <p>위치</p>
                    </Dev.Th>
                    <Dev.Td>
                      <p>{data?.location}</p>
                    </Dev.Td>
                  </div>
                  <div>
                    <Dev.Th>
                      <p>세대수</p>
                    </Dev.Th>
                    <Dev.Td>
                      <p>{data?.houseHoldSum}</p>
                    </Dev.Td>
                  </div>
                  <div>
                    <Dev.Th>
                      <p>규모</p>
                    </Dev.Th>
                    <Dev.Td>
                      <p>{data?.scale}</p>
                    </Dev.Td>
                  </div>
                </Dev.InfoContainer>
              </Dev.BuildingInfo>
            </Dev.ProductDetails>
          </Dev.Product>
          <Dev.Carousel>
            <Dev.CarouselHeader>
              <h3>관련 프로젝트</h3>
              <div>
                <Dev.NaviButton id="swiper-back">
                  <Dev.NextArrow />
                </Dev.NaviButton>
                <Dev.NaviButton id="swiper-forward">
                  <Dev.PrevArrow />
                </Dev.NaviButton>
              </div>
            </Dev.CarouselHeader>
            <Swiper
              modules={[Navigation, Pagination, EffectCoverflow]}
              spaceBetween={50}
              slidesPerView={3}
              pagination={false}
              navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
              breakpoints={{
                300: {
                  slidesPerView: 1.6,
                  spaceBetween: 8,
                },

                550: {
                  slidesPerView: 2.8,
                  spaceBetween: 12,
                },
                820: {
                  slidesPerView: 3.2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              {salesData.map((item, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <Dev.CarouselDevelop
                      onClick={() => navigate(`/project/sales/${item.id}`)}
                    >
                      <Dev.CarouselImg>
                        <Image src={item.img} alt="프로젝트 건물이미지" />
                      </Dev.CarouselImg>
                      <Dev.CarouselTitle>{item.name}</Dev.CarouselTitle>
                    </Dev.CarouselDevelop>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Dev.Carousel>
        </Dev.Content>
      </Dev.Inner>
    </Dev.Wrapper>
  );
}

export default DevelopProjects;
