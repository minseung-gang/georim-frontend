import styled from "styled-components";
import { motion } from "framer-motion";

export const Banner = styled.img`
  object-position: bottom;
`;
export const Content = styled.div`
  max-width: 1600px;
  width: 100%;
  display: flex;
  padding: 0 8%;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 auto;
  box-sizing: border-box;

  @media screen and (max-width: 1660px) {
    max-width: unset;
  }

  @media screen and (max-width: 1024px) {
    justify-content: space-between;
    padding: 0;
  }

  @media screen and (max-width: 500px) {
    gap: 24px 0;
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const Slogan = styled.img`
  @media screen and (max-width: 1280px) {
    width: 15vw;
    object-fit: contain;
    height: 100%;
  }

  @media screen and (max-width: 500px) {
    width: 25%;
  }
`;

export const ContentDetails = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 24px 0;
  width: 75%;

  @media screen and (max-width: 820px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 0;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px 0;

  @media screen and (max-width: 820px) {
    gap: 24px 0;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    gap: 14px 0;
  }
`;
export const CompanyInfo = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  gap: 0 24px;
  overflow: hidden;
  & .sign {
    width: 70px;
    height: 36px;
    object-fit: contain;

    @media screen and (max-width: 820px) {
      width: 64px;
      height: 33px;
    }
    @media screen and (max-width: 500px) {
      width: 53px;
      height: 27px;
    }
  }
`;

export const PageTitle = styled(motion.h3)`
  font-size: calc(10px + 2.4vw);
  font-weight: 600;
  line-height: calc(23px + 3.2vw);
  letter-spacing: -0.02rem;

  @media screen and (max-width: 1024px) {
    font-size: 2.25rem;
    line-height: 3.375rem;
  }
  @media screen and (max-width: 820px) {
    font-size: calc(14px + 2.2vw);
    line-height: calc(23px + 3.1vw);
  }
  @media screen and (max-width: 500px) {
    font-size: 1.375rem;
    line-height: 2.0625rem;
  }
`;

export const TextLine = styled.div`
  overflow: hidden;
  display: inline-block;
`;

export const Text = styled(motion.p)`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 2.025rem;
  letter-spacing: -0.02rem;
  color: ${({ theme }) => theme.colors.bodyBlack};

  @media screen and (max-width: 1260px) {
    font-size: 1rem;
    line-height: 1.8rem;
  }

  @media screen and (max-width: 820px) {
    font-size: 0.875rem;
    line-height: 1.575rem;
  }
`;
export const LeaderName = styled.p`
  font-size: 1.125rem;
  line-height: 2.025rem;
  font-weight: 600;
  letter-spacing: -0.01rem;
  color: ${({ theme }) => theme.colors.greyScale2};

  @media screen and (max-width: 820px) {
    font-size: 0.875rem;
    line-height: 1.575rem;
  }
`;
