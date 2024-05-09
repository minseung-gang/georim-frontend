import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import OfferBanner from "../../asset/images/biz_offer_banner.jpg";
import SalesBanner from "../../asset/images/biz_sales_banner.jpg";
import DevelopBanner from "../../asset/images/biz_dev_banner.png";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import mark_01 from "../../asset/images/project_mark_01.png";
import mark_02 from "../../asset/images/project_mark_02.png";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export const Wrapper = styled.div`
  width: 100%;
  margin: 91px auto 0;
  display: flex;
  flex-direction: column;
  gap: 64px 0;
  padding: 40px 0 100px;
  overflow-x: hidden;

  & .breadcrumb {
  }
  @media screen and (max-width: 1440px) {
    margin-top: 81px;
  }
  @media screen and (max-width: 1260px) {
    & .breadcrumb {
      width: calc(100% - 60px);
    }
  }
  @media screen and (max-width: 1024px) {
    padding: 24px 0 40px;
    gap: 56px 0;
  }

  @media screen and (max-width: 500px) {
    margin-top: 56px;
    & .breadcrumb {
      width: calc(100% - 40px);
    }
    @media screen and (max-width: 768px) {
      padding: 16px 0 32px;
      gap: 30px 0;
    }
  }
`;
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px 0;

  @media screen and (max-width: 1024px) {
    gap: 72px 0;
  }
  @media screen and (max-width: 820px) {
    gap: 64px 0;
  }
`;
export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px 0;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 1660px) {
    width: calc(100% - 60px);
  }
  @media screen and (max-width: 1024px) {
    gap: 24px 0;
  }
  @media screen and (max-width: 500px) {
    width: calc(100% - 40px);
    gap: 32px 0;
  }
`;

export const Banner = styled(motion.div)`
  position: relative;
  max-width: 1600px;
  width: 100%;
  @media screen and (max-width: 1660px) {
    max-width: unset;

    display: flex;
    flex-direction: column;
    gap: 64px 0;
  }
  @media screen and (max-width: 1024px) {
    gap: 56px 0;
  }
  @media screen and (max-width: 820px) {
    gap: 30px 0;
  }

  & img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const PageTitle = styled(motion.h3)`
  font-size: calc(16px + 2vw);
  line-height: calc(21px + 3.3vw);
  font-weight: 600;
  letter-spacing: -0.02rem;

  @media screen and (max-width: 1024px) {
    font-size: 4.2vw;
    line-height: 6.3vw;
  }
  @media screen and (max-width: 820px) {
    font-size: calc(16px + 2vw);
    line-height: calc(26px + 2.7vw);
  }
`;

export const BannerContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 8px 0;

  @media screen and (max-width: 500px) {
    width: 90%;
  }

  & .banner_title {
    display: flex;
    flex-direction: column;
    & > span:first-child {
      margin-right: 10px;
    }
    @media screen and (max-width: 768px) {
      display: inline-block;
      text-align: center;
    }
    @media screen and (max-width: 500px) {
      & > span:first-child {
        margin-right: 5px;
      }
    }
  }
`;
export const BannerInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px 0;
`;
export const StickyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px 0;
`;

export const Sticky = styled.div`
  width: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px 0;
  overflow: hidden;

  @media screen and (max-width: 1660px) {
    box-sizing: border-box;
  }
  @media screen and (max-width: 1260px) {
    padding: 0px;
  }
  @media screen and (max-width: 500px) {
    gap: 24px 0;
  }
`;
export const Curtain = styled(motion.div)`
  position: absolute;
  top: -1px;
  width: 25%;
  height: 101%;
  background: white;
  transition: all 0.3s ease-out;

  &.left {
    left: -1px;
  }
  &.right {
    right: -1px;
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  position: relative;

  @media screen and (max-width: 1280px) {
    height: 100%;
  }
  @media screen and (max-width: 500px) {
    height: 400px;
  }
`;

export const BannerTitle = styled(motion.div)`
  width: 100%;
  font-size: calc(11px + 1.1vw);
  line-height: calc(19px + 1.51vw);
  font-weight: 600;
  letter-spacing: -0.02rem;
  text-align: center;
  word-break: keep-all;

  @media screen and (max-width: 1024px) {
    font-size: 1.375rem;
    line-height: 2.0625rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.125rem;
    line-height: 1.6875rem;
    flex-direction: row;
  }
`;

export const BannerSubTitle = styled(motion.div)`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    &.sales {
      display: inline-block;
      text-align: center;
    }
  }
  @media screen and (max-width: 500px) {
    display: inline-block;
    text-align: center;

    & span:first-child {
      margin-right: 5px;
    }
  }

  & span {
    font-size: calc(11px + 0.4vw);
    line-height: calc(21px + 0.4vw);
    letter-spacing: -0.02rem;
    font-weight: 500;
    text-align: center;
    color: ${({ theme }) => theme.colors.textBlack};

    @media screen and (max-width: 1024px) {
      font-size: 0.9375rem;
      line-height: 1.5rem;
      margin: 0 auto;
      word-break: keep-all;
    }
    @media screen and (max-width: 500px) {
      width: 100%;
      font-weight: 400;
      font-size: 0.8125rem;
      line-height: 1.3rem;
    }
  }
`;

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 160px 0;

  @media screen and (max-width: 1024px) {
    gap: 101px 0;
  }

  @media screen and (max-width: 768px) {
    gap: 100px 0;
  }
  @media screen and (max-width: 500px) {
    gap: 64px 0;
  }
`;

export const ProcessOverview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px 0;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 1260px) {
    max-width: unset;
    gap: 48px 0;
  }

  @media screen and (max-width: 768px) {
    gap: 40px 0;
  }
  @media screen and (max-width: 500px) {
    max-width: unset;
    gap: 32px 0;
    width: 100%;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px 0;

  @media screen and (max-width: 1024px) {
    gap: 48px 0;
  }
  @media screen and (max-width: 768px) {
    gap: 40px 0;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    gap: 32px 0;
  }
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px 0;

  & > span {
    background: #aadbf9;
    padding: 2px 12px;
    border-radius: 24px;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
    color: white;

    @media screen and (max-width: 1024px) {
      font-size: 0.875rem;
      line-height: 1.3125rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 0.75rem;
      line-height: 1.125rem;
    }
  }
  & h4 {
    font-size: calc(15px + 1.3vw);
    line-height: calc(26px + 1.8vw);
    font-weight: 600;
    letter-spacing: -0.1rem;

    @media screen and (max-width: 1024px) {
      font-size: 1.75rem;
      line-height: 2.625rem;
    }

    @media screen and (max-width: 768px) {
      font-size: calc(13px + 2vw);
      line-height: calc(19px + 3vw);
    }
  }
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px 0;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: calc(100% - 60px);
    gap: 72px 0;
  }

  @media screen and (max-width: 500px) {
    width: calc(100% - 40px);
    gap: 56px 0;
  }
`;

export const ProcessContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0 45px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    order: 2;
    flex-direction: column;
    gap: 8px 0;
    width: calc(100% - 60px);
    margin: 0 auto;

    & > div::before,
    & > div::after {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 8px 0;
    width: 100%;
  }

  & > div:last-child::before,
  & > div:last-child::after {
    display: none;
  }
`;
export const ProcessCard = styled.div<{ $active?: boolean; $prev?: boolean }>`
  position: relative;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -45px;
    width: ${(props) => (props.$active ? "65px" : "45px")};
    height: 1px;
    background: #009dea;
  }
  ${(props) =>
    props.$prev &&
    `
  &:not(:first-child) {
    &::before{
      width: 65px;
      right: -65px;
    }
    &::after {
      display: none; 
    }
  }
  `}
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -50px;
    width: 8px;
    height: 8px;
    z-index: 2;
    border-radius: 50%;
    background: #009dea;
  }
  & > div {
    width: ${(props) =>
      props.$active ? "calc(167px + 3vw)" : "calc(147px + 3vw)"};
    height: ${(props) =>
      props.$active ? "calc(167px + 3vw)" : "calc(147px + 3vw)"};
    background: ${(props) => (props.$active ? "#009DEA" : "white")};
    ${(props) => (props.$active ? {} : "border: 2px solid #009DEA")};
    gap: 4px 0;

    @media screen and (max-width: 1260px) {
      width: ${(props) => (props.$active ? "calc(20px + 14.5vw)" : "14.5vw")};
      height: ${(props) => (props.$active ? "calc(20px + 14.5vw)" : "14.5vw")};
    }

    @media screen and (max-width: 900px) {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      padding: 24px 0;

      &::before,
      &::after {
        display: none;
      }
    }

    @media screen and (max-width: 500px) {
      padding: 20px 0;
    }

    & p,
    h4 {
      color: ${(props) => (props.$active ? "white" : "#009DEA")};
    }

    ${(props) =>
      props.$active &&
      `
      &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #AADBF9;
        z-index: -1;
        animation: wave 1.5s linear infinite;
        
      }
      &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        border-radius: 50%;
        z-index: -2;
        background: #AADBF9;
        animation: wave 1.5s 0.3s linear infinite;
     
      }
    `}

    @keyframes wave {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        opacity: 0;
        transform: scale(1.23);
      }
      100% {
        opacity: 0;
        transform: scale(1.23);
      }
    }
  }
`;
export const Circle = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const ProcessArrowIcon = styled(MdKeyboardDoubleArrowDown)`
  font-size: 24px;
  color: #009dea;
  display: none;

  @media screen and (max-width: 900px) {
    display: block;
  }
`;

export const Order = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 2rem;
  letter-spacing: -0.1rem;

  @media screen and (max-width: 1260px) {
    font-size: 1.125rem;
    line-height: 1.8rem;
  }

  @media screen and (max-width: 900px) {
    font-size: 1.25rem;
    line-height: 2rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1rem;
    line-height: 1rem;
  }
`;

export const ProcessName = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.8rem;
  letter-spacing: -0.02rem;
  text-align: center;
  word-break: keep-all;

  @media screen and (max-width: 1260px) {
    font-size: 1rem;
    line-height: 1.6rem;
  }

  @media screen and (max-width: 900px) {
    font-size: 1.125rem;
    line-height: 1.8rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1rem;
    line-height: 1.6rem;
  }
`;

export const ProcessIntro = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px 0;
  align-items: center;

  @media screen and (max-width: 500px) {
    gap: 32px 0;
  }

  & .title {
    font-size: calc(13px + 1vw);
    line-height: calc(25px + 1.2vw);
    letter-spacing: -0.02rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0 32px;

    @media screen and (max-width: 1024px) {
      font-size: 1.5rem;
      line-height: 2.25rem;
    }
    @media screen and (max-width: 900px) {
      font-size: calc(9px + 2vw);
      line-height: calc(13px + 3vw);
      gap: 0 25px;
    }

    @media screen and (max-width: 500px) {
      font-size: 1rem;
      line-height: 1.5rem;
      gap: 0 15px;
      font-weight: 500;
      text-align: center;
    }
  }
  & .quote-marks {
    @media screen and (min-width: 900px) {
      display: none;
    }
    display: block;
    width: 31px;
    height: 26px;

    @media screen and (max-width: 500px) {
      width: 14px;
      height: 11px;
    }

    &.marks-01 {
      background: url(${mark_01}) no-repeat;
      background-size: contain;
    }
    &.marks-02 {
      background: url(${mark_02}) no-repeat;
      background-size: contain;
    }
  }
`;
export const ProcessTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const ProcessDescription = styled.div`
  text-align: center;
  @media screen and (max-width: 768px) {
    &.sales .description {
      display: inline-block;
      & > span {
        margin-right: 5px;
        word-break: keep-all;
      }
    }
    &.offer .description {
      width: 100%;
    }
  }
  & .description {
    display: flex;
    flex-direction: column;
    font-size: 1.125rem;
    letter-spacing: -0.02rem;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.colors.textBlack};

    @media screen and (max-width: 1024px) {
      font-size: 1rem;
      line-height: 1.6rem;
    }
    @media screen and (max-width: 768px) {
      font-size: calc(12px + 0.5vw);
      line-height: calc(20px + 0.7vw);
    }
    @media screen and (max-width: 700px) {
      width: 100%;
    }
    @media screen and (max-width: 600px) {
      display: inline-block;
      & span {
        margin-right: 5px;
      }
    }
  }
`;

export const ProcessDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px 0;

  @media screen and (max-width: 1024px) {
    gap: 88px 0;
  }

  @media screen and (max-width: 768px) {
    gap: 48px 0;
  }
`;
export const ProcessList = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0 30px;

  @media screen and (max-width: 1024px) {
    gap: 0 20px;
  }
  @media screen and (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
    margin: 0 auto;
    gap: 16px 0;

    &:nth-child(2n) {
      & > .img-container {
        order: 2;
      }
    }
  }
`;

export const ServiceDetails = styled(motion.div)`
  width: 50%;
  &:nth-child(2n + 1) {
    padding-left: 30px;
    @media screen and (max-width: 768px) {
      padding: 0;
    }
  }
  &:nth-child(2n) {
    padding-right: 30px;
    @media screen and (max-width: 768px) {
      padding: 0;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;
export const ServiceContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px 0;

  @media screen and (max-width: 1260px) {
    gap: 12px 0;
    max-width: unset;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
export const ServiceImage = styled(motion.div)`
  width: 50%;
  aspect-ratio: 35/24;
  border-radius: 10px;
  box-shadow: 4px 4px 13px 5px rgba(14, 47, 74, 0.1);

  @media screen and (max-width: 768px) {
    width: 100%;
    aspect-ratio: 2/1;
    overflow: hidden;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;
export const ServiceHeader = styled.div``;

export const ServiceOrder = styled.p`
  font-size: calc(21px + 0.4vw);
  line-height: calc(23px + 1vw);
  font-weight: 700;
  color: #009dea;
  letter-spacing: -0.1rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
    line-height: 2.25rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.375rem;
    line-height: 2.0625rem;
  }
`;
export const ServiceTitle = styled.h4`
  font-size: calc(19px + 0.9vw);
  line-height: calc(29px + 1.5vw);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.bodyBlack};
  letter-spacing: -0.1rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.75rem;
    line-height: 2.8rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.375rem;
    line-height: 2.2rem;
  }
`;
export const ServiceContent = styled.div``;
export const ServiceDescription = styled.span`
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 2.025rem;
  color: #404040;
  letter-spacing: -0.1rem;
  word-break: keep-all;

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.6rem;
    font-weight: 400;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.875rem;
    line-height: 1.4rem;
  }
`;

export const ProjectContent = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  position: relative;

  @media screen and (max-width: 1260px) {
    width: calc(100% - 60px);
    margin: 0 auto;
  }

  @media screen and (max-width: 1024px) {
    & .card .buildings_name {
      font-size: 20px;
      line-height: 28px;
    }
  }
  @media screen and (max-width: 768px) {
    & .card .buildings_name {
      font-size: 1.125rem;
      line-height: 1.575rem;
    }
    & .card p {
      font-size: 0.875rem;
      line-height: 1.3125rem;
    }
    & #swiper-forward,
    & #swiper-back {
      width: 32px;
      height: 32px;
    }
  }
  @media screen and (max-width: 700px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    & #swiper-forward,
    & #swiper-back {
      display: none;
    }
    & .card p {
      font-size: 0.8125rem;
      line-height: 1.3125rem;
    }
  }
`;

export const SwiperNavBtn = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.4);
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &#swiper-forward {
    right: 0;
  }
  &#swiper-back {
    left: 0;
  }
`;

export const SwiperLeftArrow = styled(IoIosArrowForward)``;
export const SwiperRightArrow = styled(IoIosArrowBack)``;
export const SwiperCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  border: 1px solid #e8eef4;
  overflow: hidden;
`;
export const ProjectOverview = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;

  @media screen and (max-width: 700px) {
    margin-right: 20px;
  }

  svg {
    transition: transform 0.3s ease-in-out;
  }
  &:hover {
    svg {
      transform: rotate(180deg);
    }
  }
`;
export const OverviewBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 0 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.02rem;
  line-height: 1.2rem;
  font-family: pretendard;
  padding: 0;
  color: #000000 !important;

  @media screen and (max-width: 768px) {
    font-size: 0.875rem;
  }
`;
export const OverviewIcon = styled(BsFillPlusCircleFill)`
  font-size: 24px;
  color: ${({ theme }) => theme.suportColor.border};

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const BtnSection = styled.div`
  display: flex;

  @media screen and (max-width: 1024px) {
    display: none;
  }
  & .button {
    position: relative;
    width: 50%;
    height: 260px;
    cursor: pointer;
    overflow: hidden;
  }
`;

export const SalesBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: url(${SalesBanner}) no-repeat;
  background-size: cover;
  background-position: center;
`;
export const OfferBackground = styled.div`
  width: 100%;
  height: 100%;
  background: url(${OfferBanner}) no-repeat;
  background-size: cover;
  background-position: center;
`;

export const DevelopBackground = styled.div`
  width: 100%;
  height: 100%;
  background: url(${DevelopBanner}) no-repeat;
  background-size: cover;
  background-position: center;
`;
export const BtnContainer = styled.div`
  overflow: hidden;
  .curtain {
    transition: transform 0.3s ease;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      z-index: 0;
    }
  }
  &:hover .curtain {
    transform: scale(1.03);
  }
  &:hover .button_text p {
    padding: 0 10px;
  }

  &:hover .curtain::before {
    background: rgba(0, 0, 0, 0.2);
  }
  .button_text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
`;
export const PassBtn = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 0 8px;
  color: white;
  padding: 0;
`;

export const BtnText = styled.p`
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 600;
  letter-spacing: -0.1rem;
  text-align: center;
  transition: padding 0.3s ease-out;
`;

export const LeftArrowIcon = styled(RiArrowLeftDoubleLine)`
  transition: padding 0.3s ease-in-out;
  font-size: 32px;
`;
export const RightArrowIcon = styled(RiArrowRightDoubleLine)`
  font-size: 32px;
`;

export const TextLine = styled.div`
  overflow: hidden;
`;
