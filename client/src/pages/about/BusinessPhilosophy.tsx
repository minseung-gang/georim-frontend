import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { isBrowser, isMobile } from "react-device-detect";
import * as About from "../../styles/about/philosophy.styled";
import Breadcrumb from "../../component/Breadcrumb";
import bp_icon_01 from "../../asset/images/bp_icon_01.png";
import bp_icon_02 from "../../asset/images/bp_icon_02.png";
import bp_icon_03 from "../../asset/images/bp_icon_03.png";
import bp_bi_01 from "../../asset/images/bp_bi_01.png";
import bp_bi_02 from "../../asset/images/bp_bi_02.png";
import bp_bi_03 from "../../asset/images/bp_bi_03.png";
import RollingBanner from "../../component/about/RollingBanner";
import { useRecoilState } from "recoil";
import { headerStates } from "../../recoil/modal";

function BusinessPhilosophy() {
  const [state, setState] = useRecoilState(headerStates);

  useEffect(() => {
    setState((prev) => ({ ...prev, headerDefault: true }));
  }, []);

  const mainVariants = {
    onscreen: {
      y: 0,
      opacity: 1,
    },
  };

  const IconVariants = {
    onscreen: {
      scale: 1,
    },
  };
  const ImgVariants = {
    onscreen: {
      opacity: 1,
      y: 1,
    },
  };
  return (
    <div>
      <About.Banner>
        <About.BannerContent>
          <About.TextLine>
            <motion.h3
              initial={{ y: 70 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              우리는 사회적 책임 경영을 위해 노력합니다
            </motion.h3>
          </About.TextLine>
          <About.BannerSubTitle>
            <About.TextLine>
              <motion.p
                initial={{ y: 60 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                정직하고 투명한 기업문화를 실천하며,
              </motion.p>
            </About.TextLine>
            <About.TextLine>
              <motion.p
                initial={{ y: 60 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                지속적으로 발전시켜 나가고 있습니다.
              </motion.p>
            </About.TextLine>
          </About.BannerSubTitle>
        </About.BannerContent>

        <About.ScrollMessage>
          <p translate="no">SCROLL</p>
          <About.ScrollBar />
        </About.ScrollMessage>
      </About.Banner>
      <About.Main>
        <Breadcrumb sections={["ABOUT", "지속가능경영"]} right />
        <About.Inner>
          <About.Section className="responsive">
            <About.SectionHeader>
              <About.SectionCategory>윤리경영</About.SectionCategory>
              <About.TitleCotainer>
                <About.TextLine>
                  <About.Title
                    initial={{ y: 30, opacity: 0 }}
                    variants={mainVariants}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                  >
                    <span>윤리경영은 사회적 책임을 다하는 </span>
                    <span>기업으로서의 기본입니다. </span>
                  </About.Title>
                </About.TextLine>
              </About.TitleCotainer>
            </About.SectionHeader>
            <About.SectionContent>
              <About.CardSection
                initial={{ opacity: 0, y: 60 }}
                variants={ImgVariants}
                transition={
                  isMobile
                    ? {
                        type: "spring",
                        stiffness: 90,
                        bounce: 0.1,
                        duration: 0.5,
                      }
                    : {
                        type: "spring",
                        stiffness: 90,
                        bounce: 0.1,
                        duration: 0.5,
                        delay: 0.5,
                      }
                }
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
              >
                <About.IconBox>
                  <motion.img
                    src={bp_icon_01}
                    alt="아이콘이미지"
                    initial={{ scale: 0.8 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                      duration: 0.7,
                      delay: 1.2,
                    }}
                    variants={IconVariants}
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                  />
                </About.IconBox>
                <About.CardContent>
                  <About.TextLine>
                    <About.CardTitle>법과 윤리 준수</About.CardTitle>
                  </About.TextLine>
                  {isBrowser && (
                    <About.CardDetails>
                      <About.TextLine>
                        <About.ContentText>
                          철저한 준법과 윤리경영을 실천합니다. 지속적인 관심을
                        </About.ContentText>
                      </About.TextLine>
                      <About.TextLine>
                        <About.ContentText>
                          통해 준법 문화를 유지하고, 투명성과 신뢰성을 확보하며,
                        </About.ContentText>
                      </About.TextLine>
                      <About.TextLine>
                        <About.ContentText>
                          경영에서 신뢰를 얻을 수 있도록 노력하고 있습니다.
                        </About.ContentText>
                      </About.TextLine>
                    </About.CardDetails>
                  )}
                  {isMobile && (
                    <About.CardDetails>
                      <About.TextLine>
                        <About.ContentText>
                          지속적인 관심을 통해
                        </About.ContentText>
                      </About.TextLine>
                      <About.TextLine>
                        <About.ContentText>
                          투명성과 신뢰성을 확보합니다.
                        </About.ContentText>
                      </About.TextLine>
                    </About.CardDetails>
                  )}
                </About.CardContent>
              </About.CardSection>
              <About.CardSection
                initial={{ opacity: 0, y: 60 }}
                variants={ImgVariants}
                transition={
                  isMobile
                    ? {
                        type: "spring",
                        stiffness: 90,
                        bounce: 0.1,
                        duration: 0.5,
                      }
                    : {
                        type: "spring",
                        stiffness: 90,
                        bounce: 0.1,
                        duration: 0.5,
                        delay: 0.7,
                      }
                }
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
              >
                <About.IconBox>
                  <motion.img
                    src={bp_icon_02}
                    alt="아이콘이미지"
                    initial={{ scale: 0.8 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                      duration: 0.7,
                      delay: 1.4,
                    }}
                    variants={IconVariants}
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                  />
                </About.IconBox>
                <About.CardContent>
                  <About.TextLine>
                    <About.CardTitle>무관용 원칙</About.CardTitle>
                  </About.TextLine>
                  {isBrowser && (
                    <About.CardDetails>
                      <About.TextLine>
                        <About.ContentText>
                          부패와 뇌물에 대한 무관용 원칙을 엄격히 준수합니다.
                        </About.ContentText>
                      </About.TextLine>
                      <About.TextLine>
                        <About.ContentText>
                          모든 임직원이 공정하고 투명한 업무환경에서
                        </About.ContentText>
                      </About.TextLine>
                      <About.TextLine>
                        <About.ContentText>
                          일할 수 있도록 최선을 다하고 있습니다.
                        </About.ContentText>
                      </About.TextLine>
                    </About.CardDetails>
                  )}
                  {isMobile && (
                    <About.CardDetails>
                      <About.TextLine>
                        <About.ContentText>
                          공정하고 투명한 업무환경에서
                        </About.ContentText>
                      </About.TextLine>
                      <About.TextLine>
                        <About.ContentText>
                          일할 수 있도록 합니다.
                        </About.ContentText>
                      </About.TextLine>
                    </About.CardDetails>
                  )}
                </About.CardContent>
              </About.CardSection>
              <About.CardSection
                initial={{ opacity: 0, y: 60 }}
                variants={ImgVariants}
                transition={
                  isMobile
                    ? {
                        type: "spring",
                        stiffness: 90,
                        bounce: 0.1,
                        duration: 0.5,
                      }
                    : {
                        type: "spring",
                        stiffness: 90,
                        bounce: 0.1,
                        duration: 0.5,
                        delay: 0.9,
                      }
                }
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
              >
                <About.IconBox>
                  <motion.img
                    src={bp_icon_03}
                    alt="아이콘이미지"
                    initial={{ scale: 0.8 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                      duration: 0.7,
                      delay: 1.5,
                    }}
                    variants={IconVariants}
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                  />
                </About.IconBox>
                <About.CardContent>
                  <About.TextLine>
                    <About.CardTitle>정확한 기록</About.CardTitle>
                  </About.TextLine>
                  {isBrowser && (
                    <About.CardDetails>
                      <About.TextLine>
                        <About.ContentText>
                          모든 비용을 철저히 기록하여 부정행위를 방지하고,
                        </About.ContentText>
                      </About.TextLine>
                      <About.TextLine>
                        <About.ContentText>
                          투명한 정보를 통해 파트너사들과 신뢰를 쌓고 있습니다.
                        </About.ContentText>
                      </About.TextLine>
                      <About.TextLine>
                        <About.ContentText>
                          함께 성장하는 파트너로서 협력과 발전을 추구합니다.
                        </About.ContentText>
                      </About.TextLine>
                    </About.CardDetails>
                  )}
                  {isMobile && (
                    <About.CardDetails>
                      <About.TextLine>
                        <About.ContentText>
                          모든 비용을 철저히 기록하여
                        </About.ContentText>
                      </About.TextLine>
                      <About.TextLine>
                        <About.ContentText>
                          부정행위를 방지합니다.
                        </About.ContentText>
                      </About.TextLine>
                    </About.CardDetails>
                  )}
                </About.CardContent>
              </About.CardSection>
            </About.SectionContent>
          </About.Section>
          <About.Section>
            <About.SectionHeader>
              <About.SectionCategory>나눔경영 </About.SectionCategory>
              <About.TitleCotainer>
                <About.TextLine>
                  <About.Title
                    initial={{ y: 30, opacity: 0 }}
                    variants={mainVariants}
                    transition={
                      isMobile
                        ? { duration: 0.6 }
                        : { duration: 0.6, delay: 0.3 }
                    }
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                  >
                    나눔을 통해 더 나은 세상을 만들어갑니다.
                  </About.Title>
                </About.TextLine>
                <About.TextContainer>
                  <About.TextLine>
                    <About.SubTitle
                      initial={{ y: 22, opacity: 0 }}
                      variants={mainVariants}
                      transition={
                        isMobile
                          ? { duration: 0.6 }
                          : { duration: 0.6, delay: 0.7 }
                      }
                      whileInView="onscreen"
                      viewport={{ once: true, amount: 0 }}
                    >
                      나눔을 실천하여 사회적 가치를 높이고,
                    </About.SubTitle>
                  </About.TextLine>
                  <About.TextLine>
                    <About.SubTitle
                      initial={{ y: 22, opacity: 0 }}
                      variants={mainVariants}
                      transition={
                        isMobile
                          ? { duration: 0.6 }
                          : { duration: 0.6, delay: 0.75 }
                      }
                      whileInView="onscreen"
                      viewport={{ once: true, amount: 0 }}
                    >
                      기부 및 후원활동을 통해 실현하고 있습니다.
                    </About.SubTitle>
                  </About.TextLine>
                </About.TextContainer>
                <About.TextLine>
                  <About.SubTitle
                    initial={{ y: 22, opacity: 0 }}
                    variants={mainVariants}
                    transition={
                      isMobile
                        ? { duration: 0.6 }
                        : { duration: 0.6, delay: 0.8 }
                    }
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                  >
                    사회적 책임과 협력을 통해 지속가능한 발전을 추구합니다.
                  </About.SubTitle>
                </About.TextLine>
              </About.TitleCotainer>
            </About.SectionHeader>
            <About.SwiperWrapper>
              <RollingBanner />
            </About.SwiperWrapper>
          </About.Section>
          <About.Section className="management responsive">
            <About.SectionHeader>
              <About.SectionCategory>인재양성 </About.SectionCategory>
              <About.TitleCotainer>
                <About.TextLine>
                  <About.Title
                    initial={{ y: 30, opacity: 0 }}
                    variants={mainVariants}
                    transition={
                      isMobile
                        ? { duration: 0.6 }
                        : { duration: 0.6, delay: 0.3 }
                    }
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                  >
                    <span>우리는 서로의 성장을 축하하고</span>
                    <span>함께 희망찬 미래를 바라봅니다.</span>
                  </About.Title>
                </About.TextLine>
                <About.TextLine>
                  <About.SubTitle
                    initial={{ y: 22, opacity: 0 }}
                    variants={mainVariants}
                    transition={
                      isMobile
                        ? {
                            duration: 0.6,
                          }
                        : {
                            duration: 0.6,
                            delay: 0.6,
                          }
                    }
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                  >
                    성장을 응원하고 축하하며 함께 나아가는 문화를 형성하고
                    있습니다.
                  </About.SubTitle>
                </About.TextLine>
                <About.TextLine>
                  <About.SubTitle
                    initial={{ y: 22, opacity: 0 }}
                    variants={mainVariants}
                    transition={
                      isMobile
                        ? { duration: 0.6 }
                        : { duration: 0.6, delay: 0.6 }
                    }
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                  >
                    서로를 응원하며 더 나은 내일을 향해 함께 나아갑니다.
                  </About.SubTitle>
                </About.TextLine>
              </About.TitleCotainer>
            </About.SectionHeader>

            <About.SectionContent>
              <About.CardSection
                initial={{ opacity: 0, y: 60 }}
                variants={ImgVariants}
                transition={
                  isMobile
                    ? {
                        type: "spring",
                        bounce: 0.2,
                        stiffness: 90,
                        duration: 0.7,
                      }
                    : {
                        type: "spring",
                        bounce: 0.2,
                        stiffness: 90,
                        duration: 0.7,
                        delay: 0.5,
                      }
                }
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
              >
                <About.ImageBox>
                  <img src={bp_bi_01} alt="인재양성관련 이미지" />
                </About.ImageBox>
                <About.CardContent className="mt-4">
                  <About.CardTitle>함께 성장하는 기쁨</About.CardTitle>
                  <About.CardDetails className="card-detail">
                    <About.TextLine>
                      <About.ContentText>
                        투자 전략 세미나, 부동산 시장 동향 워크숍, 그리고
                      </About.ContentText>
                    </About.TextLine>
                    <About.TextLine>
                      <About.ContentText>
                        마케팅 교육과 전문가 지원을 통해, 임직원들의 기본
                      </About.ContentText>
                    </About.TextLine>
                    <About.TextLine>
                      <About.ContentText>
                        지식과 비즈니스 감각을 강화하고 있습니다.
                      </About.ContentText>
                    </About.TextLine>
                  </About.CardDetails>
                </About.CardContent>
              </About.CardSection>
              <About.CardSection
                initial={{ opacity: 0, y: 60 }}
                variants={ImgVariants}
                transition={
                  isMobile
                    ? {
                        type: "spring",
                        bounce: 0.2,
                        stiffness: 90,
                        duration: 0.7,
                      }
                    : {
                        type: "spring",
                        bounce: 0.2,
                        stiffness: 90,
                        duration: 0.7,
                        delay: 0.7,
                      }
                }
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
              >
                <About.ImageBox>
                  <img src={bp_bi_02} alt="인재양성관련 이미지" />
                </About.ImageBox>
                <About.CardContent className="mt-4">
                  <About.CardTitle>직무 전환의 기회</About.CardTitle>
                  <About.CardDetails className="card-detail">
                    <About.TextLine>
                      <About.ContentText>
                        직무전환 기회는 다양한 분야에서 전문성을 갖추고 타 부서
                      </About.ContentText>
                    </About.TextLine>
                    <About.TextLine>
                      <About.ContentText>
                        간 협력을 촉진하여 조직의 유연성과 성과 향상에
                      </About.ContentText>
                    </About.TextLine>
                    <About.TextLine>
                      <About.ContentText>
                        긍정적인 영향을 미칩니다.
                      </About.ContentText>
                    </About.TextLine>
                  </About.CardDetails>
                </About.CardContent>
              </About.CardSection>
              <About.CardSection
                initial={{ opacity: 0, y: 60 }}
                variants={ImgVariants}
                transition={
                  isMobile
                    ? {
                        type: "spring",
                        bounce: 0.2,
                        stiffness: 90,
                        duration: 0.7,
                      }
                    : {
                        type: "spring",
                        bounce: 0.2,
                        stiffness: 90,
                        duration: 0.7,
                        delay: 0.9,
                      }
                }
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
              >
                <About.ImageBox>
                  <img src={bp_bi_03} alt="인재양성관련 이미지" />
                </About.ImageBox>
                <About.CardContent className="mt-4">
                  <About.CardTitle>역량 개발 및 직무 교육</About.CardTitle>
                  <About.CardDetails className="card-detail">
                    <About.TextLine>
                      <About.ContentText>
                        전문성을 강화하기 위해 부동산 기초 이론, 시장 분석 & 트
                      </About.ContentText>
                    </About.TextLine>
                    <About.TextLine>
                      <About.ContentText>
                        렌드 파악, 투자 전략, 부동산 마케팅 등 교육을
                        지원합니다.
                      </About.ContentText>
                    </About.TextLine>
                    <About.TextLine>
                      <About.ContentText>
                        조직 전체가 함께 발전하는 힘을 만들어 내고 있습니다.
                      </About.ContentText>
                    </About.TextLine>
                  </About.CardDetails>
                </About.CardContent>
              </About.CardSection>
            </About.SectionContent>
          </About.Section>
        </About.Inner>
      </About.Main>
    </div>
  );
}

export default BusinessPhilosophy;
