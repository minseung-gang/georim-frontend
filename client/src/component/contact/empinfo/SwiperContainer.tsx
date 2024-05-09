import React from "react";
import * as Emp from "../../../styles/contact/empinfo.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
function SwiperContainer() {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={-30}
      slidesPerView={2.5}
      pagination={{ clickable: true }}
      loop={false}
      breakpoints={{
        300: {
          slidesPerView: 1.4,
          spaceBetween: 10,
        },
        650: {
          slidesPerView: 2.3,
          spaceBetween: 12,
        },
        900: {
          slidesPerView: 1.8,
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: 2.3,
          spaceBetween: 10,
        },
        1700: {
          slidesPerView: 2.6,
          spaceBetween: 20,
        },
      }}
      navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
    >
      <SwiperSlide>
        <Emp.Card>
          <Emp.CardHeader>
            <Emp.Annual>1년차</Emp.Annual>
            <Emp.StaffInfo>
              <p className="employee-name">최OO주임</p>
              <p className="employee-age">25살</p>
            </Emp.StaffInfo>
          </Emp.CardHeader>
          <Emp.StaffDetails>
            <Emp.StaffPay>
              <p>연간 총 수입</p>
              <h5>8,900만원</h5>
            </Emp.StaffPay>
            <Emp.PropertyDetails>
              <Emp.Property>
                <p className="strong">아파트</p>
                <div>
                  <p>건당 300만원</p>
                  <div>
                    <p>X</p>
                    <p>13건</p>
                  </div>
                </div>
              </Emp.Property>
              <Emp.Property>
                <p className="strong">상가</p>
                <div>
                  <p>건당 2,500만원</p>
                  <div>
                    <p>X</p>
                    <p>2건</p>
                  </div>
                </div>
              </Emp.Property>
            </Emp.PropertyDetails>
          </Emp.StaffDetails>
        </Emp.Card>
      </SwiperSlide>
      <SwiperSlide>
        <Emp.Card>
          <Emp.CardHeader>
            <Emp.Annual>3년차</Emp.Annual>
            <Emp.StaffInfo>
              <p className="employee-name">이OO과장</p>
              <p className="employee-age">34살</p>
            </Emp.StaffInfo>
          </Emp.CardHeader>
          <Emp.StaffDetails>
            <Emp.StaffPay>
              <p>연간 총 수입</p>
              <h5>1억 3,500만원</h5>
            </Emp.StaffPay>
            <Emp.PropertyDetails>
              <Emp.Property>
                <p className="strong">오피스텔</p>
                <div>
                  <p>건당 250만원</p>
                  <div>
                    <p>X</p>
                    <p>22건</p>
                  </div>
                </div>
              </Emp.Property>
              <Emp.Property>
                <p className="strong">상가</p>
                <div>
                  <p>건당 2,000만원</p>
                  <div>
                    <p>X</p>
                    <p>4건</p>
                  </div>
                </div>
              </Emp.Property>
            </Emp.PropertyDetails>
          </Emp.StaffDetails>
        </Emp.Card>
      </SwiperSlide>
      <SwiperSlide>
        <Emp.Card>
          <Emp.CardHeader>
            <Emp.Annual>3년차</Emp.Annual>
            <Emp.StaffInfo>
              <p className="employee-name">이OO실장</p>
              <p className="employee-age">45살</p>
            </Emp.StaffInfo>
          </Emp.CardHeader>
          <Emp.StaffDetails>
            <Emp.StaffPay>
              <p>연간 총 수입</p>
              <h5>2억 2,2000만원</h5>
            </Emp.StaffPay>
            <Emp.PropertyDetails>
              <Emp.Property>
                <p className="strong">오피스텔</p>
                <div>
                  <p>건당 250만원</p>
                  <div>
                    <p>X</p>
                    <p>13건</p>
                  </div>
                </div>
              </Emp.Property>
              <Emp.Property>
                <p className="strong">아파트</p>
                <div>
                  <p>건당 300만원</p>
                  <div>
                    <p>X</p>
                    <p>13건</p>
                  </div>
                </div>
              </Emp.Property>
              <Emp.Property>
                <p className="strong">상가</p>
                <div>
                  <p>건당 2,000만원</p>
                  <div>
                    <p>X</p>
                    <p>2건</p>
                  </div>
                </div>
              </Emp.Property>
            </Emp.PropertyDetails>
          </Emp.StaffDetails>
        </Emp.Card>
      </SwiperSlide>
      <SwiperSlide>
        <Emp.Card>
          <Emp.CardHeader>
            <Emp.Annual>7년차</Emp.Annual>
            <Emp.StaffInfo>
              <p className="employee-name">박OO팀장</p>
              <p className="employee-age">28살</p>
            </Emp.StaffInfo>
          </Emp.CardHeader>
          <Emp.StaffDetails>
            <Emp.StaffPay>
              <p>연간 총 수입</p>
              <h5>1억 8,400만원</h5>
            </Emp.StaffPay>
            <Emp.PropertyDetails>
              <Emp.Property>
                <p className="strong">오피스텔</p>
                <div>
                  <p>건당 200만원</p>
                  <div>
                    <p>X</p>
                    <p>2건</p>
                  </div>
                </div>
              </Emp.Property>
              <Emp.Property>
                <p className="strong">상가</p>
                <div>
                  <p>건당 3,000만원</p>
                  <div>
                    <p>X</p>
                    <p>6건</p>
                  </div>
                </div>
              </Emp.Property>
            </Emp.PropertyDetails>
          </Emp.StaffDetails>
        </Emp.Card>
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperContainer;
