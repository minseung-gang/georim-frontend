import styled from "styled-components";
import YouTube from "react-youtube";
import { motion } from "framer-motion";

export const Video = styled(motion.div)<{ onLoad: boolean }>`
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 5px;
  overflow: hidden;
  background: black;
  & iframe {
    height: 100%;
    opacity: ${(props) => (props.onLoad ? 1 : 0)};
  }
  & > div {
    height: 100%;
  }
`;

export const Wrpper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 91px auto 0;

  @media screen and (max-width: 1280px) {
    margin-top: 81px;
  }
  @media screen and (max-width: 1260px) {
    width: calc(100% - 60px);
  }
  @media screen and (max-width: 500px) {
    width: calc(100% - 40px);
    margin-top: 57px;
  }
`;
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px 0;
  padding: 40px 0;

  @media screen and (max-width: 1024px) {
    padding: 1rem 0 2rem;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px 0;
  & > div {
    overflow: hidden;
  }
  & h3 {
    font-size: calc(23px + 1.72vw);
    line-height: calc(43px + 1.72vw);
    font-weight: 600;
    text-align: center;

    @media screen and (max-width: 1024px) {
      font-size: calc(15px + 2.1vw);
      line-height: calc(31px + 2.1vw);
    }
    @meida screen and(max-width: 820px) {
      font-size: calc(17px + 1.9vw);
      line-height: calc(33px + 1.9vw);
    }
  }
`;
export const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 81px 0;

  @media screen and (max-width: 1024px) {
    gap: 40px 0;
  }
`;
export const VideoForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px 0;

  @media screen and (max-width: 1024px) {
    gap: 12px 0;
  }
`;
export const ContentDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px 0;

  @media screen and (max-width: 1024px) {
    gap: 4px 0;
  }
  @media screen and (max-width: 500px) {
    gap: 0;
  }
`;
export const StyledYoutube = styled(YouTube)`
  width: 100%;
  height: 50vw;
`;

export const ContentTitle = styled.p`
  font-size: 1.25rem;
  line-height: 28px;
  font-weight: 500;

  @media screen and (max-width: 820px) {
    font-size: 1rem;
    line-height: 1.4rem;
  }
`;

export const ContentDate = styled.p`
  font-size: 1rem;
  line-height: 1.4rem;
  color: ${({ theme }) => theme.colors.greyScale2};

  @media screen and (max-width: 820px) {
    font-size: 0.875rem;
    line-height: 1.225rem;
  }
`;
