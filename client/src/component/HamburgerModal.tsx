import React, { useEffect, useState, useRef } from "react";
import * as Component from "../styles/Header.styled";
import DropDown from "./molecule/Dropdown";
import { isBrowser, isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import wm_banner from "../asset/images/wm_banner_01.png";
import mm_banner from "../asset/images/mm_banner_01.png";
import logo from "../asset/images/logo_2.png";
import setMobileHeight from "../util/setScreenHeight";

interface ModalProps {
  isOpened: boolean;
  toggle: (value: boolean) => void;
}

function HamburgerModal({ isOpened, toggle }: ModalProps) {
  const navigate = useNavigate();
  const clickEventHandler = () => {
    navigate("/contact");
  };
  const body = document.querySelector("body") as HTMLElement;
  const scrollPosition = window.pageYOffset;

  useEffect(() => {
    setMobileHeight();

    // resize 이벤트가 발생하면 다시 계산하도록 아래 코드 추가
    window.addEventListener("resize", setMobileHeight);
    return () => window.removeEventListener("resize", setMobileHeight);
  }, []);

  useEffect(() => {
    if (isOpened) {
      body.style.overflow = "hidden";
      body.style.pointerEvents = "none";
      body.style.position = "fixed";
      body.style.top = `-${scrollPosition}px`;
      body.style.left = "0";
      body.style.right = "0";
    }

    return () => {
      body.style.removeProperty("overflow");
      body.style.removeProperty("pointer-events");
      body.style.removeProperty("position");
      body.style.removeProperty("top");
      body.style.removeProperty("left");
      body.style.removeProperty("right");
      window.scrollTo(0, scrollPosition);
    };
  }, [isOpened]);

  return (
    <Component.HamburgerModal $isOpened={isOpened}>
      <Component.Curtain
        className="curtain"
        onClick={() => toggle(!isOpened)}
      />
      <Component.ModalInner className="inner">
        <Component.ModalContent>
          <div className="content-inner">
            <Component.ModalHeader $isMobile={isMobile}>
              {isMobile && <Component.ModalLogo src={logo} alt="로고" />}

              <Component.CloseIcon onClick={() => toggle(!isOpened)} />
            </Component.ModalHeader>
            <Component.MNav>
              <Component.MGnb>
                <DropDown>
                  <DropDown.Trigger
                    icon1={<Component.ArrowUp />}
                    icon2={<Component.ArrowDown />}
                  >
                    <div>
                      <p className="gnb_text">ABOUT</p>
                    </div>
                  </DropDown.Trigger>
                  <DropDown.Dropdown>
                    <Component.MLnb>
                      <li>
                        <a href="/about">회사소개</a>
                      </li>
                      <li>
                        <a href="/about/greeting">인사말</a>
                      </li>
                      <li>
                        <a href="/about/history">주요연혁</a>
                      </li>
                      <li>
                        <a href="/about/philosophy">지속가능경영</a>
                      </li>
                      <li>
                        <a href="#">사업분야</a>
                      </li>
                    </Component.MLnb>
                  </DropDown.Dropdown>
                </DropDown>
              </Component.MGnb>
              <Component.MGnb>
                <DropDown>
                  <DropDown.Trigger
                    icon1={<Component.ArrowUp />}
                    icon2={<Component.ArrowDown />}
                  >
                    <p className="gnb_text">BUSINESS</p>
                  </DropDown.Trigger>
                  <DropDown.Dropdown>
                    <Component.MLnb>
                      <li>
                        <a href="/business/develop">개발사업</a>
                      </li>
                      <li>
                        <a href="/business/sales">입주사업</a>
                      </li>
                      <li>
                        <a href="/business/offer">분양사업</a>
                      </li>
                    </Component.MLnb>
                  </DropDown.Dropdown>
                </DropDown>
              </Component.MGnb>
              <Component.MGnb>
                <DropDown>
                  <DropDown.Trigger
                    icon1={<Component.ArrowUp />}
                    icon2={<Component.ArrowDown />}
                  >
                    <p className="gnb_text">PROJECT</p>
                  </DropDown.Trigger>
                  <DropDown.Dropdown>
                    <Component.MLnb>
                      <li>
                        <a href="/project/development">시행・개발 실적</a>
                      </li>
                      <li>
                        <a href="/project/sales">입주・분양 실적</a>
                      </li>
                    </Component.MLnb>
                  </DropDown.Dropdown>
                </DropDown>
              </Component.MGnb>
              <Component.MGnb>
                <DropDown>
                  <DropDown.Trigger
                    icon1={<Component.ArrowUp />}
                    icon2={<Component.ArrowDown />}
                  >
                    <p className="gnb_text">NEWS</p>
                  </DropDown.Trigger>
                  <DropDown.Dropdown>
                    <Component.MLnb>
                      <li>
                        <a href="/news/salesApt">분양정보</a>
                      </li>
                      <li>
                        <a href="/news">보도자료</a>
                      </li>
                      <li>
                        <a href="/news/promotion">홍보영상</a>
                      </li>
                    </Component.MLnb>
                  </DropDown.Dropdown>
                </DropDown>
              </Component.MGnb>

              <Component.MGnb>
                <DropDown>
                  <DropDown.Trigger
                    icon1={<Component.ArrowUp />}
                    icon2={<Component.ArrowDown />}
                  >
                    <p className="gnb_text">CONTACT</p>
                  </DropDown.Trigger>
                  <DropDown.Dropdown>
                    <Component.MLnb>
                      <li>
                        <a href="/contact">문의하기</a>
                      </li>
                      <li>
                        <a href="/contact/empInfo">채용정보</a>
                      </li>
                      <li>
                        <a href="/contact/directions">오시는 길</a>
                      </li>
                    </Component.MLnb>
                  </DropDown.Dropdown>
                </DropDown>
              </Component.MGnb>
            </Component.MNav>
          </div>

          <Component.MBanner onClick={clickEventHandler}>
            <Component.BannerImg
              src={isMobile ? mm_banner : wm_banner}
              alt="배너이미지"
            />
          </Component.MBanner>
        </Component.ModalContent>
      </Component.ModalInner>
    </Component.HamburgerModal>
  );
}

export default HamburgerModal;
