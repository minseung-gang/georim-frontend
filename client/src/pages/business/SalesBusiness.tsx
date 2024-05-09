import React, { useState, useEffect } from "react";
import Breadcrumb from "../../component/Breadcrumb";
import { salesData } from "../../util/saleData";
import * as Dev from "../../styles/project/project.styled";
import * as Biz from "../../styles/business/development.styled";
import { useRecoilState } from "recoil";
import { headerStates } from "../../recoil/modal";
import { useTransform } from "framer-motion";
import useScroll from "../../hook/useScrollHook";
import { motion, Variants } from "framer-motion";
import biz_banner from "../../asset/images/biz_sales_banner.jpg";
import biz_bi_01 from "../../asset/images/biz_sales_bi_01.png";
import biz_bi_02 from "../../asset/images/biz_sales_bi_02.png";
import biz_bi_03 from "../../asset/images/biz_sales_bi_03.jpg";
import biz_bi_04 from "../../asset/images/biz_sales_bi_04.png";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { isMobile } from "react-device-detect";

function SalesBusiness() {
  const [state, setState] = useRecoilState(headerStates);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    setState((prev) => ({ ...prev, headerDefault: false }));
  }, []);

  const { scrollYProgress, position, scrollRef, ref } = useScroll();
  const [data, setData] = useState(salesData.slice(0, 6));
  const width = useTransform(scrollYProgress, [0.15, 0], ["0%", "20%"]);

  const titleVariants = {
    onscreen: {
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  const subTitle: Variants = {
    offscreen: {
      y: 80,
    },
    onscreen: {
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
      },
    },
  };
  const circleVariants = {
    onscreen: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        bounce: 0.4,
        delay: 0.6,
        duration: 0.6,
      },
    },
  };
  const slideText = {
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        bounce: 1,
        duration: 1,
        delay: 0.2,
      },
    },
  };
  const slideImage = {
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        bounce: 1,
        duration: 1,
      },
    },
  };
  return (
    <Biz.Wrapper>
      <Breadcrumb sections={["BUSINESS", "입주사업"]} />
      <Biz.Inner>
        <Biz.Main>
          <Biz.Banner
            ref={ref}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
          >
            <Biz.BannerInner ref={scrollRef}>
              <Biz.Sticky>
                <Biz.TextLine>
                  <Biz.PageTitle initial={{ y: 80 }} variants={titleVariants}>
                    입주사업
                  </Biz.PageTitle>
                </Biz.TextLine>
                <Biz.ImageContainer>
                  <Biz.Curtain className="left" style={{ width: width }} />
                  <img
                    src={biz_banner}
                    alt="배너 이미지"
                    width={1600}
                    height={700}
                  />
                  <Biz.Curtain className="right" style={{ width: width }} />
                </Biz.ImageContainer>
              </Biz.Sticky>
            </Biz.BannerInner>
          </Biz.Banner>
          <Biz.BannerContent
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
          >
            <div>
              <Biz.TextLine>
                <Biz.BannerTitle
                  className="banner_title"
                  initial={{ y: 60 }}
                  variants={titleVariants}
                >
                  분양 후에도 수분양자의 만족도를 높이기 위하여 끊임없이
                  노력합니다.
                </Biz.BannerTitle>
              </Biz.TextLine>
            </div>
            <div>
              <Biz.TextLine>
                <Biz.BannerSubTitle className="sales " variants={subTitle}>
                  <span>
                    분양완료세대, 미분양세대를 사례별로 정확하게 파악하여, 각
                    상황에 맞게 전략을 세우를 향상시키며고, 이를 실행함으로써
                    고객 만족도와
                  </span>
                  <span>
                    브랜드에 대한 신뢰도를 높입니다. 또한, 전문 인력들이
                    친절하고 신속하게 대응하여 수분양자의 불만을 최소화하고,
                    발생하는 문제들에 신속하게 대처합니다.
                  </span>
                </Biz.BannerSubTitle>
              </Biz.TextLine>
            </div>
          </Biz.BannerContent>
        </Biz.Main>
        <Biz.Content
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
        >
          <Biz.Section>
            <Biz.SectionTitle>
              <span>PROCESS</span>
              <Biz.TextLine>
                <motion.h4 initial={{ y: 60 }} variants={titleVariants}>
                  입주 대행 업무 프로세스
                </motion.h4>
              </Biz.TextLine>
            </Biz.SectionTitle>
            <Biz.SectionContent>
              <Biz.ProcessOverview>
                <Biz.ProcessContainer>
                  <Biz.ProcessCard>
                    <Biz.Circle>
                      <Biz.Order>01</Biz.Order>
                      <Biz.ProcessName>입주 실태조사</Biz.ProcessName>
                    </Biz.Circle>
                  </Biz.ProcessCard>
                  <Biz.ProcessCard $prev>
                    <Biz.Circle>
                      <Biz.Order>02</Biz.Order>
                      <Biz.ProcessName>수분양자 인터뷰</Biz.ProcessName>
                    </Biz.Circle>
                  </Biz.ProcessCard>
                  <Biz.ProcessCard $active>
                    <Biz.Circle
                      initial={{ scale: 0.9 }}
                      variants={circleVariants}
                    >
                      <Biz.Order>03</Biz.Order>
                      <Biz.ProcessName>수분양자 입주촉진</Biz.ProcessName>
                    </Biz.Circle>
                  </Biz.ProcessCard>
                  <Biz.ProcessCard>
                    <Biz.Circle>
                      <Biz.Order>04</Biz.Order>
                      <Biz.ProcessName>입주지원센터 운영</Biz.ProcessName>
                    </Biz.Circle>
                  </Biz.ProcessCard>
                  <Biz.ProcessCard>
                    <Biz.Circle>
                      <Biz.Order>05</Biz.Order>
                      <Biz.ProcessName>미입주 세대 관리</Biz.ProcessName>
                    </Biz.Circle>
                  </Biz.ProcessCard>
                </Biz.ProcessContainer>
                <Biz.ProcessIntro
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Biz.ProcessTitle>
                    <div className="quote-marks marks-01" />
                    <Biz.TextLine>
                      <motion.p
                        className="title"
                        initial={{ y: 48 }}
                        variants={titleVariants}
                      >
                        새로운 시작이 더 가치 있을 수 있도록 합니다.
                      </motion.p>
                    </Biz.TextLine>
                    <div className="quote-marks marks-02" />
                  </Biz.ProcessTitle>

                  <Biz.ProcessDescription className="sales">
                    <Biz.TextLine>
                      <motion.div className="description" variants={subTitle}>
                        <span>
                          주택시장의 침체와 금리 인상, 입주 지연 등의 영향으로
                          분양 못지 않게 ‘입주 마케팅’의 중요성이 부각되고
                          있습니다.
                        </span>
                        <span>
                          부동산 정책 변화로 인한 불안 심리와 함께 미계약 및
                          미입주 현상이 증가하고 있어 건설사들은 입주 지연으로
                          인한 잔금
                        </span>
                        <span>
                          납입 문제에 직면할 수 있습니다. 이에 거림은 차별화된
                          입주 지원 서비스를 통한 입주 독려서비스를 제공하고
                          있습니다.
                        </span>
                      </motion.div>
                    </Biz.TextLine>
                  </Biz.ProcessDescription>
                </Biz.ProcessIntro>
              </Biz.ProcessOverview>
              <Biz.ProcessDetails>
                <Biz.ProcessList
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.6 }}
                >
                  <Biz.ServiceDetails
                    initial={{ x: -100, opacity: 0 }}
                    variants={slideText}
                  >
                    <Biz.ServiceContainer>
                      <div>
                        <Biz.ServiceHeader>
                          <Biz.TextLine>
                            <Biz.ServiceOrder>01</Biz.ServiceOrder>
                          </Biz.TextLine>
                          <Biz.TextLine>
                            <Biz.ServiceTitle>
                              수분양자 컨디션 체크
                            </Biz.ServiceTitle>
                          </Biz.TextLine>
                        </Biz.ServiceHeader>
                      </div>
                      <Biz.ServiceContent>
                        <Biz.ServiceDescription>
                          수분양자를 등급별로 분류하고, 각 수분양자의 성향을
                          체크합니다. 부동산 우군화
                        </Biz.ServiceDescription>

                        <Biz.ServiceDescription>
                          네트워크 교육을 진행하고 악성 세대를 조기에 발굴하여
                          적절한 대응을 수행합니다.
                        </Biz.ServiceDescription>
                      </Biz.ServiceContent>
                    </Biz.ServiceContainer>
                  </Biz.ServiceDetails>
                  <Biz.ServiceImage
                    className="img-container"
                    initial={{ x: 100, opacity: 0 }}
                    variants={slideImage}
                  >
                    <img src={biz_bi_01} alt="업무 프로세스 관련 이미지" />
                  </Biz.ServiceImage>
                </Biz.ProcessList>
                <Biz.ProcessList
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.6 }}
                >
                  <Biz.ServiceImage
                    className="img-container"
                    initial={{ x: -100, opacity: 0 }}
                    variants={slideImage}
                  >
                    <img src={biz_bi_02} alt="업무 프로세스 관련 이미지" />
                  </Biz.ServiceImage>
                  <Biz.ServiceDetails
                    initial={{ x: 100, opacity: 0 }}
                    variants={slideText}
                  >
                    <Biz.ServiceContainer>
                      <div>
                        <Biz.ServiceHeader>
                          <Biz.ServiceOrder>02</Biz.ServiceOrder>

                          <Biz.ServiceTitle>
                            입주 스케줄 확인 및 입주 촉진
                          </Biz.ServiceTitle>
                        </Biz.ServiceHeader>
                      </div>
                      <div>
                        <Biz.ServiceDescription>
                          입주를 촉진하기 위해 입주 계획을 수립하고, 잔금 납부
                          일정을 확인하여 시기적으로
                        </Biz.ServiceDescription>

                        <Biz.ServiceDescription>
                          준비합니다. 또한, 잔금 미납 세대에 대한 지속관리를
                          진행하며 민원 상담 인력을
                        </Biz.ServiceDescription>

                        <Biz.ServiceDescription>
                          배치합니다.
                        </Biz.ServiceDescription>
                      </div>
                    </Biz.ServiceContainer>
                  </Biz.ServiceDetails>
                </Biz.ProcessList>
                <Biz.ProcessList
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.6 }}
                >
                  <Biz.ServiceDetails
                    initial={{ x: -100, opacity: 0 }}
                    variants={slideText}
                  >
                    <Biz.ServiceContainer>
                      <div>
                        <Biz.ServiceHeader>
                          <Biz.ServiceOrder>03</Biz.ServiceOrder>

                          <Biz.ServiceTitle>입주지원센터 운영</Biz.ServiceTitle>
                        </Biz.ServiceHeader>
                      </div>
                      <div>
                        <Biz.ServiceDescription>
                          입주를 지원하기 위해 잔금납부 확인 및 관리를 진행하고,
                          입주증을 발급하고 키를
                        </Biz.ServiceDescription>

                        <Biz.ServiceDescription>
                          관리합니다. 또한, 시설물의 인수인계 절차를 수행하고
                          계량기 검침을 진행하여
                        </Biz.ServiceDescription>

                        <Biz.ServiceDescription>
                          입주자들의 편의를 도모합니다.
                        </Biz.ServiceDescription>
                      </div>
                    </Biz.ServiceContainer>
                  </Biz.ServiceDetails>
                  <Biz.ServiceImage
                    className="img-container"
                    initial={{ x: 100, opacity: 0 }}
                    variants={slideImage}
                  >
                    <img src={biz_bi_03} alt="업무 프로세스 관련 이미지" />
                  </Biz.ServiceImage>
                </Biz.ProcessList>
                <Biz.ProcessList
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.6 }}
                >
                  <Biz.ServiceImage
                    className="img-container"
                    initial={{ x: -100, opacity: 0 }}
                    variants={slideImage}
                  >
                    <img src={biz_bi_04} alt="업무 프로세스 관련 이미지" />
                  </Biz.ServiceImage>
                  <Biz.ServiceDetails
                    initial={{ x: 100, opacity: 0 }}
                    variants={slideText}
                  >
                    <Biz.ServiceContainer>
                      <div>
                        <Biz.ServiceHeader>
                          <Biz.ServiceOrder>04</Biz.ServiceOrder>

                          <Biz.ServiceTitle>미입주 세대 관리</Biz.ServiceTitle>
                        </Biz.ServiceHeader>
                      </div>
                      <div>
                        <Biz.ServiceDescription>
                          잔금 미납부 세대를 적극적으로 독려하고, 입주 촉진을
                          강화합니다. 또한, 해지에 대비한
                        </Biz.ServiceDescription>

                        <Biz.ServiceDescription>
                          방어 대책을 수립하고, 해지 요청이 들어온 세대의 재분양
                          전략을 마련합니다.
                        </Biz.ServiceDescription>
                      </div>
                    </Biz.ServiceContainer>
                  </Biz.ServiceDetails>
                </Biz.ProcessList>
              </Biz.ProcessDetails>
            </Biz.SectionContent>
          </Biz.Section>
          <Biz.Section>
            <Biz.SectionTitle>
              <span>PROJECTS</span>
              <Biz.TextLine>
                <motion.h4
                  initial={isMobile ? { y: 30 } : { y: 55 }}
                  variants={titleVariants}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                >
                  분양 · 입주 주요 사업실적
                </motion.h4>
              </Biz.TextLine>
            </Biz.SectionTitle>
            <Biz.ProjectContent
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Biz.SwiperNavBtn id="swiper-forward">
                <Biz.SwiperLeftArrow />
              </Biz.SwiperNavBtn>
              <Biz.SwiperNavBtn id="swiper-back">
                <Biz.SwiperRightArrow />
              </Biz.SwiperNavBtn>

              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                breakpoints={{
                  300: {
                    slidesPerView: 1.5,
                    centeredSlides: true,
                    spaceBetween: 12,
                  },
                  700: {
                    spaceBetween: 20,
                    slidesPerView: 3,
                  },
                  1024: {
                    spaceBetween: 30,
                    slidesPerView: 3,
                  },
                }}
                navigation={{
                  nextEl: "#swiper-forward",
                  prevEl: "#swiper-back",
                }}
              >
                {data.map((item, idx) => {
                  const lowerFloor = item.scale.split("/")[0];
                  const higherFloor = item.scale.split("/")[1];
                  return (
                    <SwiperSlide key={item.name + idx}>
                      <Biz.SwiperCard className="card">
                        <Dev.ImageBox>
                          <img
                            src={item.img}
                            alt="빌딩 이미지"
                            width={380}
                            height={270}
                          />
                        </Dev.ImageBox>
                        <Dev.CardContent>
                          <Biz.TextLine>
                            <motion.div
                              variants={subTitle}
                              viewport={{ once: true, amount: 0.2 }}
                            >
                              <Dev.BuildingsName className="buildings_name">
                                {item.name}
                              </Dev.BuildingsName>
                            </motion.div>
                          </Biz.TextLine>
                          <Dev.ContentInfo>
                            <Biz.TextLine>
                              <motion.div
                                variants={subTitle}
                                viewport={{ once: true, amount: 0.2 }}
                              >
                                <Dev.ContentItem>
                                  <Dev.TitleInfo>구분</Dev.TitleInfo>
                                  <Dev.ContentDetails>
                                    {item.category}
                                  </Dev.ContentDetails>
                                </Dev.ContentItem>
                              </motion.div>
                            </Biz.TextLine>

                            <Biz.TextLine>
                              <motion.div
                                variants={subTitle}
                                viewport={{ once: true, amount: 0.2 }}
                              >
                                <Dev.ContentItem>
                                  <Dev.TitleInfo>세대수</Dev.TitleInfo>
                                  <Dev.ContentDetails>
                                    {item.houseHoldSum}
                                  </Dev.ContentDetails>
                                </Dev.ContentItem>
                              </motion.div>
                            </Biz.TextLine>
                            <Biz.TextLine>
                              <motion.div
                                variants={subTitle}
                                viewport={{ once: true, amount: 0.2 }}
                              >
                                <Dev.ContentItem>
                                  <Dev.TitleInfo>규모</Dev.TitleInfo>
                                  <Dev.ContentDetails>
                                    {lowerFloor} - {higherFloor}
                                  </Dev.ContentDetails>
                                </Dev.ContentItem>
                              </motion.div>
                            </Biz.TextLine>
                          </Dev.ContentInfo>
                        </Dev.CardContent>
                      </Biz.SwiperCard>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <Biz.ProjectOverview>
                <Biz.OverviewBtn onClick={() => navigate("/project/sales")}>
                  사업실적 전체보기
                  <Biz.OverviewIcon />
                </Biz.OverviewBtn>
              </Biz.ProjectOverview>
            </Biz.ProjectContent>
          </Biz.Section>
          <Biz.BtnSection>
            <Biz.BtnContainer
              className="button"
              onClick={() => navigate("/business/offer")}
            >
              <Biz.OfferBackground className="curtain" />
              <Biz.PassBtn className="button_text">
                <Biz.LeftArrowIcon />
                <Biz.BtnText>분양 사업</Biz.BtnText>
              </Biz.PassBtn>
            </Biz.BtnContainer>
            <Biz.BtnContainer
              className="button"
              onClick={() => navigate("/business/develop")}
            >
              <Biz.DevelopBackground className="curtain" />
              <Biz.PassBtn className="button_text">
                <Biz.BtnText>개발 사업</Biz.BtnText>
                <Biz.RightArrowIcon />
              </Biz.PassBtn>
            </Biz.BtnContainer>
          </Biz.BtnSection>
        </Biz.Content>
      </Biz.Inner>
    </Biz.Wrapper>
  );
}

export default SalesBusiness;
