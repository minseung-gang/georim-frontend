import React, { useState, useEffect } from "react";
import Breadcrumb from "../../component/Breadcrumb";
import * as Com from "../../styles/business/development.styled";
import * as About from "../../styles/about/greeting.styled";
import { useRecoilState } from "recoil";
import { headerStates } from "../../recoil/modal";
import { useTransform } from "framer-motion";
import useScroll from "../../hook/useScrollHook";
import banner from "../../asset/images/at_gt_banner.jpg";
import tagline from "../../asset/images/at_gt_01.png";
import sign from "../../asset/images/at_gt_02.png";
import { isBrowser } from "react-device-detect";

function Greeting() {
  const [state, setState] = useRecoilState(headerStates);

  useEffect(() => {
    setState((prev) => ({ ...prev, headerDefault: false }));
  }, []);

  const { scrollYProgress, position, scrollRef, ref } = useScroll();

  const IBrowser = useTransform(scrollYProgress, [0.15, 0], ["0%", "25%"]);
  const IMobile = useTransform(scrollYProgress, [0.15, 0], ["0%", "20%"]);

  const titleVariants = {
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.1,
      },
    },
  };

  const item = {
    onscreen: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Com.Wrapper>
      <Breadcrumb sections={["ABOUT", "인사말"]} />
      <Com.Main>
        <Com.Banner ref={ref}>
          <Com.BannerInner ref={scrollRef}>
            <Com.Sticky>
              <Com.TextLine>
                <About.PageTitle
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                  initial={{ y: 33, opacity: 0 }}
                  variants={titleVariants}
                >
                  CEO 인사말
                </About.PageTitle>
              </Com.TextLine>
              <Com.ImageContainer>
                {isBrowser ? (
                  <Com.Curtain className="left" style={{ width: IBrowser }} />
                ) : (
                  <Com.Curtain className="left" style={{ width: IMobile }} />
                )}

                <About.Banner
                  className="banner"
                  src={banner}
                  alt="배너 이미지"
                  width={1600}
                  height={700}
                />
                {isBrowser ? (
                  <Com.Curtain className="right" style={{ width: IBrowser }} />
                ) : (
                  <Com.Curtain className="right" style={{ width: IMobile }} />
                )}
              </Com.ImageContainer>
            </Com.Sticky>
          </Com.BannerInner>
        </Com.Banner>
        <About.Content>
          <About.Slogan
            src={tagline}
            alt="회사 슬로건 이미지"
            width={195}
            height={232}
          />
          <About.ContentDetails>
            <About.TextContainer>
              <p>
                <About.TextLine>
                  <About.Text>
                    안녕하십니까. 거림의 대표 곽동휴입니다.
                  </About.Text>
                </About.TextLine>
              </p>
              <p>
                <About.TextLine>
                  <About.Text>
                    21세기 경제 환경에서는 빠르게 변화하는 현실에 안주하지
                    않으면 살아남기 어려운 시대입니다. 우리는 부동산 분야에서
                    창의적이고 혁신적인 전략을 펼치며, 변화에 대응하고 끊임없이
                    발전하는 기업으로 거듭나고자 합니다. 거림은 부동산의 모든
                    영역에 걸친 종합 서비스를 제공하는 기업으로,
                    개발ㆍ시행ㆍ분양 ㆍ입주ㆍ임대ㆍ중개, 그리고 시장분석까지
                    포함한 다양한 부동산 서비스를 전문적으로 제공하고 있습니다.
                  </About.Text>
                </About.TextLine>
              </p>
              <div>
                <About.TextLine>
                  <About.Text>
                    하나의 프로젝트에 얼마나 많은 시간과 정성이 담기는지 잘 알고
                    있습니다. 우리는 고객과의 협업을 통해 프로젝트의 성공을 위해
                    열망하며, 최상의 결과를 창출하기 위해 노력하고 있습니다.
                    고객의 니즈를 정확히 파악하고, 미래를 예측하여 최고의
                    서비스를 제공하기 위해 최선을 다하고 있습니다. 또한, 거림은
                    고객에게 더 나은 가치를 제공하기 위해 지속적으로 노력합니다.
                    우리의 열정은 단순히 건물을 지으며 끝나지 않습니다.
                    프로젝트가 성공하고, 고객이 만족하는 순간까지, 그리고 미래를
                    위한 지속가능한 발전까지 고민하고 노력합니다.
                  </About.Text>
                </About.TextLine>
              </div>
              <div>
                <About.TextLine>
                  <About.Text>
                    고객과의 더 깊은 소통과 협력을 통해, 우리는 더 나은 미래를
                    만들어갈 것입니다. 앞으로도 거림은 항상 최상의 서비스로 고객
                    여러분의 기대에 부응하며, 부동산 분야에서 높은 신뢰를 얻을
                    수 있도록 노력할 것입니다. 프로젝트의 성공을 가장 열망하는
                    파트너로서, 거림은 얼마나 많은 노력이 투입되는지 잘 알고
                    있습니다. 우리는 열정적으로 일하며 지속적인 노력을 통해
                    최고의 결과를 창출해내고자 합니다.
                  </About.Text>
                </About.TextLine>
              </div>

              <About.TextLine>
                <About.Text>감사합니다.</About.Text>
              </About.TextLine>
            </About.TextContainer>
            <About.TextLine>
              <About.CompanyInfo>
                <About.LeaderName>거림 대표이사</About.LeaderName>
                <img className="sign" src={sign} alt="대표이사 사인이미지" />
              </About.CompanyInfo>
            </About.TextLine>
          </About.ContentDetails>
        </About.Content>
      </Com.Main>
    </Com.Wrapper>
  );
}

export default Greeting;
