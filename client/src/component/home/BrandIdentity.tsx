import React, { useRef, useState } from "react";
import * as Biz from "../../styles/home/BI.styled";
import useIntersectionObserver from "../../hook/useIntersectionObserver";
import { useNavigate } from "react-router-dom";

function BrandIdentity() {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const activeEventHandler = () => {
    setActive(true);
  };
  const setObservationTarget = useIntersectionObserver(activeEventHandler);
  return (
    <Biz.Wrapper ref={setObservationTarget}>
      <Biz.Inner>
        <Biz.Bi>
          <Biz.TitleCaption $active={active}>
            <p translate="no">사업 영역</p>
            <h2>
              개발부터 분양 · 입주까지
              <br /> 부동산 one-stop시스템으로 프로젝트의 성공을 만듭니다.
            </h2>
          </Biz.TitleCaption>
          <Biz.ProjectList>
            <Biz.CardContainer>
              <Biz.BisinessCard onClick={() => navigate("/business/develop")}>
                <Biz.CardDetails>
                  <Biz.Title>개발사업</Biz.Title>
                  <Biz.Description>
                    부동산 개발사업 사업주를 대상으로 사업기획부터 사용승인 및
                    준공까지 프로젝트의 모든 단계를 체계적으로 지원하는 종합
                    컨설팅 서비스를 제공합니다.
                  </Biz.Description>
                </Biz.CardDetails>

                <Biz.ArrowBx className="arrow-btn">
                  <Biz.RightArrow />
                </Biz.ArrowBx>
              </Biz.BisinessCard>
              <Biz.BisinessCard onClick={() => navigate("/business/offer")}>
                <Biz.CardDetails>
                  <Biz.Title>분양사업</Biz.Title>
                  <Biz.Description>
                    다양한 경험과 전문성을 바탕으로 사업지에 대한 정확한 이해와
                    분석을 통해 최상의 분양 마케팅 전략을 수립하여 안정적인
                    프로젝트 성공을 이끌어냅니다.
                  </Biz.Description>
                </Biz.CardDetails>

                <Biz.ArrowBx className="arrow-btn">
                  <Biz.RightArrow />
                </Biz.ArrowBx>
              </Biz.BisinessCard>
              <Biz.BisinessCard onClick={() => navigate("/business/sales")}>
                <Biz.CardDetails>
                  <Biz.Title>입주사업</Biz.Title>
                  <Biz.Description>
                    미분양세대와 완료세대를 사례별로 파악하여 전략을 세우고,
                    실행함으로써 수분양자의 만족도와 브랜드 신뢰도를
                    향상시킵니다.
                  </Biz.Description>
                </Biz.CardDetails>

                <Biz.ArrowBx className="arrow-btn">
                  <Biz.RightArrow />
                </Biz.ArrowBx>
              </Biz.BisinessCard>
            </Biz.CardContainer>
          </Biz.ProjectList>
        </Biz.Bi>
      </Biz.Inner>
    </Biz.Wrapper>
  );
}

export default BrandIdentity;
