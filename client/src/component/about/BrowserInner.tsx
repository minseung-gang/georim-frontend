import React, { useRef, useState, useEffect } from "react";
import * as History from "../../styles/history/history.styled";

interface BrowserInnerProps {
  index: number;
  sectionRefs: React.RefObject<HTMLDivElement>[];
}

function BrowserInner({ index, sectionRefs }: BrowserInnerProps) {
  return (
    <History.ContentInner>
      <History.Sticky className="sticky">
        <History.Title $active={index === 0}>
          <p className="basic" style={{ color: "#000" }}>
            새로운 도전,
          </p>
          <p>미래를 여는 순간</p>
        </History.Title>
        <History.Title $active={index === 1}>
          <p>새로운 시작을 위한 변화</p>
        </History.Title>
        <History.Title $active={index === 2}>
          <p>성장의 단계에 도달하다</p>
        </History.Title>
        <History.Title $active={index === 3}>
          <p>새로운 시작의 발판을 마련하다.</p>
        </History.Title>
      </History.Sticky>
      <History.Info className="history_info">
        <History.Card ref={sectionRefs[0]}>
          <History.Years>2023</History.Years>
          <History.Container>
            <History.ImageBox>
              <History.Project>
                대구 군위군 글램핑(숙박업)
                <br /> 토지매입 완료 사업 진행중
              </History.Project>
              <History.Img>
                <img
                  src={process.env.PUBLIC_URL + "/images/history_01.png"}
                  alt="군위군 글램핑"
                />
              </History.Img>
            </History.ImageBox>
          </History.Container>
        </History.Card>
        <History.Card ref={sectionRefs[1]}>
          <History.Years>2022</History.Years>
          <History.Container>
            <History.ImageBox>
              <History.Project>
                <span>대구 수성구 두산 N플레이스 준공</span>
              </History.Project>
              <History.Img>
                <img
                  src={process.env.PUBLIC_URL + "/images/history_02.jpg"}
                  alt="두산 N플레이스"
                />
              </History.Img>
            </History.ImageBox>
            <History.Description>
              <p>대구 지사 수성구 두산동 확장 이전</p>
            </History.Description>
          </History.Container>
        </History.Card>
        <History.Card>
          <History.Years>2021</History.Years>
          <History.Container>
            <History.ImageBox>
              <History.Project>부산지사 개설</History.Project>
              <History.Img>
                <img
                  src={process.env.PUBLIC_URL + "/images/history_03.jpg"}
                  alt="펜타플렉스 부산"
                />
              </History.Img>
            </History.ImageBox>
          </History.Container>
        </History.Card>
        <History.Card ref={sectionRefs[2]}>
          <History.Years>2020</History.Years>
          <History.Container>
            <History.ImageBox>
              <History.Project>
                대구 수성구
                <br />
                범어N타워 준공
              </History.Project>
              <History.Img>
                <img
                  src={process.env.PUBLIC_URL + "/images/history_04.jpg"}
                  alt="범어 N타워"
                />
              </History.Img>
            </History.ImageBox>
            <History.Description>
              <p>주식회사 거림개발 설립</p>
            </History.Description>
          </History.Container>
        </History.Card>
        <History.Card>
          <History.Years>2019</History.Years>
          <History.Container>
            <History.ImageBox>
              <History.Project>
                경북 구미시 <br />
                나비 메디컬타워 준공
              </History.Project>
              <History.Img>
                <img
                  src={process.env.PUBLIC_URL + "/images/history_05.jpg"}
                  alt="나비 메디컬타워"
                />
              </History.Img>
            </History.ImageBox>
          </History.Container>
        </History.Card>
        <History.Card>
          <History.Years>2018</History.Years>
          <History.Container>
            <History.ImageBox>
              <History.Project>
                경북 구미시
                <br />
                나비프라자 준공
              </History.Project>
              <History.Img>
                <img
                  src={process.env.PUBLIC_URL + "/images/history_06.png"}
                  alt="나비프라자"
                />
              </History.Img>
            </History.ImageBox>
            <History.Description>
              <p>대구지사 수성구 만촌동 사옥 이전</p>
            </History.Description>
          </History.Container>
        </History.Card>
        <History.Card ref={sectionRefs[3]}>
          <History.Years>2017</History.Years>
          <History.Container>
            <History.ImageBox>
              <History.Project>
                대구 달성군
                <br />
                나비타워 준공
              </History.Project>
              <History.Img>
                <img
                  src={process.env.PUBLIC_URL + "/images/history_07.png"}
                  alt="나비타워"
                />
              </History.Img>
            </History.ImageBox>
          </History.Container>
        </History.Card>
        <History.Card>
          <History.Years>2016</History.Years>
          <History.Container>
            <History.Project>주식회사 거림 설립</History.Project>
          </History.Container>
        </History.Card>
      </History.Info>
    </History.ContentInner>
  );
}

export default BrowserInner;
