import styled from "styled-components";
import { GoPlus } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px 0;
  position: relative;
  padding-top: 80px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    gap: 15vw 0;
    padding-top: 0;
    order: 3;
  }

  @media screen and (max-width: 500px) {
    gap: 56px 0;
  }

  &::after {
    position: absolute;
    content: "";
    width: 100px;
    height: 100%;
    right: 0;
    top: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.4) 40%,
      rgba(255, 255, 255, 0.6) 100%
    );
    z-index: 2;

    @media screen and (max-width: 1280px) {
      display: none;
    }
  }
`;

export const Cursor = styled.div`
  aspect-ratio: 1/1;
  transform: scale(0);
  border-radius: 50%;
  position: fixed;
  z-index: 1000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 5px;
  box-sizing: border-box;
  pointer-events: none;
  cursor: none;

  opacity: 0;

  & p {
    color: white;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 700;
  }
  &.cursor-grow {
    transform: translate(-50%, -50%) scale(1.5, 1.5);
    background-color: ${({ theme }) => theme.colors.blue1};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    opacity: 1;
    transition: transform 0.3s ease-out;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 15px 0;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: flex-end;

  & button {
    display: flex;
    align-items: stretch;
    gap: 0 4px;
    padding: 10px 24px;
    line-height: 25px;
    font-size: 1rem;
    font-weight: 600;
    min-width: fit-content;
    border: 1px solid ${({ theme }) => theme.suportColor.border};
    font-family: Montserrat;

    @media screen and (max-width: 1536px) {
      padding: 10px 16px;
      align-items: center;
    }
    @media screen and (max-width: 1280px) {
      font-size: 0.875rem;
      line-height: 1.4rem;
      padding: 8px 12px;

      & svg {
        font-size: 19px;
      }
    }
    @media screen and (max-width: 500px) {
      display: none;
      & svg {
        display: none;
      }
    }
  }

  @media screen and (max-width: 1536px) {
    margin: unset;
    padding: 0 120px 0 60px;
  }
  @media screen and (max-width: 1280px) {
    margin: unset;
    padding: 0 30px 0 30px;
  }

  @media screen and (max-width: 820px) {
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    padding: 0 20px;
    gap: 8px 0;
  }
`;

export const TitleCaption = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 4px 0;

  & > p {
    font-size: 1.25rem;
    line-height: 1.875rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textBlack};

    @media screen and (max-width: 1536px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
    @media screen and (max-width: 1280px) {
      font-size: 0.875rem;
      line-height: 1.3125rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 0.8125rem;
      line-height: 1.21875rem;
      text-align: center;
      color: ${({ theme }) => theme.colors.gray6};
      font-weight: 500;
 
    }
  }
  & h2 {
    font-weight: 700;
    font-size: 3.125rem;
    line-height: 72px;
    font-family: pretendard;
    letter-spacing: -0.2rem;
    color: ${({ theme }) => theme.colors.blue1};
    letter-spacing: -2px;
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    gap: 0 10px;

    @media screen and (max-width: 1536px) {
      font-size: 2.5rem;
      line-height: 4rem;
    }
    @media screen and (max-width: 1280px) {
      font-size: 2rem;
      line-height: 3.2rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 1.625rem;
      line-height: 2.4375rem;
      display: block;
      width: 90%;
      text-align: center;
      margin: 0 auto;
    }

    & span {
      display: inline-block;
    }
    & .accent {
      background: linear-gradient(to bottom, #48dbef -70%, #4269f1 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: -0.02rem;
    }
  }
`;

export const PlusIcon = styled(GoPlus)`
  font-size: 24px;
`;

export const SwiperImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BuildingContent = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  justify-content: space-between;
  align-items: flex-end;
  padding: 24px;
  box-sizing: border-box;

  @media screen and (max-width: 820px) {
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: 14px;
  }
  @media screen and (max-width: 500px) {
    padding: 8px;
  }
  & span {
    font-size: 0.875rem;
    line-height: 1.3rem;
    padding: 5.5px 12px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.blue2};
    color: white;

    @media screen and (max-width: 1536px) {
      font-size: 0.8125rem;
      line-height: 1.21875rem;
    }
    @media screen and (max-width: 1280px) {
      font-size: 0.6875rem;
      line-height: 0.9375rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 0.875rem;
      line-height: 1.3125rem;
      padding: 4px 8px;
    }
  }
`;

export const BuildingContainer = styled.div`
  position: relative;
  height: 340px;
  border-radius: 16px;
  overflow: hidden;

  @media screen and (max-width: 1280px) {
    height: 300px;
  }
  @media screen and (max-width: 820px) {
    height: 260px;
    border-radius: 8px;
  }
  @media screen and (max-width: 500px) {
    border-radius: 4px;
    height: 100%;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 20.5%,
      rgba(0, 16, 79, 0.5) 100%
    );
  }
`;

export const BuildingName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 65%;

  @media screen and (max-width: 1280px) {
    width: 60%;
  }
  @media screen and (max-width: 820px) {
    order: 2;
    width: 100%;
  }
  & > p {
    font-size: 0.8125rem;
    line-height: 1.21875rem;
    color: white;

    @media screen and (max-width: 1536px) {
      font-size: 0.75rem;
      line-height: 1.125rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 3.2vw;
      line-height: 4.7vw;
    }
  }
  & > h4 {
    font-size: 1.875rem;
    line-height: 2.4375rem;
    letter-spacing: -1px;
    font-weight: 600;
    color: white;
    word-break: keep-all;

    @media screen and (max-width: 1536px) {
      font-size: 1.5rem;
      line-height: 1.95rem;
    }
    @media screen and (max-width: 1280px) {
      font-size: 1.3125rem;
      line-height: 1.75rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 1.25rem;
      line-height: 1.625rem;
    }
  }

  & > div {
    padding: 5px 9px;
    border-radius: 4px;
    background: #0b1941;
    color: white;
    font-size: 14px;
    line-height: 18px;
    font-family: pretendard;
    letter-spacing: 0.4px;
    background: ${({ theme }) => theme.colors.blue1};
    margin-bottom: 2px;
  }
`;

export const BuildingInfo = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid #e6ebf2;
  & p {
    color: ${({ theme }) => theme.colors.titleBlack};
    font-weight: 400;
    font-size: 0.94rem;
  }
`;
export const Carousel = styled.div`
  position: relative;
  .swiper-slide {
    cursor: none;

    @media screen and (max-width: 1536px) {
      width: 423px !important;
    }
    @media screen and (max-width: 1280px) {
      width: 400px !important;
    }

    @media screen and (max-width: 500px) {
      aspect-ratio: 4/3;
      width: 64vw !important;
      height: 25vh;
    }
  }
  & .swiper-wrapper {
    padding: 0 20px;
    @media screen and (max-width: 500px) {
      padding: 0 16px;
    }
  }
  & .swiper-button-prev {
    left: 7%;
    width: 3.5rem;
    height: 3.5rem;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    &:after {
      font-size: 16px;
      color: white;
      font-weight: 600;
    }
  }
  & .swiper-button-next {
    right: 7%;
    width: 4rem;
    height: 4rem;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    &:after {
      font-size: 16px;
      color: white;
      font-weight: 600;
    }
  }
`;

export const NaviButton = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.greyScale3};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const NextArrow = styled(IoIosArrowBack)``;

export const PrevArrow = styled(IoIosArrowForward)``;

export const Pagination = styled.div`
  display: none;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
  gap: 0 16px;

  @media screen and (max-width: 500px) {
    display: flex;
  }

  & .swiper-pagination {
    position: relative;
    top: unset;
    left: unset;
    bottom: unset;
    text-align: unset;
    width: fit-content;
    display: flex;

    & .swiper-pagination-bullet {
      min-width: 5vh;
      border-radius: unset;
      height: 2px;
      margin: 0;
      background: #d9d9d9;
      opacity: unset;
      &.swiper-pagination-bullet-active {
        background: #3d3d3d;
      }
    }
  }
  & .pagination-info {
    display: flex;
    gap: 0 4px;

    & p {
      font-family: Montserrat;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.5rem;
      letter-spacing: -0.03rem;
    }
  }
`;

export const SwiperBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 24px;
  margin-top: 24px;

  @media screen and (max-width: 1280px) {
    display: none;
  }
`;
