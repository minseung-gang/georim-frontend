import React, { useState, useEffect, useRef } from "react";
import * as Biz from "../../styles/home/achievements.styled";
import useCountUp from "../../hook/useCountUp";
import useIntersectionObserver from "../../hook/useIntersectionObserver";
import { useNavigate } from "react-router-dom";

function BusinessAchievements() {
  const [countState, setCountState] = useState(false);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const activeEventHandler = () => {
    setActive(true);
    setCountState(true);
  };
  const setObservationTarget = useIntersectionObserver(activeEventHandler);

  return (
    <Biz.Wrapper ref={setObservationTarget}>
      <Biz.Inner>
        <Biz.BusinessSection $active={active}>
          <Biz.TitleCaption>
            <p>사업실적누계</p>
            <h3>
              모두가 꺼리는 상품도
              <br /> 명확하게 답을 제시하여
              <br /> 성공분양 신화를 이어갑니다.
            </h3>
          </Biz.TitleCaption>
          <Biz.BtnContainer>
            <button onClick={() => navigate("/about")}>
              <span>회사소개</span> <Biz.PlusIcon />
            </button>
            <button onClick={() => navigate("/about/history")}>
              <span>주요 연혁</span> <Biz.PlusIcon />
            </button>
          </Biz.BtnContainer>
        </Biz.BusinessSection>
        <Biz.CardForm>
          <Biz.BusinessCard>
            <Biz.Achievement className="card_container">
              <Biz.AchieveDetails>
                <Biz.Count>{useCountUp(countState, 81)}</Biz.Count>
                <p className="unit_text selector">개</p>
              </Biz.AchieveDetails>
              <p>총 분양현장</p>
            </Biz.Achievement>
          </Biz.BusinessCard>
          <Biz.BusinessCard>
            <Biz.Achievement className="card_container">
              <Biz.AchieveDetails>
                <Biz.Count>{useCountUp(countState, 1501)}</Biz.Count>
                <p className="unit_text">세대</p>
              </Biz.AchieveDetails>
              <p>공동주택</p>
            </Biz.Achievement>
          </Biz.BusinessCard>
          <Biz.BusinessCard>
            <Biz.Achievement className="card_container">
              <Biz.AchieveDetails>
                <Biz.Count>{useCountUp(countState, 13248)}</Biz.Count>
                <p className="unit_text">세대</p>
              </Biz.AchieveDetails>
              <p>오피스텔/도시형생활주택</p>
            </Biz.Achievement>
          </Biz.BusinessCard>
          <Biz.BusinessCard>
            <Biz.Achievement className="card_container">
              <Biz.AchieveDetails>
                <Biz.Count>{useCountUp(countState, 1881)}</Biz.Count>
                <p className="unit_text">호실</p>
              </Biz.AchieveDetails>
              <p>상업시설 / 지식산업센터</p>
            </Biz.Achievement>
          </Biz.BusinessCard>
        </Biz.CardForm>
      </Biz.Inner>
    </Biz.Wrapper>
  );
}

export default BusinessAchievements;
