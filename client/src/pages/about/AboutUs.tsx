import React, { useEffect } from "react";
import * as About from "../../styles/about/aboutus.styled";
import Breadcrumb from "../../component/Breadcrumb";
import outlineImage from "../../asset/images/at_main_01.png";
import devBiz from "../../asset/images/biz_dev_banner.png";
import offerBiz from "../../asset/images/biz_offer_banner.jpg";
import salesBiz from "../../asset/images/biz_sales_banner.jpg";
import { useRecoilState } from "recoil";
import { headerStates } from "../../recoil/modal";
import * as Dir from "../../styles/contact/directions.styled";
import { motion } from "framer-motion";
import {
  Map,
  CustomOverlayMap,
  MapTypeControl,
  ZoomControl,
  Polygon,
} from "react-kakao-maps-sdk";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const polygonPath = [
    {
      lat: 35.83776,
      lng: 128.6222,
    },
  ];
  const navigate = useNavigate();

  const [state, setState] = useRecoilState(headerStates);
  const title = {
    onscreen: {
      y: 0,
      transition: { delay: 0.3, duration: 0.5 },
    },
  };
  const subTitle = {
    onscreen: {
      y: 0,
      transition: { delay: 0.6, duration: 0.5 },
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
  useEffect(() => {
    setState((prev) => ({ ...prev, headerDefault: true }));
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <About.Banner>
        <About.BannerContent
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
        >
          <About.BannerTitle>
            <div>
              <About.TextLine>
                <motion.p
                  className="b_tit"
                  initial={{ y: 87 }}
                  variants={title}
                >
                  巨
                </motion.p>
              </About.TextLine>
              <About.TextLine>
                <motion.p
                  className="s_tit"
                  initial={{ y: 30 }}
                  variants={title}
                >
                  [클 거]
                </motion.p>
              </About.TextLine>
            </div>
            <div>
              <About.TextLine>
                <motion.p
                  className="b_tit"
                  initial={{ y: 87 }}
                  variants={title}
                >
                  林
                </motion.p>
              </About.TextLine>
              <About.TextLine>
                <motion.p
                  className="s_tit"
                  initial={{ y: 30 }}
                  variants={title}
                >
                  [수풀 림]
                </motion.p>
              </About.TextLine>
            </div>
          </About.BannerTitle>
          <About.BannerDesc>
            <About.TextLine>
              <About.BannerText initial={{ y: 27 }} variants={subTitle}>
                정직하고 투명한 기업문화를 실천하며,
              </About.BannerText>
            </About.TextLine>
            <About.TextLine>
              <About.BannerText initial={{ y: 27 }} variants={subTitle}>
                지속적으로 발전시켜 나가고 있습니다.
              </About.BannerText>
            </About.TextLine>
          </About.BannerDesc>
        </About.BannerContent>
        <About.ScrollMessage>
          <p translate="no">SCROLL</p>
          <About.ScrollBar />
        </About.ScrollMessage>
      </About.Banner>
      <About.Main>
        <Breadcrumb sections={["ABOUT", "회사소개"]} right />
        <About.MainContent>
          <div className="flex-column gp-4">
            <div className="flex-column gp-2">
              <motion.div
                className="flex-column gp-1"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.6 }}
              >
                <About.TextLine>
                  <About.Category initial={{ y: 30 }} variants={title}>
                    개요
                  </About.Category>
                </About.TextLine>
                <div>
                  <About.TextLine>
                    <About.SectionTitle initial={{ y: 109 }} variants={title}>
                      거림은 개발, 시행, 분양, 입주, 임대, 중개, 시장분석 등
                      부동산과 관련된 전반적인 서비스를 제공하는 부동산
                      기업입니다.
                    </About.SectionTitle>
                  </About.TextLine>
                </div>
              </motion.div>
              <div>
                <img src={outlineImage} alt="배경 이미지" />
              </div>
            </div>
            <About.Table>
              <About.TableItem>
                <p className="th">회사명</p>
                <p className="td">(주)거림</p>
              </About.TableItem>
              <About.TableItem>
                <p className="th">설립일</p>
                <p className="td">2016년</p>
              </About.TableItem>
              <About.TableItem>
                <p className="th">대표이사</p>
                <p className="td">곽동휴</p>
              </About.TableItem>
              <About.TableItem>
                <p className="th">업종</p>
                <p className="td">
                  개발, 시행, 분양, 입주, 중개,
                  <br />
                  시장분석 등 부동산 종합서비스
                </p>
              </About.TableItem>
              <About.TableItem>
                <p className="th">본사 소재지</p>
                <p className="td">
                  대구광역시 수성구 청수로 26길 46,
                  <br />
                  10층 1004호(두산동, 앤플레이스)
                </p>
              </About.TableItem>
              <About.TableItem>
                <p className="th">대표전화</p>
                <p className="td">1577-7493</p>
              </About.TableItem>
            </About.Table>
          </div>
          <About.BizSection>
            <motion.div
              className="flex-column gp-1"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0 }}
            >
              <About.TextLine>
                <About.Category initial={{ y: 30 }} variants={title}>
                  사업영역
                </About.Category>
              </About.TextLine>
              <div>
                <About.TextLine>
                  <About.SectionTitle initial={{ y: 108 }} variants={title}>
                    부동산 개발사업, 분양ㆍ입주 등 다양한 영역의 프로젝트 전
                    과정을 수행하는 종합 컨설팅 서비스를 제공합니다.
                  </About.SectionTitle>
                </About.TextLine>
              </div>
            </motion.div>
            <About.BizContent>
              <About.BizList
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.6 }}
              >
                <About.TextContainer
                  className="flex-column gp-5"
                  initial={{ x: -80, opacity: 0 }}
                  variants={slideText}
                >
                  <div className="flex-column gp-3">
                    <About.ArticleTitle>개발사업</About.ArticleTitle>
                    <About.ArticleDesc>
                      부동산 개발사업 사업주를 대상으로 사업기획부터 사용승인 및
                      준공까지 프로젝트의 모든 단계를 체계적으로 지원하는 종합
                      컨설팅 서비스를 제공합니다.
                    </About.ArticleDesc>
                  </div>
                  <About.OverviewBtn
                    onClick={() => navigate("/business/develop")}
                  >
                    사업소개 바로가기
                    <About.OverviewIcon />
                  </About.OverviewBtn>
                </About.TextContainer>
                <About.ImageContainer
                  initial={{ x: 80, opacity: 0 }}
                  variants={slideImage}
                >
                  <img src={devBiz} alt="개발사업 이미지" />
                </About.ImageContainer>
              </About.BizList>
              <About.BizList
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.6 }}
              >
                <About.ImageContainer
                  initial={{ x: -100, opacity: 0 }}
                  variants={slideImage}
                >
                  <img src={offerBiz} alt="분양사업 이미지" />
                </About.ImageContainer>
                <About.TextContainer
                  className="flex-column gp-5"
                  initial={{ x: 80, opacity: 0 }}
                  variants={slideText}
                >
                  <div className="flex-column gp-3">
                    <About.ArticleTitle>분양사업</About.ArticleTitle>
                    <About.ArticleDesc>
                      다양한 경험과 전문성을 겸비하여 사업지에 대한 정확한
                      이해와 분석을 통한 최상의 분양 마케팅 계획 수립을 바탕으로
                      안정적인 프로젝트의 성공을 수행합니다.
                    </About.ArticleDesc>
                  </div>
                  <About.OverviewBtn
                    onClick={() => navigate("/business/offer")}
                  >
                    사업소개 바로가기
                    <About.OverviewIcon />
                  </About.OverviewBtn>
                </About.TextContainer>
              </About.BizList>
              <About.BizList
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.6 }}
              >
                <About.TextContainer
                  className="flex-column gp-5"
                  initial={{ x: -80, opacity: 0 }}
                  variants={slideText}
                >
                  <div className="flex-column gp-3">
                    <About.ArticleTitle>입주사업</About.ArticleTitle>
                    <About.ArticleDesc>
                      분양완료세대, 미분양세대 다양한 케이스별 정확한 상황
                      체크를 통한 전략 수립 및 전문 인력 응대를 통한 회사 이미지
                      제고 및 고객 불편 최소화를 실행합니다.
                    </About.ArticleDesc>
                  </div>
                  <About.OverviewBtn
                    onClick={() => navigate("/business/sales")}
                  >
                    사업소개 바로가기
                    <About.OverviewIcon />
                  </About.OverviewBtn>
                </About.TextContainer>
                <About.ImageContainer
                  initial={{ x: 80, opacity: 0 }}
                  variants={slideImage}
                >
                  <img src={salesBiz} alt="입주사업 이미지" />
                </About.ImageContainer>
              </About.BizList>
            </About.BizContent>
          </About.BizSection>
          <div>
            <div className="flex-column gp-2">
              <motion.div
                className="flex-column gp-1"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
              >
                <About.TextLine>
                  <About.Category
                    className="ft-mont"
                    initial={{ y: 30 }}
                    variants={title}
                  >
                    Location
                  </About.Category>
                </About.TextLine>
                <About.TextLine>
                  <About.SectionTitle initial={{ y: 58 }} variants={title}>
                    본사 소재지
                  </About.SectionTitle>
                </About.TextLine>
              </motion.div>
              <About.MapContainer className="flex-column gp-4">
                <Map
                  id="map"
                  center={{ lat: 35.83776, lng: 128.6222 }}
                  zoomable={false}
                >
                  <MapTypeControl position={"TOPRIGHT"} />
                  <ZoomControl position={"RIGHT"} />
                  <CustomOverlayMap // 커스텀 오버레이를 표시할 Container
                    // 커스텀 오버레이가 표시될 위치입니다
                    position={{
                      lat: 35.83776,
                      lng: 128.6222,
                    }}
                  >
                    <Dir.CustomOverlay>
                      <Dir.OverlayInner>
                        <div>
                          <h4>거림</h4>
                          <p>대구시 수성구 청수로26길 46</p>
                        </div>
                        <Dir.BtnContainer>
                          <Dir.OverLayBtn
                            href="https://map.kakao.com/?q=대구 수성구 청수로26길 46"
                            target="_blank"
                          >
                            큰지도보기
                            <Dir.ArrowIcon />
                          </Dir.OverLayBtn>
                          <Dir.OverLayBtn
                            href="https://map.kakao.com/link/to/대구 수성구 청수로26길 46,35.8377605633418,128.622276287466"
                            target="_blank"
                          >
                            길찾기
                            <Dir.ArrowIcon />
                          </Dir.OverLayBtn>
                        </Dir.BtnContainer>
                      </Dir.OverlayInner>
                    </Dir.CustomOverlay>
                  </CustomOverlayMap>

                  <Polygon
                    path={polygonPath}
                    strokeWeight={3}
                    strokeColor={"#39DE2A"}
                    strokeOpacity={0.8}
                    strokeStyle={"longdash"}
                    fillColor={"#A2FF99"}
                    fillOpacity={0.7}
                  />
                </Map>
                <div>
                  <About.AddressKor>
                    대구광역시 수성구 청수로26길 46, 10층 1004호(두산동,
                    앤플레이스)
                  </About.AddressKor>
                  <About.AddressEng>
                    10th Floor, 46, Cheongsu-ro 26-gil, Suseong-gu, Daegu,
                    Republic of Korea
                  </About.AddressEng>
                </div>
              </About.MapContainer>
            </div>
          </div>
        </About.MainContent>
      </About.Main>
    </div>
  );
}

export default AboutUs;
