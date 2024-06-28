import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { headerStates } from "../../recoil/modal";
import { promotionData } from "../../util/saleData";
import * as Sales from "../../styles/news/saleApartmentDetail.styled";
import Tabs from "../../component/molecule/Tabs";
import KaKaoMap from "../../component/news/KaKaoMap";
import Title from "../../component/Title";
import Breadcrumb from "../../component/Breadcrumb";
import { getPromotionById } from "../../apis/services/posts";
import { ICardType } from "../../types/type";

function SaleApartmentDetail() {
  const [state, setState] = useRecoilState(headerStates);
  const [data, setData] = useState<ICardType>();
  const [isMobile, setIsMobile] = useState(false);
  const [searchParams] = useSearchParams();

  console.log(data, "data");
  async function fetchProductData() {
    const id = searchParams.get("order");
    try {
      if (id) {
        const response = await getPromotionById(parseInt(id));

        setData(response);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    setState((prev) => ({ ...prev, headerDefault: false }));
    fetchProductData();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setIsMobile(window.outerWidth <= 768);
    const handleResize = () => {
      setIsMobile(window.outerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const year = data?.developmentDate?.split(".")[0];
  const month = data?.developmentDate?.split(".")[1];
  const handleDownloadPDF = () => {
    const pdfURL = data?.fileLink;
    window.open(pdfURL, "_blank");
  };
  const moveToPage = () => {
    window.open(data?.homepage, "_blank");
  };
  return (
    <Sales.Wrapper>
      <Sales.Inner>
        <Breadcrumb sections={["NEWS", "분양정보"]} />
        <div>
          <Sales.Section className="product-section">
            <Sales.TitleBox>
              <Title data={data?.name ?? ""} />
              <Sales.Message>SCROLL DOWN</Sales.Message>
            </Sales.TitleBox>
            <Sales.ImgContainer>
              <img
                src={`${process.env.REACT_APP_SERVER_IP}/dir/image/${data?.url}`}
                alt={data?.name}
              />
            </Sales.ImgContainer>
          </Sales.Section>
          <Sales.AptInfo>
            <div>
              <Sales.Section className="product-info">
                <Sales.InfoHeader>
                  <Sales.FlexRow>
                    <Sales.InfoTitle>{data?.name}</Sales.InfoTitle>
                    <Sales.PromotionBtn>분양중</Sales.PromotionBtn>
                  </Sales.FlexRow>

                  {isMobile ? (
                    <Sales.MobilePhone href={"tel:" + data?.phone}>
                      <Sales.PhoneIcon />

                      {data?.phone}
                    </Sales.MobilePhone>
                  ) : (
                    <Sales.FlexRow>
                      <Sales.PhoneIcon />
                      <Sales.WebPhone>{data?.phone}</Sales.WebPhone>
                    </Sales.FlexRow>
                  )}
                </Sales.InfoHeader>
                <Sales.InfoContent>
                  <Sales.InfoCard>
                    <div>
                      <Sales.CategoryIcon />
                      <Sales.CardTitle>구분</Sales.CardTitle>
                    </div>
                    <Sales.CardContent>
                      {data?.type.join(", ")}
                    </Sales.CardContent>
                  </Sales.InfoCard>
                  <Sales.InfoCard>
                    <div>
                      <Sales.LocationIcon />
                      <Sales.CardTitle>위치</Sales.CardTitle>
                    </div>
                    <Sales.CardContent>{data?.address}</Sales.CardContent>
                  </Sales.InfoCard>
                  <Sales.InfoCard>
                    <div>
                      <Sales.CalendarIcon />
                      <Sales.CardTitle>입주시기</Sales.CardTitle>
                    </div>
                    <Sales.CardContent>
                      {year}년 {month}월
                    </Sales.CardContent>
                  </Sales.InfoCard>
                  <Sales.InfoCard>
                    <div>
                      <Sales.DoorIcon />
                      <Sales.CardTitle>호실수</Sales.CardTitle>
                    </div>
                    <Sales.CardContent>{data?.houseHold}</Sales.CardContent>
                  </Sales.InfoCard>
                </Sales.InfoContent>
              </Sales.Section>
              <Sales.Btn>
                {data?.fileLink && (
                  <Sales.BtnIcon>
                    <button onClick={() => handleDownloadPDF()}>
                      <Sales.FileIcon />
                      모집공고 확인하기
                    </button>
                  </Sales.BtnIcon>
                )}
                {data?.homepage && (
                  <Sales.BtnIcon>
                    <button onClick={() => moveToPage()}>
                      <Sales.HomeIcons />
                      홈페이지 바로가기
                    </button>
                  </Sales.BtnIcon>
                )}
              </Sales.Btn>
            </div>
            <Sales.Section className="pyeng-info">
              <Tabs value={0}>
                <Sales.SectionTitle>
                  <h4>분양가 안내</h4>
                  {data?.pyeng && (
                    <Tabs.List>
                      {data.pyeng.length > 1 &&
                        data?.pyeng.map((item, idx) => {
                          return (
                            <Tabs.Trigger value={idx} key={item.type + idx}>
                              <Sales.TriggerText>{item.name}</Sales.TriggerText>
                            </Tabs.Trigger>
                          );
                        })}
                    </Tabs.List>
                  )}
                </Sales.SectionTitle>
                {data?.pyeng &&
                  data.pyeng.map((item, idx) => {
                    // item의 타입에 따라서 다르게 처리
                    console.log("평 이미지", item);
                    if ("price" in item) {
                      // PyengWithPrice 타입의 경우

                      return (
                        <Tabs.Panel key={idx} value={idx}>
                          <Sales.PyengContent>
                            <Sales.PyeongImage>
                              <img
                                src={`${process.env.REACT_APP_SERVER_IP}/dir/image/${item.url}`}
                                alt="평면도 이미지"
                              />
                            </Sales.PyeongImage>
                            <Sales.PyengInfo>
                              <Sales.PyengInner>
                                <Sales.PyengTitle>
                                  {item.name} 타입
                                </Sales.PyengTitle>
                                <Sales.PyengValue>
                                  최저
                                  <span>
                                    <Sales.Price>
                                      {item.price?.[0].toLocaleString()}
                                    </Sales.Price>
                                    만원
                                  </span>
                                  ~ 최고
                                  <span>
                                    <Sales.Price>
                                      {item.price?.[1].toLocaleString()}
                                    </Sales.Price>
                                    만원
                                  </span>
                                </Sales.PyengValue>
                              </Sales.PyengInner>

                              <Sales.Description>
                                * 본 홈페이지에 사용된 평면도는 입주자의 이해를
                                돕기 위해 제작된 것으로 실제와 차이가 있을 수
                                있으며, 각종 인·허가 과정이나 현장 여건 등에
                                따라 변경 사항이 있을 수 있습니다.
                              </Sales.Description>
                            </Sales.PyengInfo>
                          </Sales.PyengContent>
                        </Tabs.Panel>
                      );
                    } else {
                      // PyengWithAreaPrice 타입의 경우
                      return (
                        <Tabs.Panel key={idx} value={idx}>
                          <Sales.PyengContent>
                            <Sales.PyeongImage>
                              <img
                                src={`${process.env.REACT_APP_SERVER_IP}/dir/image/${item.url}`}
                                alt=""
                              />
                            </Sales.PyeongImage>
                            <Sales.PyengInfo>
                              <div>
                                <Sales.PyengTitle>호실당</Sales.PyengTitle>
                                <Sales.PyengValue>
                                  최저
                                  <span>
                                    <Sales.Price>
                                      {item.pricePerRoom?.[0].toLocaleString()}
                                    </Sales.Price>
                                    만원
                                  </span>
                                  ~ 최고
                                  <span>
                                    <Sales.Price>
                                      {item.pricePerRoom?.[1].toLocaleString()}
                                    </Sales.Price>
                                    만원
                                  </span>
                                </Sales.PyengValue>
                              </div>
                              <div>
                                <Sales.PyengTitle>평당가</Sales.PyengTitle>
                                <Sales.PyengValue>
                                  최저
                                  <span>
                                    <Sales.Price>
                                      {item.areaPrice?.[0].toLocaleString()}
                                    </Sales.Price>
                                    만원
                                  </span>
                                  ~ 최고
                                  <span>
                                    <Sales.Price>
                                      {item.areaPrice?.[1].toLocaleString()}
                                    </Sales.Price>
                                    만원
                                  </span>
                                </Sales.PyengValue>
                              </div>
                              <Sales.Description>
                                * 본 홈페이지에 사용된 평면도는 입주자의 이해를
                                돕기 위해 제작된 것으로 실제와 차이가 있을 수
                                있으며, 각종 인·허가 과정이나 현장 여건 등에
                                따라 변경 사항이 있을 수 있습니다.
                              </Sales.Description>
                            </Sales.PyengInfo>
                          </Sales.PyengContent>
                        </Tabs.Panel>
                      );
                    }
                  })}
              </Tabs>
            </Sales.Section>
            {data?.map && (
              <div>
                <Sales.SectionTitle>
                  <h4>위치 정보</h4>
                </Sales.SectionTitle>
                <Sales.Map>
                  <div>
                    <KaKaoMap coordinates={data.map} />
                  </div>
                </Sales.Map>
              </div>
            )}
          </Sales.AptInfo>
        </div>
      </Sales.Inner>
    </Sales.Wrapper>
  );
}

export default SaleApartmentDetail;
