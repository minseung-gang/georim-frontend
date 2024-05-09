import React, { useState, useRef, useEffect } from "react";
import * as Emp from "../../styles/contact/empinfo.styled";
import Breadcrumb from "../../component/Breadcrumb";
import SwiperContainer from "../../component/contact/empinfo/SwiperContainer";
import contactBr_01 from "../../asset/images/contact_bi_01.png";
import contactBr_02 from "../../asset/images/contact_bi_02.png";
import contactBr_03 from "../../asset/images/contact_bi_03.png";
import contactIcon_01 from "../../asset/images/contact_icon_01.png";
import contactIcon_02 from "../../asset/images/contact_icon_02.png";
import contactIcon_03 from "../../asset/images/contact_icon_03.png";
import DropDown from "../../component/molecule/Dropdown";
import { useRecoilState } from "recoil";
import { headerStates } from "../../recoil/modal";
import { motion, useAnimate, useInView, Variants } from "framer-motion";
import { pushNotification } from "../../util/notification";

function EmpInfo() {
  const [state, setState] = useRecoilState(headerStates);
  useEffect(() => {
    setState((prev) => ({ ...prev, headerDefault: true }));
  }, []);
  const mainTitle: Variants = {
    offscreen: {
      y: 80,
    },
    onscreen: {
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
  };

  const mainTitle_2: Variants = {
    offscreen: {
      opacity: 0,
      y: 60,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        bounce: 0.2,
        delay: 0.7,
        duration: 0.3,
      },
    },
  };
  const subText: Variants = {
    offscreen: {
      y: 30,
    },
    onscreen: {
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };
  const subText_2: Variants = {
    offscreen: {
      opacity: 0,
      y: 40,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        bounce: 0.2,
        delay: 0.9,
        duration: 0.3,
      },
    },
  };

  const imgVariants_1: Variants = {
    offscreen: {
      x: 100,
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        bounce: 0.3,
        delay: 0.4,
        duration: 1,
      },
    },
  };
  const imgVariants_2: Variants = {
    offscreen: {
      x: -100,
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        bounce: 0.3,
        delay: 0.4,
        duration: 1,
      },
    },
  };
  return (
    <Emp.Wrapper>
      <Emp.Banner>
        <Emp.BannerContainer>
          <div>
            <Emp.BannerTitle
              initial={{ y: 90 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              함께 성장하는
            </Emp.BannerTitle>
          </div>
          <div>
            <Emp.BannerTitle
              initial={{ y: 90 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              더 큰 내일을 만들어 갑니다.
            </Emp.BannerTitle>
          </div>
        </Emp.BannerContainer>
        <Emp.ScrollBar>
          <p>거림과 함께 성장할 분양상담사 모집</p>
          <div></div>
        </Emp.ScrollBar>
      </Emp.Banner>
      <Emp.Main>
        <Breadcrumb sections={["CONTACT", "채용정보"]} right />
        <Emp.MainInner>
          <Emp.Recruit
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
          >
            <Emp.TitleSection className="sec-1">
              <span>Give it a shot!</span>

              <motion.h3 variants={mainTitle}>도전해 보세요!</motion.h3>
            </Emp.TitleSection>

            <Emp.RecruitContent>
              <Emp.RecruitInfo>
                <div>
                  <Emp.RecruitText>
                    <Emp.TextContainer>
                      <div>
                        <motion.p className="strong" variants={subText}>
                          나이무관 성별무관 학력무관 경력무관
                        </motion.p>
                      </div>
                      <div>
                        <motion.p variants={subText}>
                          하지만 돈에 대한 강한 열망과 일에 대한 열정은 반드시
                          있어야 합니다.
                        </motion.p>
                      </div>
                    </Emp.TextContainer>
                    <Emp.TextContainer>
                      <div>
                        <motion.p variants={subText}>
                          거림은 계약을 위한 철저한 시장 환경 분석 및 판매 전략
                          준비를 통해 여러분의 목표가 조기에 달성할 수 있도록
                          필요한 지원을 아낌없이 제공합니다.
                        </motion.p>
                      </div>
                    </Emp.TextContainer>
                  </Emp.RecruitText>
                </div>

                <Emp.Navigation>
                  <Emp.NaviButton id="swiper-back">
                    <Emp.NextArrow />
                  </Emp.NaviButton>
                  <Emp.NaviButton id="swiper-forward">
                    <Emp.PrevArrow />
                  </Emp.NaviButton>
                </Emp.Navigation>
              </Emp.RecruitInfo>
              <SwiperContainer />
            </Emp.RecruitContent>
          </Emp.Recruit>
          <div className="section">
            <Emp.TitleSection
              className="sec-2 flex-center"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0 }}
            >
              <span>직무소개</span>
              <div>
                <motion.h3 variants={mainTitle}>우리가 하는 일</motion.h3>
              </div>
            </Emp.TitleSection>
            <Emp.IntroSection>
              <Emp.IntroItem
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
              >
                <Emp.IntroDetails>
                  <div>
                    <Emp.IntroTitle variants={mainTitle_2}>
                      <img src={contactIcon_01} alt="아이콘이미지" />
                      <h4>영업활동</h4>
                    </Emp.IntroTitle>
                  </div>
                  <Emp.IntroDesc variants={subText_2}>
                    신입 직원은 신규 아파트, 오피스텔, 상업시설 등의 신규 부동산
                    상품 홍보를 위한 전화 홍보(텔레마케팅), 부동산MGM, 블로그
                    그리고 SNS 마케팅과 같은 다양한 활동을 통해 고객 확보를
                    최우선으로 합니다.
                  </Emp.IntroDesc>
                </Emp.IntroDetails>
                <Emp.IntroImageBox variants={imgVariants_1}>
                  <img src={contactBr_01} alt="영업활동 관련 이미지" />
                </Emp.IntroImageBox>
              </Emp.IntroItem>
              <Emp.IntroItem
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
              >
                <Emp.IntroImageBox variants={imgVariants_2}>
                  <img src={contactBr_02} alt="브리핑 관련 이미지" />
                </Emp.IntroImageBox>
                <Emp.IntroDetails>
                  <Emp.IntroTitle variants={mainTitle_2}>
                    <img src={contactIcon_02} alt="아이콘이미지" />
                    <h4>브리핑</h4>
                  </Emp.IntroTitle>
                  <Emp.IntroDesc variants={subText_2}>
                    경력 직원은 고객님에게 상권분석, 입지분석, 투자 수익률 분석
                    등, 정확한 안내를 제공하여 성공적인 투자를 할 수 있도록
                    고객과 소통하며 신뢰를 구축하고, 고객의 니즈를 파악하여
                    계약을 이끌어내는 것입니다.
                  </Emp.IntroDesc>
                </Emp.IntroDetails>
              </Emp.IntroItem>
              <Emp.IntroItem
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
              >
                <Emp.IntroDetails>
                  <Emp.IntroTitle variants={mainTitle_2}>
                    <img src={contactIcon_03} alt="아이콘이미지" />
                    <h4>고객관리</h4>
                  </Emp.IntroTitle>
                  <Emp.IntroDesc variants={subText_2}>
                    모든 직원은 고객과의 지속적인 접촉을 통해 고객의 니즈를
                    정확하게 파악하여 발생할 수 있는 문제나 어려움을 관리하여
                    최적의 컨설팅을 제공합니다. 또한, 고객님의 사후관리를 통한
                    애로사항을 지속적으로 케어합니다.
                  </Emp.IntroDesc>
                </Emp.IntroDetails>
                <Emp.IntroImageBox variants={imgVariants_1}>
                  <img src={contactBr_03} alt="고객관리 관련 이미지" />
                </Emp.IntroImageBox>
              </Emp.IntroItem>
            </Emp.IntroSection>
          </div>
          <div className="section">
            <Emp.TitleSection className="sec-3 flex-center">
              <span>자주 묻는 질문</span>
              <h3>FAQ</h3>
            </Emp.TitleSection>
            <div>
              <Emp.FAQContent>
                <DropDown>
                  <Emp.FAQContainer>
                    <DropDown.Trigger
                      icon1={<Emp.MinusIcon />}
                      icon2={<Emp.PlusIcon />}
                    >
                      <div className="faq-question">
                        <p>
                          <span className="highlight">Q.</span>
                          경력이 없어도 분양상담사가 될 수 있나요?
                        </p>
                      </div>
                    </DropDown.Trigger>
                    <DropDown.Dropdown>
                      <div className="faq-answer">
                        <p className="highlight">A.</p>
                        <p>
                          네. 나이, 학력, 경력, 자격증에 관계없이 분양상담사
                          일을 시작하실 수 있습니다.
                          <br /> 저희는 입사 후 관련 분야 전문가들로부터 충분한
                          교육 및 지원을 제공하여 분양상담사로서의 성장을
                          지원하고 있습니다.
                        </p>
                      </div>
                    </DropDown.Dropdown>
                  </Emp.FAQContainer>
                </DropDown>
                <DropDown>
                  <Emp.FAQContainer>
                    <DropDown.Trigger
                      icon1={<Emp.MinusIcon />}
                      icon2={<Emp.PlusIcon />}
                    >
                      <div className="faq-question">
                        <p>
                          <span className="highlight">Q.</span>
                          입사 지원과 면접은 어떻게 진행 되나요?
                        </p>
                      </div>
                    </DropDown.Trigger>
                    <DropDown.Dropdown>
                      <div className="faq-answer">
                        <p className="highlight">A.</p>
                        <p>
                          입사 지원 및 면접 진행 방법은 다음과 같습니다.
                          <br /> 먼저 하단의 채용공고 바로가기를 클릭하여
                          알바천국 홈페이지에서 간편입사지원을 진행하실 수
                          있습니다.
                          <br /> 또는 전화 또는 문자로 성함과 연락처를
                          보내주시면 담당자가 연락을 드려 면접 일정을 조율하고
                          1:1 개별 면접을 진행하게 됩니다. (인사 담당자 연락처:
                          010-8422-3464)
                        </p>
                      </div>
                    </DropDown.Dropdown>
                  </Emp.FAQContainer>
                </DropDown>
                <DropDown>
                  <Emp.FAQContainer>
                    <DropDown.Trigger
                      icon1={<Emp.MinusIcon />}
                      icon2={<Emp.PlusIcon />}
                    >
                      <div className="faq-question">
                        <p>
                          <span className="highlight"> Q.</span>
                          지인과 동반 입사 가능한가요?
                        </p>
                      </div>
                    </DropDown.Trigger>
                    <DropDown.Dropdown>
                      <div className="faq-answer">
                        <p className="highlight">A.</p>
                        <p>
                          네, 지인과 함께 입사하실 수 있습니다. 일을 하려는
                          열정과 의지가 있으면 충분합니다.
                          <br /> 추가로 궁금한 사항이 있으시면 언제든 문의해
                          주세요.
                        </p>
                      </div>
                    </DropDown.Dropdown>
                  </Emp.FAQContainer>
                </DropDown>
              </Emp.FAQContent>
              <Emp.FAQDescription>
                <div className="contact-info">
                  <p className="manager-name">인사 담당자</p>

                  <span className="manager-phone">
                    <Emp.PhoneIcon />
                    010-8244-3464
                  </span>
                </div>
                <p className="notice">
                  ※ 분양상담사 상시 모집 중입니다. 궁금한 사항이 있으면 언제든
                  문의주세요.
                </p>
              </Emp.FAQDescription>
            </div>
          </div>
        </Emp.MainInner>
      </Emp.Main>
      <Emp.Apply>
        <Emp.DirectBtn
          onClick={() => {
            pushNotification(
              "공고와 관련된 문의는 채용 담당자에게 연락부탁드립니다.",
              "warning"
            );
          }}
        >
          <a href="#">채용공고 홈페이지에서 바로 지원하기</a>
          <Emp.ArrowIcon />
        </Emp.DirectBtn>
        <Emp.ApplyBanner>
          <p>지금이 기회입니다! </p>
          <h4>
            경제적 자유를
            <br />
            원하시는 분 모집
          </h4>
        </Emp.ApplyBanner>
      </Emp.Apply>
    </Emp.Wrapper>
  );
}

export default EmpInfo;
