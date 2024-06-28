import styled from "styled-components";
import BiBanner from "../../asset/images/hm_banner_01.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  gap: 13rem 0;
  background: url(${BiBanner}) no-repeat;
  background-position: bottom;
  background-size: cover;

  @media screen and (max-width: 768px) {
    order: 2;
  }

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
`;
export const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  max-width: 1360px;
  margin: 0 auto;

  @media screen and (max-width: 1536px) {
    max-width: unset;
    margin: 0 60px 0;
  }
  @media screen and (max-width: 1440px) {
    max-width: unset;
    margin: 0;
  }
`;
export const SideText = styled.p`
  display: fixed;
  left: 60px;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
  color: white;
`;
export const Bi = styled.div`
  max-width: 1300px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px 0;
  position: relative;
  justify-content: center;
  margin: 0 auto;

  @media screen and (max-width: 1360px) {
    max-width: unset;
    width: calc(100% - 60px);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TitleCaption = styled.div<{ $active: boolean }>`
  width: 100%;
  opacity: 0;
  ${(props) =>
    props.$active
      ? "animation: popup_animation 0.5s ease-in-out forwards"
      : {}};

  @media screen and (max-width: 768px) {
    width: calc(100% - 60px);
    margin: 0 auto;
  }

  @media screen and (max-width: 500px) {
    width: calc(100% - 40px);
  }
  @keyframes popup_animation {
    from {
      opacity: 0;
      transform: translateY(50%);
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  & > p {
    width: fit-content;
    font-size: 1.25rem;
    line-height: 1.875rem;
    letter-spacing: -0.01rem;
    font-weight: 600;
    margin-bottom: 12px;
    color: white;
    padding-bottom: 2px;
    border-bottom: 2px solid #0099ff;

    @media screen and (max-width: 1536px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
    @media screen and (max-width: 1280px) {
      font-size: 0.875rem;
      line-height: 1.3125rem;
    }
  }
  & > h2 {
    font-size: 3.125rem;
    line-height: 5rem;
    font-weight: 700;
    letter-spacing: -0.03rem;
    color: white;

    @media screen and (max-width: 1536px) {
      font-size: calc(29px + 0.5vw);
      line-height: calc(47px + 0.5vw);
      word-break: keep-all;
    }
    @media screen and (max-width: 768px) {
      font-size: 1.875rem;
      line-height: 2.8125rem;
      width: 380px;
    }
    @media screen and (max-width: 500px) {
      font-size: 1.75rem;
      line-height: 2.625rem;
      width: auto;
    }
  }
`;

export const Title = styled.p`
  font-size: 1.5rem;
  line-height: 2.25rem;
  letter-spacing: -0.01rem;
  font-weight: 600;
  color: white;

  @media screen and (max-width: 1536px) {
    font-size: 1.375rem;
    line-height: 2.0625rem;
  }
  @media screen and (max-width: 1280px) {
    font-size: 1.375rem;
    line-height: 2.0625rem;
  }
`;

export const ProjectList = styled.div`
  @media screen and (max-width: 820px) {
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 0 40px;

  @media screen and (max-width: 1536px) {
    gap: 0 20px;
  }
  @media screen and (max-width: 768px) {
    overflow-x: scroll;
    padding: 0 20px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
export const BisinessCard = styled.div`
  position: relative;
  max-width: 33.3%;
  width: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.2s ease-out;
  justify-content: space-between;
  cursor: pointer;
  z-index: 2;
  overflow: hidden;

  &:hover {
    backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.1);
    & .arrow-btn {
      background: rgba(255, 255, 255, 0.2);
      right: 20px;
    }
  }
  @media screen and (max-width: 1536px) {
    gap: 4px 0;
  }
  @media screen and (max-width: 768px) {
    min-width: 346px;
    max-width: unset;
  }
  @media screen and (max-width: 500px) {
    min-width: 30vh;
  }
`;
export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;

  padding: 41px 24px 64px 24px;

  @media screen and (max-width: 1536px) {
    gap: 12px 0;
    padding: 40px 20px 64px 20px;
  }
  @media screen and (max-width: 500px) {
    padding: 32px 16px 56px;
  }
`;
export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6rem;
  color: white;
  font-weight: 400;

  @media screen and (max-width: 1280px) {
    font-size: 0.875rem;
    line-height: 1.4rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.75rem;
    line-height: 1.2rem;
  }
`;

export const ArrowBx = styled.span`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  right: -65px;
  transition: right 0.4s ease-in-out;

  @media screen and (max-width: 768px) {
    widht: 32px;
    height: 32px;
    bottom: 20px;
    right: 20px;
  }
  @media screen and (max-width: 500px) {
    width: 24px;
    height: 24px;
  }
`;
export const RightArrow = styled(IoIosArrowRoundForward)`
  font-size: 24px;
  color: white;

  @media screen and (max-width: 1280px) {
    width: 16px;
    height: 16px;
  }
`;
