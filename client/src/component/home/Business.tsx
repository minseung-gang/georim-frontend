import React, { useEffect, useRef, useState } from "react";
import * as Biz from "../../styles/home/business.styled";

import "aos/dist/aos.css";
import { throttle } from "throttle-debounce-ts";
function Business() {
  return (
    <Biz.Business>
      <Biz.BusinessContent>
        <Biz.BusinessForm>
          <Biz.BusinessCaption>
            <p>사업영역</p>
            <h3>BUSINESS</h3>
          </Biz.BusinessCaption>
          <div>
            <Biz.StikyWrapper>
              <Biz.BusinessContainer>
                <div>
                  <Biz.BusinessDetails>
                    <Biz.BusinessOrder>
                      <p>01</p>
                    </Biz.BusinessOrder>
                    <Biz.TitleContainer>
                      <Biz.BusinessTitle>개발사업</Biz.BusinessTitle>
                      <Biz.BusinessDesc>
                        거림은 부동산 개발사업과 관련하여 건설시행 대행업무가
                        필요한 사업주를 대상으로
                        <br /> 개발사업 업무를 위탁받아 체계적 분석을 통한 종합
                        컨설팅 서비스를 제공합니다.
                        <br /> 사업기획부터 사용승인 및 준공 등 프로젝트의 모든
                        단계를 체계적으로 지원합니다.
                      </Biz.BusinessDesc>
                      <Biz.BusinessBtn>
                        VIEW MORE <Biz.PlusIcon />
                      </Biz.BusinessBtn>
                    </Biz.TitleContainer>
                  </Biz.BusinessDetails>
                  <Biz.BusinessImageBox>
                    <Biz.BusinessImage>
                      <Biz.SubImage
                        src={
                          process.env.PUBLIC_URL + "/images/business_1_01.png"
                        }
                        alt="개발사업 서브이미지"
                      />
                    </Biz.BusinessImage>
                    <Biz.BusinessImage>
                      <Biz.SubImage
                        src={
                          process.env.PUBLIC_URL + "/images/business_1_02.png"
                        }
                        alt="개발사업 서브이미지"
                      />
                    </Biz.BusinessImage>
                    <Biz.BusinessImage>
                      <Biz.SubImage
                        src={
                          process.env.PUBLIC_URL + "/images/business_1_03.png"
                        }
                        alt="개발사업 서브이미지"
                      />
                    </Biz.BusinessImage>
                  </Biz.BusinessImageBox>
                </div>
                <Biz.MainImage>
                  <img
                    src={process.env.PUBLIC_URL + "/images/business_1_main.png"}
                    alt="개발사업 메인이미지"
                  />
                </Biz.MainImage>
              </Biz.BusinessContainer>
            </Biz.StikyWrapper>
          </div>
        </Biz.BusinessForm>
      </Biz.BusinessContent>
    </Biz.Business>
  );
}

export default Business;
