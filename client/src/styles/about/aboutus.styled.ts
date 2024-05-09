import styled from "styled-components";
import banner from "../../asset/images/at_main_banner.jpg";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

export const Banner = styled.div`
  position: relative;
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }
`;
export const BannerContent = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px 0;

  @media screen and (max-width: 1024px) {
    gap: 14px 0;
  }

  & p {
    color: white;
  }
`;
export const BannerTitle = styled.div`
  display: flex;

  & .b_tit,
  .s_tit {
    text-align: center;
  }
  & .b_tit {
    font-size: calc(69px + 1vw);
    line-height: calc(69px + 1vw);
    font-weight: 700;
    letter-spacing: -0.02rem;

    @media screen and (max-width: 1024px) {
      font-size: calc(53px + 2.7vw);
      line-height: calc(53px + 2.7vw);
    }
    @media screen and (max-width: 500px) {
      font-size: 4rem;
      line-height: 4rem;
    }
  }
  & .s_tit {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
    letter-spacing: -0.02rem;

    @media screen and (max-width: 1024px) {
      font-size: 0.875rem;
      line-height: 1.3125rem;
    }
  }
`;
export const BannerDesc = styled.div`
  display: flex;
  gap: 0 5px;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
export const BannerText = styled(motion.p)`
  font-size: 1.125rem;
  line-height: 1.5rem;
  letter-spacing: -0.02rem;
  font-weight: 500;
  color: white;

  @media screen and (max-width: 1024px) {
    font-size: calc(11px + 0.7vw);
    line-height: calc(17px + 0.7vw);
  }
  @media screen and (max-width: 500px) {
    font-size: 0.875rem;
    line-height: 1.3125rem;
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
    font-weight: 600;
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
  padding: 20px 0 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 129px 0;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 1260px) {
    width: calc(100% - 60px);
    max-width: unset;
  }

  @media screen and (max-width: 1024px) {
    gap: 56px 0;
    padding: 20px 0 40px;
  }
  @media screen and (max-width: 500px) {
    padding: 1rem 0 2rem;
  }

  .flex-row {
    display: flex;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
  }
  .gp-1 {
    gap: 8px 0;

    @media screen and (max-width: 500px) {
      gap: 4px 0;
    }
  }
  .gp-2 {
    gap: 16px 0;

    @media screen and (max-width: 500px) {
      gap: 24px 0;
    }
  }
  .gp-3 {
    gap: 20px 0;

    @media screen and (max-width: 500px) {
      gap: 4px 0;
    }
  }
  .gp-4 {
    gap: 24px 0;
  }
  .gp-5 {
    gap: 40px 0;

    @media screen and (max-width: 500px) {
      gap: 20px 0;
    }
  }
`;
export const OverviewIcon = styled(BsFillPlusCircleFill)`
  font-size: 24px;
  color: ${({ theme }) => theme.suportColor.border};

  @media screen and (max-width: 820px) {
    font-size: 1.25rem;
  }
`;
export const OverviewBtn = styled.button`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0 8px;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.02rem;
  font-family: pretendard;
  padding: 0;

  @media screen and (max-width: 820px) {
    font-size: 0.875rem;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 128px 0;

  @media screen and (max-width: 1024px) {
    gap: 120px 0;
  }
  @media screen and (max-width: 820px) {
    gap: 100px 0;
  }
  @media screen and (max-width: 500px) {
    gap: 72px 0;
  }
  & img {
    width: 100%;
    object-fit: cover;

    @media screen and (max-width: 1024px) {
      height: auto;
    }
  }
`;

export const Table = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 140px 140px;
  border: 1px solid ${({ theme }) => theme.colors.greyScale3};
  border-radius: 8px;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 120px 120px 120px;
    & > div:nth-child(2n) {
      border-right: none;
    }

    & > div:nth-child(3n) {
      border-right: 1px solid ${({ theme }) => theme.colors.greyScale3} !important;
    }
    & > div:nth-child(4) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.greyScale3} !important;
    }
    & > div:last-child {
      border: none !important;
    }
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 110px);

    & > div:nth-child(odd) {
      border-right: none !important;
    }
    & > div:nth-child(5) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.greyScale3} !important;
    }
  }

  & > div:nth-child(3n) {
    border-right: none;
  }
  & > div:nth-child(6n) {
    border-bottom: none;
  }
  & > div:nth-child(n + 4) {
    border-bottom: none;
  }
`;
export const TableItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px 0;
  justify-content: center;
  border-right: 1px solid ${({ theme }) => theme.colors.greyScale3};
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyScale3};
  & .th,
  .td {
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: -0.02rem;
    text-align: center;
  }
  & .th {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textBlack};

    @media screen and (max-width: 500px) {
      font-weight: 400;
      color: ${({ theme }) => theme.colors.gray7};
    }
  }
  & .td {
    color: ${({ theme }) => theme.colors.bodyBlack};
    font-weight: 600;

    @media screen and (max-width: 500px) {
      font-weight: 500;
    }
  }
`;
export const BizSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px 0;

  @media screen and (max-width: 1024px) {
    gap: 64px 0;
  }
  @media screen and (max-width: 820px) {
    gap: 56px 0;
  }
  @media screen and (max-width: 500px) {
    gap: 32px 0;
  }
`;
export const Category = styled(motion.p)`
  color: ${({ theme }) => theme.colors.blue4};
  font-size: calc(10px + 0.52vw);
  line-height: calc(20px + 0.52vw);
  letter-spacing: -0.02rem;
  font-weight: 600;

  @media screen and (max-width: 1024px) {
    font-size: calc(10px + 0.52vw);
    line-height: calc(20px + 0.52vw);
  }

  @media screen and (max-width: 820px) {
    font-size: 0.875rem;
    line-height: 1.3125rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.8125rem;
    line-height: 1.21875rem;
  }

  &.ft-mont {
    font-family: Montserrat;
  }
`;

export const SectionTitle = styled(motion.h3)`
  font-size: calc(13px + 1.2vw);
  line-height: calc(24px + 1.6vw);
  font-weight: 700;
  letter-spacing: -0.02rem;
  color: ${({ theme }) => theme.colors.titleBlack};
  width: 870px;
  word-break: keep-all;

  @media screen and (max-width: 1260px) {
    width: 59vw;
  }

  @media screen and (max-width: 1024px) {
    width: 620px;
    font-size: 1.5rem;
    line-height: 2.4rem;
  }
  @media screen and (max-width: 820px) {
    max-width: 530px;
    width: 100%;
    font-size: 1.375rem;
    line-height: 2.2rem;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    font-size: 1.25rem;
    line-height: 2rem;
  }
`;
export const TextLine = styled.div`
  overflow: hidden;
`;

export const ArticleTitle = styled.h4`
  font-size: calc(21px + 0.6vw);
  line-height: calc(36px + 0.8vw);
  letter-spacing: -0.02rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.bodyBlack};

  @media screen and (max-width: 1024px) {
    font-size: 2.75vw;
    line-height: 4.3vw;
  }
  @media screen and (max-width: 820px) {
    font-size: 1.25rem;
    line-height: 2rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.125rem;
    line-height: 1.8rem;
  }
`;
export const ArticleDesc = styled.p`
  font-size: 1.125rem;
  line-height: 1.8rem;
  font-weight: 400;
  letter-spacing: -0.02rem;
  color: ${({ theme }) => theme.colors.textBlack};
  word-break: break-all;

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.6rem;
  }
  @media screen and (max-width: 820px) {
    font-size: 0.875rem;
    line-height: 1.4rem;
  }
`;

export const TextContainer = styled(motion.div)`
  width: 45%;

  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 1024px) {
    width: 55%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    order: 2;
  }

  & > div {
    width: 100%;
  }
  svg {
    transition: transform 0.3s ease-in-out;
  }
  &:hover svg {
    transform: rotate(180deg);
  }
`;

export const ImageContainer = styled(motion.div)`
  width: 55%;
  border-radius: 8px;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 820px) {
    width: 45%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 6 / 5;
  }
`;

export const BizList = styled(motion.div)`
  display: flex;
  gap: 0 5.3vw;
  align-items: center;

  @media screen and (max-width: 1024px) {
    gap: 0 48px;
  }
  @media screen and (max-width: 820px) {
    gap: 0 8.6vw;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 16px 0px;
  }
`;

export const BizContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px 0;

  @media screen and (max-width: 1024px) {
    gap: 100px 0;
  }
  @media screen and (max-width: 820px) {
    gap: 80px 0;
  }
  @media screen and (max-width: 500px) {
    gap: 56px 0;
  }
`;

export const AddressKor = styled.p`
  font-size: 1.125rem;
  line-height: 1.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.titleBlack};
  letter-spacing: -0.02rem;

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.6rem;
  }
  @media screen and (max-width: 820px) {
    font-size: 0.875rem;
    line-height: 1.4rem;
  }
`;
export const AddressEng = styled.p`
  font-size: 1rem;
  line-height: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textBlack};
  letter-spacing: -0.02rem;
  margin-top: 2px;

  @media screen and (max-width: 1024px) {
    font-size: 0.875rem;
    line-height: 1.4rem;
  }
  @media screen and (max-width: 820px) {
    font-size: 0.75rem;
    line-height: 1.2rem;
  }
`;

export const MapContainer = styled.div`
  #map {
    width: 100%;
    height: 600px;
    border-radius: 5px;

    @media (max-width: 768px) {
      width: 95%;
      margin: 0 auto;
      height: 350px;
    }
  }
`;
