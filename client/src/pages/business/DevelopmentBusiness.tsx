import React, { useState, useEffect } from "react";
import Breadcrumb from "../../component/Breadcrumb";
import { buildingData } from "../../util/data";
import * as Dev from "../../styles/project/project.styled";
import * as Biz from "../../styles/business/development.styled";
import { useRecoilState } from "recoil";
import { headerStates } from "../../recoil/modal";
import { useTransform } from "framer-motion";
import useScroll from "../../hook/useScrollHook";
import { motion, Variants } from "framer-motion";
import biz_banner from "../../asset/images/biz_dev_banner.png";
import biz_bi_01 from "../../asset/images/biz_dev_bi_01.png";
import biz_bi_02 from "../../asset/images/biz_dev_bi_02.png";
import biz_bi_03 from "../../asset/images/biz_dev_bi_03.png";
import biz_bi_04 from "../../asset/images/biz_dev_bi_04.png";
import biz_bi_05 from "../../asset/images/biz_dev_bi_05.png";
import biz_bi_06 from "../../asset/images/biz_dev_bi_06.png";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { isMobile } from "react-device-detect";
import { getPostsByCategory } from "../../apis/services/posts";
import { ICardType } from "../../types/type";

function DevelopmentBusiness() {
  const [state, setState] = useRecoilState(headerStates);
  const [swiperList, setSwiperList] = useState<ICardType[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    setState((prev) => ({ ...prev, headerDefault: false }));
    window.scrollTo({
      top: 0,
    });
    async function getPostData() {
      const response = await getPostsByCategory("development");
      setSwiperList(response);
    }
    getPostData();
  }, []);

  const { scrollYProgress, position, scrollRef, ref } = useScroll();
  const [data, setData] = useState(buildingData.slice(0, 6));
  const width = useTransform(scrollYProgress, [0.05, 0], ["0%", "20%"]);

  const titleVariants = {
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
      y: 90,
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
      <Breadcrumb sections={["BUSINESS", "개발사업"]} />
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
                    개발사업
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
                    트렌드를 앞서가는 창의적인 생각과 고객 니즈에 맞추어
                  </span>
                  <span>
                    편리성과 유용성을 겸비한 새로운 공간 활용의 상품을 만들어
                    냅니다.
                  </span>
                </Biz.BannerTitle>
              </Biz.TextLine>
            </div>
            <Biz.TextLine>
              <Biz.BannerSubTitle variants={subTitle}>
                <span>
                  부동산 개발사업 사업주를 대상으로 사업기획부터 사용승인 및
                  준공까지
                </span>
                <span>
                  프로젝트의 모든 단계를 체계적으로 지원하는 종합 컨설팅
                  서비스를 제공합니다.
                </span>
              </Biz.BannerSubTitle>
            </Biz.TextLine>
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
                  개발 사업 업무 프로세스
                </motion.h4>
              </Biz.TextLine>
            </Biz.SectionTitle>
            <Biz.SectionContent>
              <Biz.ProcessOverview>
                <Biz.ProcessContainer>
                  <Biz.ProcessCard $active>
                    <Biz.Circle
                      initial={{ scale: 0.9 }}
                      variants={circleVariants}
                    >
                      <Biz.Order>01</Biz.Order>
                      <Biz.ProcessName>사업성 검토 서비스</Biz.ProcessName>
                    </Biz.Circle>
                  </Biz.ProcessCard>
                  <Biz.ProcessArrowIcon />
                  <Biz.ProcessCard>
                    <Biz.Circle>
                      <Biz.Order>02</Biz.Order>
                      <Biz.ProcessName>사업설계 및 인허가</Biz.ProcessName>
                    </Biz.Circle>
                  </Biz.ProcessCard>
                  <Biz.ProcessArrowIcon />
                  <Biz.ProcessCard>
                    <Biz.Circle>
                      <Biz.Order>03</Biz.Order>
                      <Biz.ProcessName>
                        시공사 선정 공정관리 서비스
                      </Biz.ProcessName>
                    </Biz.Circle>
                  </Biz.ProcessCard>
                  <Biz.ProcessArrowIcon />
                  <Biz.ProcessCard>
                    <Biz.Circle>
                      <Biz.Order>04</Biz.Order>
                      <Biz.ProcessName>분양대행 서비스</Biz.ProcessName>
                    </Biz.Circle>
                  </Biz.ProcessCard>
                  <Biz.ProcessArrowIcon />
                  <Biz.ProcessCard>
                    <Biz.Circle>
                      <Biz.Order>05</Biz.Order>
                      <Biz.ProcessName>준공 및 정산</Biz.ProcessName>
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
                        시간이 지날수록 커지는 가치를 생각합니다.
                      </motion.p>
                    </Biz.TextLine>
                    <div className="quote-marks marks-02" />
                  </Biz.ProcessTitle>

                  <Biz.ProcessDescription>
                    <Biz.TextLine>
                      <motion.div className="description" variants={subTitle}>
                        <span>
                          부동산 개발사업의 모든 과정을 체계적으로 수행하는 종합
                          컨설팅 서비스를 제공합니다.
                        </span>
                        <span>
                          사업기획, 설계, 금융조달, 시공사 선정, 공정관리,
                          분양대행부터 사용승인 및 준공까지
                        </span>
                        <span>
                          전 과정을 거림만의 전문성과 철저한 분석을 통해
                          완벽하게 수행하고 있습니다.
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
                              사업성 검토 서비스
                            </Biz.ServiceTitle>
                          </Biz.TextLine>
                        </Biz.ServiceHeader>
                      </div>
                      <Biz.ServiceContent>
                        <Biz.ServiceDescription>
                          시장을 조사하고, 기초 사업장의 가능성을 검토합니다.
                          이를 토대로 개발 계획을 수립하고, 사업의 타당성과
                          잠재적 위험을 분석하여 투자 가치를 평가합니다.
                          마지막으로 사업 계획을 구체화하고, 수익과 비용을
                          분석하여 수지를 평가하고 리스크를 관리합니다.
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
                            자금조달 금융 컨설팅
                          </Biz.ServiceTitle>
                        </Biz.ServiceHeader>
                      </div>
                      <div>
                        <Biz.ServiceDescription>
                          클라이언트의 여신을 파악하고, 에쿼티 대출, 브릿지론,
                          건축자금 대출, ABL 등 다양한 자금 조달 옵션을
                          검토합니다. 이를 기반으로 자금 조달의 기본 계획을
                          수립하고, 최적의 대출 상품을 제안합니다.
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

                          <Biz.ServiceTitle>
                            사업설계 및 인허가
                          </Biz.ServiceTitle>
                        </Biz.ServiceHeader>
                      </div>
                      <div>
                        <Biz.ServiceDescription>
                          건축물을 위한 계획, 기본 설계, 그리고 실시 설계를
                          수립합니다. 또한, 각종 심의 및 인허가 절차를 진행하여
                          건설에 필요한 승인을 취득합니다. 이를 통해 최적의
                          설계를 제시하여 건축물의 최대 볼륨을 제시합니다.
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

                          <Biz.ServiceTitle>
                            시공사 선정 및 공정관리 서비스
                          </Biz.ServiceTitle>
                        </Biz.ServiceHeader>
                      </div>
                      <div>
                        <Biz.ServiceDescription>
                          건설 업체의 시공 능력을 평가하고 최적의 파트너를
                          선정합니다. 다수의 건설 업체와의 네트워크를 구축하여
                          일정, 민원, 설계 변경, 그리고 기성 관리를 포함한
                          공정을 철저히 관리합니다.
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

                          <Biz.ServiceTitle>분양대행 서비스</Biz.ServiceTitle>
                        </Biz.ServiceHeader>
                      </div>
                      <div>
                        <Biz.ServiceDescription>
                          20년이상 경험이 있는 상담사들이 고객에게 전문적인
                          상담을 제공합니다. 마케팅 계획을 세우고, 분양 보증 및
                          승인 과정을 수행하여 광고 및 홍보를 효과적으로
                          수행합니다. 또한, 계약자 관리와 분양 대금의 수금을
                          철저히 관리하여 고객의 만족도를 높이고 안정적인 분양
                          프로세스를 제공합니다.
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

                        <Biz.ServiceTitle>
                          준공 및 정산, 사업마무리
                        </Biz.ServiceTitle>
                      </Biz.ServiceHeader>
                      <div>
                        <Biz.ServiceDescription>
                          건축물의 하자 보수를 철저히 관리하고, 잔금을 수납하며
                          등기 이전 및 PF 대출금 상환 등
                        </Biz.ServiceDescription>

                        <Biz.ServiceDescription>
                          의 절차를 진행합니다. 수익 결산과 최종 보고서 작성
                          또한 수행되며, 클라이언트의
                        </Biz.ServiceDescription>

                        <Biz.ServiceDescription>
                          요구를 검토하여 최종 사업을 마무리합니다.
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
                  initial={isMobile ? { y: 30 } : { y: 50 }}
                  variants={titleVariants}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                >
                  개발 사업 실적
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
                              width={380}
                              height={270}
                              src={`${
                                process.env.REACT_APP_SERVER_IP
                              }/dir/image/${item.url}?${Date.now()}`}
                              alt={item.name}
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
                                      {item.type}
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
                                      지하 {item.lowFloor}층 - 지상{" "}
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
                <Biz.OverviewBtn
                  onClick={() => navigate("/project/development")}
                >
                  사업실적 전체보기
                  <Biz.OverviewIcon />
                </Biz.OverviewBtn>
              </Biz.ProjectOverview>
            </Biz.ProjectContent>
          </Biz.Section>
          <Biz.BtnSection>
            <Biz.BtnContainer
              className="button"
              onClick={() => navigate("/business/sales")}
            >
              <Biz.SalesBackground className="curtain" />
              <Biz.PassBtn className="button_text">
                <Biz.LeftArrowIcon />
                <Biz.BtnText>입주사업</Biz.BtnText>
              </Biz.PassBtn>
            </Biz.BtnContainer>
            <Biz.BtnContainer
              className="button"
              onClick={() => navigate("/business/offer")}
            >
              <Biz.OfferBackground className="curtain" />
              <Biz.PassBtn className="button_text">
                <Biz.BtnText>분양사업</Biz.BtnText>
                <Biz.RightArrowIcon />
              </Biz.PassBtn>
            </Biz.BtnContainer>
          </Biz.BtnSection>
        </Biz.Content>
      </Biz.Inner>
    </Biz.Wrapper>
  );
}

export default DevelopmentBusiness;
