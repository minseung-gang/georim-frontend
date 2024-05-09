import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";
import Background_01 from "../../asset/images/hm_contact_01.jpg";
import Background_02 from "../../asset/images/hm_contact_02.jpg";
import Background_03 from "../../asset/images/hm_contact_03.jpg";

export const Wrapper = styled.div<{ $imgIdx: number }>`
  position: relative;
  height: 100vh;
  width: 100%;
  background: ${(props) => {
    switch (props.$imgIdx) {
      case 0:
        return `url(${Background_01})`;
      case 1:
        return `url(${Background_02})`;
      case 2:
        return `url(${Background_03})`;
      default:
        return "none";
    }
  }};
  background-size: cover;
  display: flex;
  justify-content: center;
  z-index: 1;

  @media screen and (max-width: 768px) {
    order: 6;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 0;
  }
`;
export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px 0;
  justify-content: center;
  z-index: 1;

  @media screen and (max-width: 1536px) {
    margin: 0 60px;
  }
  @media screen and (max-width: 1280px) {
    margin: 0 30px;
  }
  @media screen and (max-width: 500px) {
    margin: 0 16px;
  }
  & h3 {
    font-size: 3.125rem;
    line-height: 5.3125rem;
    letter-spacing: -0.03rem;
    transition: all 0.5s ease-in-out;
    color: white;
    @media screen and (max-width: 1536px) {
      font-size: 2.5rem;
      line-height: 4.25rem;
    }
    @media screen and (max-width: 1280px) {
      font-size: calc(1.35rem + 1.2vw);
      line-height: calc(2.7rem + 1.4vw);
    }
    @media screen and (max-width: 500px) {
      font-size: 1.625rem;
      line-height: 2.4375rem;
      letter-spacing: -0.02rem;
    }
  }
`;

export const BroswerContent = styled.div`
  @media screen and (max-width: 970px) {
    display: none;
  }
`;

export const PlusIcon = styled(FaPlus)`
  font-size: 19px;

  @media screen and (max-width: 1280px) {
    font-size: calc(6px + 1vw);
  }
`;

export const InqueryContainer = styled.div`
  display: flex;
  gap: 0 30px;
  margin-top: 50px;

  @media screen and (max-width: 970px) {
    display: none;
  }
`;

export const Button = styled.button`
  padding: 8px 24px;
  height: 48px;
  border: 1px solid #fff;
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 17px;
  display: flex;
  align-items: center;
  gap: 0 8px;
  font-family: pretendard;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 1536px) {
    font-size: 1rem;
    line-height: 1.6rem;
    padding: 8px 16px;
  }
  @media screen and (max-width: 1280px) {
    height: 3.3vw;
    font-size: calc(0.6rem + 0.5vw);
    line-height: calc(1.3rem + 0.5vw);
    padding: 4px 12px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const PageSection = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 34%;
  height: 100%;
  border-left: 1px solid rgba(255, 255, 255, 0.15);
  z-index: 1;

  @media screen and (max-width: 970px) {
    display: none;
  }

  & > div {
    position: relative;
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-out;
    cursor: pointer;
    &:hover {
      backdrop-filter: blur(15px);
      background: linear-gradient(
        139.57deg,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(255, 255, 255, 0) 86.28%
      );
    }
    & span {
      color: white;
      display: flex;
      align-items: center;
      gap: 0 9px;
      font-size: 1.75rem;
      font-weight: 600;

      @media screen and (max-width: 1536px) {
        font-size: 1.25rem;
        line-height: 1.875rem;
      }
    }

    &:last-child::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      border-top: 1px solid rgba(255, 255, 255, 0.3);
      height: 1px;
      width: 100%;
    }
  }
  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 200px;
    height: 100%;
    background: linear-gradient(270deg, #000000 4.35%, rgba(0, 0, 0, 0) 72%);
    z-index: 2;
  }
`;

export const MobileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px 0;
  justify-content: center;
  height: 100%;

  @media screen and (min-width: 970px) {
    display: none;
  }
`;

export const MobileQnA = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 970px) {
    display: none;
  }
`;
export const QnAList = styled.div`
  display: flex;
  padding: 5vw 0 7.5vw;
  justify-content: space-between;
  height: 10vh;
  align-items: center;
  border-bottom: 1px solid rgba(217, 217, 217, 0.2);
  &:last-child {
    border: none;
  }
  & p {
    color: white;
    font-size: 1rem;
  }
  & svg {
    color: white;
    font-size: 1rem;
  }
  &:active {
    p,
    svg {
      color: ${({ theme }) => theme.colors.textBlack};
    }
  }
`;
