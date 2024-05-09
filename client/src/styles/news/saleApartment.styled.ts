import styled from "styled-components";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { motion } from "framer-motion";

export const Inner = styled.div`
  padding: 2.5rem 0 6.375rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 62px 0;
  overflow: hidden;

  @media screen and (max-width: 1260px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 1024px) {
    padding: 1.5rem 0 2.5rem;
    gap: 48px 0;
  }
  @media screen and (max-width: 820px) {
    gap: 56px 0;
  }
  @media screen and (max-width: 600px) {
    padding: 1rem 0 2rem;
    gap: 2rem 0;
  }

  & .breadcrumb {
    margin: 0;
  }
`;
export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px 0;

  @media screen and (max-width: 1024px) {
    gap: 48px 0;
  }
  @media screen and (max-width: 820px) {
    gap: 32px 0;
  }
  @media screen and (max-width: 500px) {
    gap: 24px 0;
  }
`;

export const TitleContainer = styled.div`
  overflow: hidden;
`;
export const SectionTitle = styled(motion.h2)`
  font-size: 3.5rem;
  line-height: 84px;
  font-weight: 600;

  @media screen and (max-width: 1024px) {
    font-size: calc(28px + 2vw);
    line-height: calc(52px + 2vw);
  }
  @media screen and (max-width: 820px) {
    font-size: calc(20px + 2vw);
    line-height: calc(38px + 2vw);
  }
  @media screen and (max-width: 600px) {
    font-size: calc(20px + 2vw);
    line-height: calc(34px + 2vw);
  }
`;
export const PromotionCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px 40px;

  @media screen and (max-width: 1024px) {
    gap: 64px 20px;
  }
  @media screen and (max-width: 820px) {
    gap: 48px 12px;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 24px 0px;
  }
`;

export const Card = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  cursor: pointer;

  @media screen and (max-width:1024px){
    gap: 24px 0 ;
  }

  @media screen and (max-width:820px){
    gap: 16px 0 ;
  }


  &:hover .arrow_btn {
    animation-play-state: running;
    animation-name: hover;
    transform-origin: center center;
    animation-timing-function: cubic-bezier(0.48, -0.65, 0.065, -1.45)
    animation-iteration-count: 1; /* 애니메이션을 한 번만 실행 */
    animation-duration: 0.5s;
    animation-delay: 0s;
  }
  &:not(:hover) .arrow_btn {
    animation-play-state: running;
    animation-name: hoverOut;
    transform-origin: center center;
    animation-iteration-count: 1;
    animation-duration: 0.5s;
    animation-delay: 0s;
    animation-timing-function: cubic-bezier(-0.48, -0.55, 0.265, -0.45)
  }

  &:hover img {
    transform: scale(1.12);
  }

  @keyframes hover {
    0% {
      bottom: -5rem;
    }
    70% {
      bottom: 1.8rem;
    }
    100% {
      bottom: 1.3rem;
    }
  }
  @keyframes hoverOut {
    0% {
      bottom: 1.3rem;
    }

    100% {
      bottom: -5rem;
    }
  }
`;

export const CardImageBox = styled.div`
  width: 100%;
  max-height: 435px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    max-height: unset;
  }

  & img {
    transition: all 0.5s ease-in-out;
    width: 100%;
    display: block;
    aspect-ratio: 1.3/1;
    border-radius: 4px;

    @media screen and (max-width: 1024px) {
      aspect-ratio: 4/3;
    }
  }
`;
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px 0;

  @media screen and (max-width: 820px) {
    gap: 4px 0;
  }
`;
export const CardName = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  line-height: 44.8px;

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
    line-height: 2.1rem;
  }

  @media screen and (max-width: 820px) {
    font-size: calc(15px + 0.6vw);
    line-height: calc(23px + 0.6vw);
  }
  @media screen and (max-width: 600px) {
    font-size: calc(16px + 0.6vw);
    line-height: calc(23px + 0.6vw);
  }
`;
export const Status = styled.span`
  position: absolute;
  top: 13px;
  left: 13px;
  background: ${({ theme }) => theme.colors.blue2};
  padding: 6px 20px;
  border-radius: 4px;
  color: white;
  font-size: 1.125rem;
  line-height: 27px;
  font-weight: 500;

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 4px 16px;
  }
  @media screen and (max-width: 820px) {
    font-size: 0.875rem;
    line-height: 1.3125rem;
    padding: 4px 12px;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const BtnBox = styled.div<{ $active: boolean }>`
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  bottom: -5rem;
  right: 25px;
  animation-fill-mode: both;
  opacity: ${(props) => (props.$active ? 1 : 0)};

  @media screen and (max-width: 1024px) {
    width: 56px;
    height: 56px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ArrowIcon = styled(HiOutlineArrowUpRight)`
  width: 28px;
  height: 28px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
    height: 22px;
  }
`;

export const DetailInfo = styled.div`
  display: flex;
  gap: 0 12px;
  align-items: center;

  & p {
    font-size: 1.375rem;
    color: ${({ theme }) => theme.colors.textBlack};
    font-weight: 500;

    @media screen and (max-width: 1024px) {
      font-size: 1.125rem;
      line-height: 1.6875rem;
    }
    @media screen and (max-width: 820px) {
      font-size: calc(11px + 0.6vw);
      line-height: calc(19px + 0.6vw);
    }
    @media screen and (max-width: 600px) {
      font-size: calc(12px + 0.6vw);
    }
  }
`;

export const Bar = styled.div`
  width: 40px;
  height: 1px;
  background: ${({ theme }) => theme.colors.greyScale2};

  @media screen and (max-width: 600px) {
    width: 32px;
  }
`;

export const Category = styled.p``;
export const InDate = styled.p``;
