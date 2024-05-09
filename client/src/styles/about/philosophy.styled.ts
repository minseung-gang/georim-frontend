import styled from "styled-components";
import BannerBackground from "../../asset/images/bp_banner_01.jpg";
import { motion } from "framer-motion";

export const Banner = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${BannerBackground}) no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  &::before {
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.25);
    z-index: 0;
  }
`;

export const BannerContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 1;
  gap: 4px 0;

  @media screen and (max-width: 500px) {
    gap: 8px 0;
  }

  & h3,
  p {
    color: white;
  }
  & h3 {
    font-size: calc(20px + 1.46vw);
    line-height: calc(36px + 1.9vw);
    margin-bottom: 4px;
    margin-top: 3rem;

    @media screen and (max-width: 1024px) {
      font-size: calc(21px + 1.46vw);
      line-height: calc(35px + 1.9vw);
    }
    @media screen and (max-width: 820px) {
      font-size: calc(20px + 1.46vw);
      line-height: calc(33px + 1.9vw);
    }
    @media screen and (max-width: 500px) {
      font-size: calc(23px + 1.35vw);
      line-height: calc(35px + 1.9vw);
      text-align: center;
      width: 80%;
      word-break: keep-all;
      margin: 0 auto;
    }
  }
  & p {
    font-size: calc(11px + 0.7vw);
    line-height: calc(20px + 0.7vw);
    font-weight: 400;

    @media screen and (max-width: 820px) {
      line-height: calc(19px + 0.7vw);
    }
    @media screen and (max-width: 500px) {
      font-size: calc(12px + 0.6vw);
      line-height: calc(19px + 0.7vw);
    }
  }
`;

export const BannerSubTitle = styled.div`
  display: flex;
  gap: 0 5px;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
export const ScrollMessage = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px 0;
  & p {
    color: white;
    font-family: Montserrat;
    font-weight: 700;
    font-size: 1rem;

    @media screen and (max-width: 1024px) {
      font-size: 0.8125rem;
    }
  }
`;
export const ScrollBar = styled.div`
  width: 2px;
  height: calc(100vh * 0.1);
  overflow: hidden;
  background: rgb(201 201 201 / 20%);
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    height: 100%;
    width: 2px;
    animation: slideAnimation 1.5s ease-in-out infinite;
  }
  @keyframes slideAnimation {
    0% {
      top: -100%;
    }
    30% {
      top: -100%;
    }
    100% {
      top: 100%;
    }
  }
`;

export const Main = styled.div`
  margin: 20px 0 120px;
  display: flex;
  flex-direction: column;
  gap: 80px 0;

  @media screen and (max-width: 1024px) {
    margin: 20px 0 40px;
  }

  @media screen and (max-width: 1024px) {
    margin: 20px 0 64px;
  }

  @media screen and (max-width: 500px) {
    margin: 1rem 0 2rem;
  }
  & .breadcrumb {
    margin: 0 auto;
    @media screen and (max-width: 1260px) {
      width: calc(100% - 60px);
    }
  }
  & .responsive {
    margin: 0 auto;
    max-width: 1200px;

    @media screen and (max-width: 1260px) {
      max-width: unset;
      width: calc(100% - 60px);
    }
    @media screen and (max-width: 500px) {
      width: calc(100% - 40px);
    }
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14rem 0;

  @media screen and (max-width: 1024px) {
    gap: 120px 0;
  }

  @media screen and (max-width: 820px) {
    gap: 100px 0;
  }

  @media screen and (max-width: 500px) {
    gap: 90px 0;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;

  @media screen and (max-width: 1024px) {
    gap: 40px 0;
  }

  @media screen and (max-width: 820px) {
    &.management .card-detail {
      display: none;
    }
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px 0;
`;

export const SectionCategory = styled.span`
  width: 72px;
  line-height: 28px;
  text-align: center;
  border-radius: 24px;
  background: #7aacd7;
  font-size: 0.875rem;
  font-weight: 700;
  color: white;
`;

export const TitleCotainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled(motion.h4)`
  font-size: calc(13px + 1vw);
  line-height: calc(26px + 1.5vw);
  font-weight: 600;
  letter-spacing: -0.02rem;
  margin-bottom: 4px;
  word-break: keep-all;
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
    line-height: 2.55rem;
  }

  @media screen and (max-width: 820px) {
    font-size: 1.375rem;
    line-height: 2.3375rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.25rem;
    line-height: 1.875rem;
    display: flex;
    flex-direction: column;
  }
`;
export const SubTitle = styled(motion.p)`
  font-size: calc(10px + 0.53vw);
  line-height: calc(20px + 0.53vw);
  font-weight: 400;
  letter-spacing: -0.02rem;
  color: ${({ theme }) => theme.colors.textBlack};

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.6rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.875rem;
    line-height: 1.4rem;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  gap: 0 5px;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
export const TextLine = styled.div`
  overflow: hidden;
`;

export const SectionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  gap: 0 20px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 40px 0;
  }
`;

export const CardSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px 0;
  padding: 0 16px;

  @media screen and (max-width: 1024px) {
    gap: 8px 0;
    padding: 0;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px 0;

  @media screen and (max-width: 500px) {
    gap: 4px 0;
  }

  &.mt-4 {
    margin-top: 4px;
  }
`;
export const CardTitle = styled.p`
  font-size: calc(14px + 0.52vw);
  line-height: calc(25px + 0.52vw);
  font-weight: 600;
  letter-spacing: -0.02rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.25rem;
    line-height: 1.875rem;
  }
`;

export const CardDetails = styled.div`
  text-align: center;
`;

export const ImageBox = styled.div`
  border-radius: 8px;
  box-shadow: 0px 3px 9px 2px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  & img {
    width: 100%;
    aspect-ratio: 3.8/3.5;
    object-fit: cover;
    object-position: center;
    display: block;

    @media screen and (max-width: 1260px) {
      aspect-ratio: 4/3;
    }
  }
`;
export const IconBox = styled.div`
  padding: 1.8vw;
  box-sizing: border-box;
  & img {
    width: calc(42px + 2vw);
    height: calc(42px + 2vw);
  }
  @media screen and (max-width: 1024px) {
    padding: 10px;
    & img {
      width: 60px;
      height: 60px;
    }
  }
  @media screen and (max-width: 500px) {
    padding: 0px;
    & img {
      width: 48px;
      height: 48px;
    }
  }
`;
export const ContentText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6rem;
  letter-spacing: -0.02rem;
  color: ${({ theme }) => theme.colors.textBlack};

  @media screen and (max-width: 1024px) {
    font-size: 0.875rem;
    line-height: 1.4rem;
  }
`;

export const SwiperWrapper = styled.div`
  width: 100%;
  .swiper-wrapper {
    transition-timing-function: linear;
  }
  & img {
    width: 100%;
    height: auto;
    aspect-ratio: 1.6 / 1;
    object-fit: cover;
  }
  .big {
    border-radius: 8px;
    overflow: hidden;
  }
`;
