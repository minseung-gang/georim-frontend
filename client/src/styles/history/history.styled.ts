import styled from "styled-components";
import historyBanner from "../../asset/images/historyBanner_01.png";
import { Content } from "../project/project.styled";

export const Banner = styled.div`
  height: 66vh;
  background: url(${historyBanner});
  position: relative;
  background-position: 100% 100%;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const Contents = styled(Content)`
  gap: 0 80px;

  @media screen and (max-width: 1260px) {
    width: calc(100% - 60px);
    margin: 0 auto;
  }
  @media screen and (max-width: 768px) {
    gap: 50px 0;
  }
  @media screen and (max-width: 500px) {
    gap: 32px 0;
  }
`;
export const BannerTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 18%;
  display: flex;
  flex-direction: column;
  gap: 8px 0;
  color: white;
  z-index: 2;
  font-family: Montserrat;

  @media screen and (max-width: 1024px) {
    left: 30px;
  }

  & h3 {
    font-size: calc(38px + 1.35vw);
    line-height: calc(54px + 1.85vw);

    @media screen and (max-width: 1024px) {
      font-size: calc(11px + 4vw);
      line-height: calc(11px + 6vw);
    }

    @media screen and (max-width: 768px) {
      font-size: calc(13px + 3.6vw);
      line-height: calc(18px + 5vw);
    }
  }
  & > div {
    overflow: hidden;
  }
`;
export const ScrollBar = styled.div`
  position: relative;
  width: 2px;
  height: calc(66vh * 0.2);
  background: rgb(201 201 201 / 0%);
  overflow: hidden;
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

export const ContentInner = styled.div`
  display: flex;
  gap: 0 5.5vw;
  position: relative;
  justify-content: space-between;
  @media screen and (max-width: 1260px) {
    gap: 0;
  }
  @media screen and (max-width: 1024px) {
    & .sticky {
      width: 40%;
    }
    & .hisotry_info {
      width: 60%;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 88px;
  }

  @media screen and (max-width: 500px) {
    gap: 100px 0;
  }
`;
export const Info = styled.div`
  display: grid;
  gap: 113px 0;
  padding: 50px 0;
  min-width: fit-content;

  @media screen and (max-width: 1024px) {
    gap: 97px 0;
  }
`;
export const Sticky = styled.div`
  position: sticky;
  top: 20vh;
  max-width: 500px;
  min-width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px 0;
  padding: 50px 0;

  @media screen and (max-width: 1024px) {
    min-width: 35%;
  }
`;

export const Title = styled.div<{ $active?: boolean }>`
  & .years {
    font-size: 1rem;
    line-height: 1.193125rem;
    margin-bottom: 6px;
    color: ${({ theme }) => theme.colors.gray5};
    font-weight: 500;

    @media screen and (max-width: 500px) {
      font-size: 0.875rem;
      line-height: 1.044375rem;
    }
  }
  & p {
    font-size: ${(props) =>
      props.$active ? "calc(12px + 2vw)" : "calc(13px + 1vw)"};
    color: ${({ theme, $active }) =>
      $active ? theme.colors.blue4 : theme.colors.greyScale3 + "!important"};
    font-weight: ${(props) => (props.$active ? "700" : "600")};
    line-height: ${(props) =>
      props.$active ? "calc(17px + 2.22vw)" : "38.19px"};
    transition: all 0.2s ease-in;
    word-break: keep-all;

    @media screen and (max-width: 1024px) {
      font-size: ${(props) => (props.$active ? "2rem" : "1.5rem")};
      line-height: 2.386875rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 1.75rem;
      line-height: 2.088125rem;
    }

    &.basic {
      font-size: ${(props) =>
        props.$active ? "calc(14px + 1.8vw)" : "calc(13px + 1vw)"};
      line-height: ${(props) =>
        props.$active ? "calc(15px + 2.2vw)" : "38.19px"};

      @media screen and (max-width: 1024px) {
        font-size: ${(props) => (props.$active ? "2rem" : "1.5rem")};
        line-height: 2.386875rem;
      }

      @media screen and (max-width: 768px) {
        font-size: 2rem;
        line-height: 2.386875rem;
        margin-bottom: 12px;
      }

      @media screen and (max-width: 500px) {
        font-size: 1.75rem;
        line-height: 2.088125rem;
        margin-bottom: 4px;
      }
    }
  }
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px 0;

  @media screen and (max-width: 500px) {
    gap: 32px 0;
  }
`;

export const CardForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px 0;
`;

export const Card = styled.div`
  display: flex;
  gap: 0 4.4vw;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 8px 0;

    &::after {
      content: "";
      position: absolute;
      bottom: -40px;
      left: 0;
      width: 100%;
      height: 1px;
      background: ${({ theme }) => theme.suportColor.background};
    }
    &:last-child::after {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    gap: 12px 0;
  }
`;

export const Years = styled.p`
  font-size: 36px;
  line-height: 54px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue4};
  letter-spacing: -0.02rem;
  font-family: Montserrat;

  @media screen and (max-width: 1024px) {
    font-size: 3.5vw;
  }
  @media screen and (max-width: 820px) {
    font-size: 1.75rem;
    line-height: 2.625rem;
    letter-spacing: -0.1rem;
    color: #131517;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
    line-height: 2.25rem;
  }
`;

export const ImageBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 30px;
  align-items: flex-start;
  width: 100%;

  @media screen and (max-width: 1024px) {
    gap: 0 30px;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 24px 0;
  }
`;

export const Project = styled.p`
  max-width: 210px;
  min-width: fit-content;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.bodyBlack};
  letter-spacing: -0.02rem;

  @media screen and (max-width: 1024px) {
    min-width: fit-content;
    font-size: 1rem;
    line-height: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    padding-top: 16px;

    & > span {
      display: flex;
      gap: 0 8px;
    }
  }

  @media screen and (max-width: 500px) {
    padding-top: 0px;
    & > span {
      font-size: 0.875rem;
      line-height: 1.4875rem;
    }
  }
`;
export const Img = styled.div`
  max-width: 328px;
  max-height: 200px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1.3/1;

  @media screen and (max-width: 1024px) {
    aspect-ratio: 1/1;
  }

  @media screen and (max-width: 820px) {
    aspect-ratio: 16/9;
  }

  @media screen and (max-width: 500px) {
    padding: 0 15px;
    box-sizing: border-box;
  }

  & img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: bottom;

    @media screen and (max-width: 500px) {
      border-radius: 8px;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 20px 0;
  width: 100%;

  &::after {
    position: absolute;
    content: "";
    bottom: -56px;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.suportColor.background};

    @media screen and (max-width: 1024px) {
      bottom: -48.5px;
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;
/* border-bottom: 1px solid ${({ theme }) => theme.suportColor.background}; */
export const Description = styled.div`
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.suportColor.background};

  & p {
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.bodyBlack};

    @media screen and (max-width: 1024px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;
