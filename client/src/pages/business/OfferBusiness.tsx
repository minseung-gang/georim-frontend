import React, { useState, useEffect } from "react";
import Breadcrumb from "../../component/Breadcrumb";
import * as Dev from "../../styles/project/project.styled";
import * as Biz from "../../styles/business/development.styled";
import { useRecoilState } from "recoil";
import { headerStates } from "../../recoil/modal";
import { useTransform, useSpring } from "framer-motion";
import useScroll from "../../hook/useScrollHook";
import { motion, Variants } from "framer-motion";
import biz_banner from "../../asset/images/biz_offer_banner.jpg";
import biz_bi_01 from "../../asset/images/biz_offer_bi_01.png";
import biz_bi_02 from "../../asset/images/biz_offer_bi_02.png";
import biz_bi_03 from "../../asset/images/biz_offer_bi_03.png";
import biz_bi_04 from "../../asset/images/biz_offer_bi_04.png";
import biz_bi_05 from "../../asset/images/biz_offer_bi_05.png";
import biz_bi_06 from "../../asset/images/biz_offer_bi_06.png";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { isMobile } from "react-device-detect";
import { getPostsByCategory } from "../../apis/services/posts";
import { ICardType } from "../../types/type";

function OfferBusiness() {
  const [state, setState] = useRecoilState(headerStates);
  const [swiperList, setSwiperList] = useState<ICardType[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    setState((prev) => ({ ...prev, headerDefault: false }));
    async function getPostData() {
      const response = await getPostsByCategory("sales");
      setSwiperList(response);
    }
    getPostData();
  }, []);

  const { scrollYProgress, position, scrollRef, ref } = useScroll();
  const width = useTransform(scrollYProgress, [0.15, 0], ["0%", "20%"]);

  const titleVariants = {
    offscreen: {
      y: 55,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  const subTitle: Variants = {
    offscreen: {
      opacity: 0,
      y: 55,
    },
    onscreen: {
      y: 0,
      opacity: 1,
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
      <Breadcrumb sections={["BUSINESS", "분양사업"]} />
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
                    분양사업
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
                  initial={{ y: 80, opacity: 0 }}
                  variants={titleVariants}
                >
                  <span>
                    다양한 경험과 전문성을 바탕으로 사업지에 대한 정확한 이해와
                    분석을 통해
                  </span>
                  <span>
                    최상의 분양 마케팅 전략을 수립하여 안정적인 프로젝트 성공을
                    이끌어냅니다.
                  </span>
                </Biz.BannerTitle>
              </Biz.TextLine>
            </div>
            <div>
              <Biz.TextLine>
                <Biz.BannerSubTitle variants={subTitle}>
                  <span>
                    상품에 대한 정확한 분석을 통해 시장 전체에 훈풍 영향을
                    전달하여 해당 상품과 연관된 다양한 이미지를 개선하는
                  </span>
                  <span>
                    단계별 빌드업으로 시장의 분위기를 전환하여 성공 분양을
                    만들어 냅니다.
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
                  분양 대행 업무 프로세스
                </motion.h4>
              </Biz.TextLine>
            </Biz.SectionTitle>
            <Biz.SectionContent>
              <Biz.ProcessOverview>
                <Biz.ProcessContainer>
                  <Biz.ProcessCard>
                    <Biz.Circle>
                      <Biz.Order>01</Biz.Order>
                      <Biz.ProcessName>
                        프로젝트 개시 마케팅 기획
                      </Biz.ProcessName>
                    </Biz.Circle>
                  </Biz.ProcessCard>
                  <Biz.ProcessCard $prev>
                    <Biz.Circle>
                      <Biz.Order>02</Biz.Order>
                      <Biz.ProcessName>
                        영업조직 운영 마케팅 실행
                      </Biz.ProcessName>
                    </Biz.Circle>
                  </Biz.ProcessCard>
                  <Biz.ProcessCard $active>
                    <Biz.Circle
                      initial={{ scale: 0.9 }}
                      variants={circleVariants}
                    >
                      <Biz.Order>03</Biz.Order>
                      <Biz.ProcessName>조기 분양 달성</Biz.ProcessName>
                    </Biz.Circle>
                  </Biz.ProcessCard>
                  <Biz.ProcessCard>
                    <Biz.Circle>
                      <Biz.Order>04</Biz.Order>
                      <Biz.ProcessName>계약자 관리</Biz.ProcessName>
                    </Biz.Circle>
                  </Biz.ProcessCard>
                  <Biz.ProcessCard>
                    <Biz.Circle>
                      <Biz.Order>05</Biz.Order>
                      <Biz.ProcessName>사후 관리 </Biz.ProcessName>
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
                        수요자는 하나의 상품을 분양 받기 위해 많은 정보 조사를
                        합니다.
                      </motion.p>
                    </Biz.TextLine>
                    <div className="quote-marks marks-02" />
                  </Biz.ProcessTitle>

                  <Biz.ProcessDescription className="offer">
                    <Biz.TextLine>
                      <motion.div className="description" variants={subTitle}>
                        <span>
                          이에 우리는 부동산 상품을 수요자들이 쉽게 접근할 수
                          있도록 알려야 하고, 상품의 가치와 비전을 명확히
                          전달해야
                        </span>
                        <span>
                          합니다. 거림은 포털, 뉴스, 블로그, 카페, sns, YouTube
                          등을 적극 활용하여 상품을 다양한 매체에 노출시키며,
                        </span>
                        <span>
                          20년 이상의 전문 상담 경험을 가진 영업팀이 상품의
                          가치와 비전을 안내해 드립니다.
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
                            <Biz.ServiceTitle>프로젝트 개시</Biz.ServiceTitle>
                          </Biz.TextLine>
                        </Biz.ServiceHeader>
                      </div>
                      <Biz.ServiceContent>
                        <Biz.ServiceDescription>
                          사업 주체와의 협의를 통해 프로젝트의 핵심 전략 및
                          범위를 설정합니다. 전담팀을
                        </Biz.ServiceDescription>

                        <Biz.ServiceDescription>
                          구성하고 사업 환경 및 입지 조사를 실시하여 SWOT 분석을
                          수행합니다. 사업의 컨셉을
                        </Biz.ServiceDescription>

                        <Biz.ServiceDescription>
                          설정하고 초기 프로젝트 방향을 확정합니다.
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

                          <Biz.ServiceTitle>마케팅 계획 수립</Biz.ServiceTitle>
                        </Biz.ServiceHeader>
                      </div>
                      <div>
                        <Biz.ServiceDescription>
                          분양 상품에 적합한 온·오프라인 분양 마케팅 컨셉을
                          설정하고 목표를 설정하여 판매
                        </Biz.ServiceDescription>

                        <Biz.ServiceDescription>
                          전략을 세우고, 각종 조사를 통해 개별 물건의 타당성을
                          분석하고 적정가치 평가합니다.
                        </Biz.ServiceDescription>

                        <Biz.ServiceDescription>
                          이를 바탕으로 마케팅 전략을 강화하고 효율성을
                          높입니다.
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

                          <Biz.ServiceTitle>영업조직 운영</Biz.ServiceTitle>
                        </Biz.ServiceHeader>
                      </div>
                      <div>
                        <Biz.ServiceDescription>
                          홍보관 운영 전략을 수립하고, 지역의 특성을 고려하여
                          홍보 및 영업 전략을 계획하고
                        </Biz.ServiceDescription>

                        <Biz.ServiceDescription>
                          특화된 영업 조직을 확보합니다. 분양 목표를 체크하고
                          관리하여 잔여 물량 해소 방안을
                        </Biz.ServiceDescription>

                        <Biz.ServiceDescription>
                          마련하며, 조직을 강화하고 보완합니다.
                        </Biz.ServiceDescription>
                      </div>
                    </Biz.ServiceContainer>
                  </Biz.ServiceDetails>
                  <Biz.ServiceImage
                    className="img-container"
                    initial={{ x: 100, opacity: 0 }}
                    variants={slideImage}
                  >
                    <img
                      src={biz_bi_03}
                      alt="업무 프로세스 관련 이미지"
                      width={380}
                      height={270}
                    />
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

                          <Biz.ServiceTitle>조기 분양 달성</Biz.ServiceTitle>
                        </Biz.ServiceHeader>
                      </div>
                      <div>
                        <Biz.ServiceDescription>
                          사전 수요 확보를 위한 전략을 구체화하고, 다양한
                          온·오프라인 영업 전략을 적극적으로
                        </Biz.ServiceDescription>

                        <Biz.ServiceDescription>
                          활용하여 초기 분양률을 극대화합니다. 또한, 물량 해소를
                          위해 다양한 프로모션 및
                        </Biz.ServiceDescription>

                        <Biz.ServiceDescription>
                          이벤트를 기획하고, 유연한 계약 조건과 다양한 혜택을
                          제공하는 등의 전략을 수립합니다.
                        </Biz.ServiceDescription>
                        <Biz.ServiceDescription>
                          또한, 고객들의 민원을 신속히 처리하여 조기 분양을
                          이룹니다
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
                          <Biz.ServiceOrder>05</Biz.ServiceOrder>

                          <Biz.ServiceTitle>계약자 관리</Biz.ServiceTitle>
                        </Biz.ServiceHeader>
                      </div>
                      <div>
                        <Biz.ServiceDescription>
                          계약자 이탈을 방지하기 위해 지속적으로 계약자와
                          소통하며, 전매 등 업체 관리를 통해
                        </Biz.ServiceDescription>

                        <Biz.ServiceDescription>
                          계약자 이탈을 최소화합니다. 계약 관련 모든 문의 사항에
                          신속하고 친절하게 대응하여
                        </Biz.ServiceDescription>

                        <Biz.ServiceDescription>
                          고객 만족도를 유지합니다.
                        </Biz.ServiceDescription>
                      </div>
                    </Biz.ServiceContainer>
                  </Biz.ServiceDetails>
                  <Biz.ServiceImage
                    className="img-container"
                    initial={{ x: 100, opacity: 0 }}
                    variants={slideImage}
                  >
                    <img src={biz_bi_05} alt="업무 프로세스 관련 이미지" />
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
                    <img src={biz_bi_06} alt="업무 프로세스 관련 이미지" />
                  </Biz.ServiceImage>
                  <Biz.ServiceDetails
                    initial={{ x: 100, opacity: 0 }}
                    variants={slideText}
                  >
                    <Biz.ServiceContainer>
                      <Biz.ServiceHeader>
                        <Biz.ServiceOrder>06</Biz.ServiceOrder>

                        <Biz.ServiceTitle>철저한 사후 관리</Biz.ServiceTitle>
                      </Biz.ServiceHeader>
                      <div>
                        <Biz.ServiceDescription>
                          입주부터 수분양자 관리를 강화하고, 발생 가능한 민원을
                          사전에 예방하여 고객들의
                        </Biz.ServiceDescription>

                        <Biz.ServiceDescription>
                          만족도를 높입니다. 이를 통해 수분양자에게 안정적이고
                          편안한 주거 환경을 제공하여
                        </Biz.ServiceDescription>

                        <Biz.ServiceDescription>
                          입주율을 극대화합니다. 또한, 입주 후에도 고객 만족도를
                          유지하기 위해 지속적인 관리를
                        </Biz.ServiceDescription>
                        <Biz.ServiceDescription>
                          진행합니다.
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
                    spaceBetween: 20,
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
                {swiperList.length > 0 &&
                  swiperList.map((item, idx) => {
                    return (
                      <SwiperSlide key={item.name + idx}>
                        <Biz.SwiperCard className="card">
                          <Dev.ImageBox>
                            <img
                              src={`${
                                process.env.REACT_APP_SERVER_IP
                              }/dir/image/${item.url}?${Date.now()}`}
                              alt={item.name}
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
                                      {item.houseHold}
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
                                      지하 {item.lowFloor}층 - 지상
                                      {item.highFloor}층
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
              onClick={() => navigate("/business/develop")}
            >
              <Biz.DevelopBackground className="curtain" />
              <Biz.PassBtn className="button_text">
                <Biz.LeftArrowIcon />
                <Biz.BtnText>개발 사업</Biz.BtnText>
              </Biz.PassBtn>
            </Biz.BtnContainer>
            <Biz.BtnContainer
              className="button"
              onClick={() => navigate("/business/sales")}
            >
              <Biz.SalesBackground className="curtain" />
              <Biz.PassBtn className="button_text">
                <Biz.BtnText>입주 사업</Biz.BtnText>
                <Biz.RightArrowIcon />
              </Biz.PassBtn>
            </Biz.BtnContainer>
          </Biz.BtnSection>
        </Biz.Content>
      </Biz.Inner>
    </Biz.Wrapper>
  );
}

export default OfferBusiness;
