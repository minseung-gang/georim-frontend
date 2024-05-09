import React, { useEffect, useState } from "react";
import { isMobile, isBrowser } from "react-device-detect";
import { useRecoilState } from "recoil";
import { headerStates } from "../../recoil/modal";
import * as Dir from "../../styles/contact/directions.styled";
import Layout from "../../component/Layout";
import {
  Map,
  CustomOverlayMap,
  MapTypeControl,
  ZoomControl,
  Polygon,
} from "react-kakao-maps-sdk";
import { motion } from "framer-motion";
import Breadcrumb from "../../component/Breadcrumb";

function Directions() {
  const [state, setState] = useRecoilState(headerStates);

  useEffect(() => {
    window.scrollTo(0, 0);
    setState((prev) => ({ ...prev, headerDefault: false }));
  }, []);

  const polygonPath = [
    {
      lat: 35.83776,
      lng: 128.6222,
    },
  ];
  return (
    <Layout>
      <Dir.Inner>
        <Breadcrumb sections={["CONTACT", "오시는 길"]} />

        <div>
          <div>
            <Dir.MainView>
              <Dir.TitleSection>
                <div>
                  <Dir.SectionTitle>
                    <motion.h3
                      initial={{ y: 80 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      거림에 오시는 길을
                    </motion.h3>
                  </Dir.SectionTitle>

                  <Dir.SectionTitle>
                    <motion.h3
                      initial={{ y: 80 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      안내드립니다
                    </motion.h3>
                  </Dir.SectionTitle>
                </div>

                {isMobile ? (
                  <Dir.ContactInfo>
                    <Dir.PhoneIcon />
                    <a href="tel:1577-7493" className="telephone">
                      1577-7493
                    </a>
                  </Dir.ContactInfo>
                ) : (
                  <Dir.ContactInfo>
                    <Dir.PhoneIcon />
                    <p className="telephone"> 1577-7493</p>
                  </Dir.ContactInfo>
                )}
              </Dir.TitleSection>

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
            </Dir.MainView>
            <Dir.CompanyAddress>
              <Dir.LocationIconBox>
                <Dir.LocationIcon />
              </Dir.LocationIconBox>
              <Dir.Address>
                대구광역시 수성구 청수로26길 46, 10층 1004호(두산동, 앤플레이스)
              </Dir.Address>
            </Dir.CompanyAddress>
            {isBrowser && (
              <Dir.CompanyInfo>
                <Dir.InfoCard>
                  <Dir.CardTitle>
                    <Dir.PhoneInfoIcon />
                    <Dir.Category>TEL</Dir.Category>
                  </Dir.CardTitle>
                  <Dir.InfoText>1577-7493</Dir.InfoText>
                </Dir.InfoCard>
                <Dir.InfoCard>
                  <Dir.CardTitle>
                    <Dir.FaxInfoIcon />
                    <Dir.Category>FAX</Dir.Category>
                  </Dir.CardTitle>
                  <Dir.InfoText>070-8230-6989</Dir.InfoText>
                </Dir.InfoCard>
                <Dir.InfoCard>
                  <Dir.CardTitle>
                    <Dir.EmailInfoIcon />
                    <Dir.Category>Email</Dir.Category>
                  </Dir.CardTitle>
                  <Dir.InfoText>georim8307@naver.com</Dir.InfoText>
                </Dir.InfoCard>
              </Dir.CompanyInfo>
            )}
            {isMobile && (
              <Dir.CompanyInfo>
                <Dir.InfoCard>
                  <Dir.CardTitle>
                    <Dir.CalendarIcon />
                    <Dir.Category>입주시기</Dir.Category>
                  </Dir.CardTitle>
                  <Dir.InfoText>1577-7493</Dir.InfoText>
                </Dir.InfoCard>
                <Dir.InfoCard>
                  <Dir.CardTitle>
                    <Dir.DoorIcon />
                    <Dir.Category>호실수</Dir.Category>
                  </Dir.CardTitle>
                  <Dir.InfoText>120호실, 20호실</Dir.InfoText>
                </Dir.InfoCard>
              </Dir.CompanyInfo>
            )}
          </div>
          <Dir.VisitGuide>
            <h3>방문안내</h3>
            <Dir.VisitInfo>
              <Dir.InfoItem>
                <Dir.InfoLabel>
                  <Dir.ClockIcon />
                  <Dir.InfoTitle>운영시간</Dir.InfoTitle>
                </Dir.InfoLabel>
                <Dir.InfoContent>
                  09:30 ~ 18:00 (점심시간 12:00~13:00)
                </Dir.InfoContent>
              </Dir.InfoItem>
              <Dir.InfoItem>
                <Dir.InfoLabel>
                  <Dir.CarIcon />
                  <Dir.InfoTitle>자가용 이용시</Dir.InfoTitle>
                </Dir.InfoLabel>
                <Dir.InfoContent>
                  건물 서측 지하 1-2층 주차장을 이용하시면 됩니다.
                </Dir.InfoContent>
              </Dir.InfoItem>
              <Dir.InfoItem>
                <Dir.InfoLabel>
                  <Dir.BusIcon />
                  <Dir.InfoTitle>버스 이용시</Dir.InfoTitle>
                </Dir.InfoLabel>
                <Dir.TransportInfo>
                  <Dir.TransportSection>
                    <Dir.TransportStopInfo>
                      <h4>황금네거리2</h4>
                      <p>259m, 도보 4분</p>
                    </Dir.TransportStopInfo>
                    <Dir.TransportRoutes>
                      <Dir.TransportRoute>
                        <Dir.BlueBtn>간선</Dir.BlueBtn>
                        <Dir.RouteDetail>204, 814, 8140</Dir.RouteDetail>
                      </Dir.TransportRoute>
                      <Dir.TransportRoute>
                        <Dir.GreenBtn>지선</Dir.GreenBtn>
                        <Dir.RouteDetail>수성 1-1, 수성 3-1</Dir.RouteDetail>
                      </Dir.TransportRoute>
                      <Dir.TransportRoute>
                        <Dir.RedBtn>급행</Dir.RedBtn>
                        <Dir.RouteDetail>급행 3</Dir.RouteDetail>
                      </Dir.TransportRoute>
                    </Dir.TransportRoutes>
                  </Dir.TransportSection>
                  <Dir.TransportSection>
                    <Dir.TransportStopInfo>
                      <h4>SK리더스뷰앞, 건너</h4>
                      <Dir.RouteDetail>267m, 도보 4분</Dir.RouteDetail>
                    </Dir.TransportStopInfo>
                    <Dir.TransportRoutes>
                      <Dir.TransportRoute>
                        <Dir.BlueBtn>간선</Dir.BlueBtn>
                        <Dir.RouteDetail>349</Dir.RouteDetail>
                      </Dir.TransportRoute>
                      <Dir.TransportRoute>
                        <Dir.GreenBtn>지선</Dir.GreenBtn>
                        <Dir.RouteDetail>수성 4</Dir.RouteDetail>
                      </Dir.TransportRoute>
                      <Dir.TransportRoute>
                        <Dir.YellowBtn>순환</Dir.YellowBtn>
                        <Dir.RouteDetail>순환 3-1</Dir.RouteDetail>
                      </Dir.TransportRoute>
                      <Dir.TransportRoute>
                        <Dir.GreenBtn2>농어촌</Dir.GreenBtn2>
                        <Dir.RouteDetail>0(대구), 0(칠성리)</Dir.RouteDetail>
                      </Dir.TransportRoute>
                    </Dir.TransportRoutes>
                  </Dir.TransportSection>
                  <Dir.TransportSection>
                    <Dir.TransportStopInfo>
                      <h4>헬로TV대구방송앞</h4>
                      <Dir.RouteDetail>668m, 도보 11분</Dir.RouteDetail>
                    </Dir.TransportStopInfo>
                    <Dir.TransportRoutes>
                      <Dir.TransportRoute>
                        <Dir.GreenBtn3>일반</Dir.GreenBtn3>
                        <Dir.RouteDetail>100</Dir.RouteDetail>
                      </Dir.TransportRoute>
                      <Dir.TransportRoute>
                        <Dir.BlueBtn>간선</Dir.BlueBtn>
                        <Dir.RouteDetail>234, 349</Dir.RouteDetail>
                      </Dir.TransportRoute>
                      <Dir.TransportRoute>
                        <Dir.GreenBtn>지선</Dir.GreenBtn>
                        <Dir.RouteDetail>수성 3-1, 수성 4</Dir.RouteDetail>
                      </Dir.TransportRoute>
                      <Dir.TransportRoute>
                        <Dir.YellowBtn>순환</Dir.YellowBtn>
                        <Dir.RouteDetail>순환 3</Dir.RouteDetail>
                      </Dir.TransportRoute>
                      <Dir.TransportRoute>
                        <Dir.GreenBtn2>농어촌</Dir.GreenBtn2>
                        <Dir.RouteDetail>0(풍각)</Dir.RouteDetail>
                      </Dir.TransportRoute>
                    </Dir.TransportRoutes>
                  </Dir.TransportSection>
                </Dir.TransportInfo>
              </Dir.InfoItem>
              <Dir.InfoItem>
                <Dir.InfoLabel>
                  <Dir.TrainIcon />
                  <Dir.InfoTitle>지하철 이용시</Dir.InfoTitle>
                </Dir.InfoLabel>
                <Dir.TransportInfo>
                  <Dir.TransportSection>
                    <Dir.TransportStopInfo>
                      <h4>황금역</h4>
                      <Dir.RouteDetail>397m, 도보 7분</Dir.RouteDetail>
                    </Dir.TransportStopInfo>
                    <Dir.TransportRoute>
                      <Dir.YellowBtn>3호선</Dir.YellowBtn>
                      <Dir.RouteDetail>황금역 1번출구</Dir.RouteDetail>
                    </Dir.TransportRoute>
                  </Dir.TransportSection>
                </Dir.TransportInfo>
              </Dir.InfoItem>
            </Dir.VisitInfo>
          </Dir.VisitGuide>
        </div>
      </Dir.Inner>
    </Layout>
  );
}

export default Directions;
