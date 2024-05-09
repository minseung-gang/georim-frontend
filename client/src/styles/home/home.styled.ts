import styled from "styled-components";

import ReactPlayer from "react-player";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13rem 0;
`;

export const Banner = styled.div`
  position: relative;
  /*  &::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 150px;
    bottom: -150px;
    left: 50%;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.colors.titleBlack};
  } */
  @media screen and (max-width: 768px) {
    order: 1;
  }
`;
export const VideoForm = styled.div`
  width: 100%;
  height: 300vh;
`;
export const Video = styled.div<{ $active: boolean }>`
  width: 100vw;
  height: 110%;
  aspect-ratio: 1.5/1;
  z-index: -1;
  transform-origin: 50% 100%;
  transform: ${(props) => (props.$active ? "scale(1)" : "scale(0.4);")};
  transition: all 0.5s ease-in-out;

  /* @media screen and (max-width: 768px) {
    width: ${(props) => (props.$active ? "120vw" : "100vw")};
    height: 100%;
    transform-origin: 50% 220%;
    transform: ${(props) => (props.$active ? "scale(1)" : "scale(0.7)")};
  } */

  @media screen and (max-width: 768px) {
    width: 100vw;
    transform-origin: unset;
    transform: scale(1);
  }
`;
export const Player = styled(ReactPlayer)`
  position: relative;
  border-radius: 50px;
  overflow: hidden;
  & video {
    object-fit: cover;
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.27);
  }
  @media screen and (max-width: 820px) {
    width: 100% !important;
  }
  @media screen and (max-width: 500px) {
    border-radius: 0px;
  }
`;
export const ScrollMessage = styled.div`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px 0;

  & > p {
    color: white;
    font-family: "Montserrat";
    font-weight: 700;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ScrollBar = styled.div`
  width: 2px;
  height: 150px;
  background: rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  animation-delay: 0.5s;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    animation: background_animation 2s ease-in-out infinite;
    animation-delay: 0.5s;
  }
  @keyframes background_animation {
    0% {
      transform: translateY(-100%);
    }
    30% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(100%);
    }
  }

  @media screen and (max-width: 500px) {
    height: 10vh;
  }
`;

export const StikyWrapper = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: 500px) {
    align-items: flex-end;
  }
`;
const BannerTitle = styled.span`
  position: absolute;
  left: 50%;
  width: 100%;
  & h2 {
    font-size: 4rem;
    font-weight: 700;
    line-height: 89.6px;
    width: 100%;
    text-align: center;
    transition: all 0.3s ease-in-out;
    & > span:first-child {
      margin-right: 15px;
    }
  }

  @media screen and (max-width: 1536px) {
    & h2 {
      font-size: 3rem;
      line-height: 4.5rem;
    }
  }
  @media screen and (max-width: 1280px) {
    & h2 {
      font-size: 2.75rem;
      line-height: 4.125rem;
    }
  }
  @media screen and (max-width: 768px) {
    & h2 {
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 2.5rem;
      line-height: 3.75rem;
    }
  }
  @media screen and (max-width: 500px) {
    h2 {
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 2rem;
      line-height: 3rem;
    }
  }
`;
export const BannerTitle2 = styled(BannerTitle)<{ $active: boolean }>`
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  opacity: ${(props) => (props.$active ? 1 : 0)};
  transition: opacity 0.8s ease-in-out;

  @media screen and (max-width: 768px) {
    opacity: 1;
  }
  @media screen and (max-width: 500px) {
    top: unset;
    bottom: 25%;
    transform: translate(-50%, 25%);
    padding-left: 20px;
  }
`;
export const BannerTitle1 = styled(BannerTitle)<{ $active: boolean }>`
  top: 40%;
  transform: translate(-50%, -40%);
  color: ${({ theme }) => theme.colors.titleBlack};
  opacity: ${(props) => (props.$active ? 0 : 1)};
  transition: opacity 0.8s ease-in-out;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
