import styled from "styled-components";
import BannerImg from "../../asset/images/contact_banner_01.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import ApplyBackground from "../../asset/images/contact_bi_04.jpg";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  overflow: hidden;

  & .breadcrumb {
    @media screen and (max-width: 1260px) {
      width: calc(100% - 60px);
    }
    @media screen and (max-width: 500px) {
      width: calc(100% - 40px);
    }
  }
`;

export const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(${BannerImg}) no-repeat;
  background-position: center;
  background-size: cover;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const BannerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  & > div {
    overflow: hidden;
  }
`;
export const BannerTitle = styled(motion.p)`
  font-size: calc(8px + 2.92vw);
  line-height: calc(33px + 2.95vw);
  font-weight: 700;
  text-align: center;
  color: white;

  @media screen and (max-width: 1024px) {
    line-height: calc(24px + 2.95vw);
  }
  @media screen and (max-width: 500px) {
    font-size: 1.75rem;
    line-height: 2.625rem;
  }
`;

export const ScrollBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px 0;
  & > p {
    font-size: 1rem;
    font-weight: 300;
    color: white;

    @media screen and (max-width: 1024px) {
      font-size: 0.875rem;
      line-height: 1.044375rem;
    }
    @media screen and (max-width: 820px) {
      font-size: 0.8125rem;
      line-height: 0.969375rem;
    }
  }
  & > div {
    position: relative;
    height: calc(100vh * 0.1);
    width: 2px;
    background: rgba(255, 255, 255, 0.2);
    overflow: hidden;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      background: white;
      height: 100%;
      width: 2px;
      animation: slideAnimation 1.4s ease-out infinite;
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
  }
`;

export const Main = styled.main`
  margin: 40px 0 120px;
  display: flex;
  flex-direction: column;
  gap: 56px 0;
  @media screen and (max-width: 1024px) {
    margin: 20px 0 150px;
  }
  @media screen and (max-width: 820px) {
    margin: 20px 0 130px;
  }
  @media screen and (max-width: 500px) {
    margin: 1rem 0 4.5rem;
  }
  .section {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 30px 0;

    @media screen and (max-width: 1260px) {
      width: calc(100% - 60px);
    }
    @media screen and (max-width: 500px) {
      width: calc(100% - 40px);
      gap: 16px 0;
    }
    .flex-center {
      display: flex;
      align-items: center;
    }
  }
`;
export const MainInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 185px 0;

  @media screen and (max-width: 1024px) {
    gap: 120px 0;
  }
  @media screen and (max-width: 820px) {
    gap: 100px 0;
  }
  @media screen and (max-width: 500px) {
    gap: 88px 0;
  }
`;
export const Recruit = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 40px 0;
  max-width: 1545px;
  margin: 0 0 0 auto;

  @media screen and (max-width: 1590px) {
    margin-left: 30px;
  }

  @media (max-width: 1024px) {
    margin-left: 30px;
  }

  @media screen and (max-width: 900px) {
    margin-left: 0;
  }
  @media screen and (max-width: 500px) {
    gap: 28px 0;
  }
  & > div {
    overflow: hidden;
  }

  & .strong {
    font-weight: 700;

    @media screen and (max-width: 1024px) {
      font-size: calc(0.65rem + 0.5vw);
      line-height: calc(21px + 0.5vw);
    }

    @media screen and (max-width: 900px) {
      font-size: calc(12px + 0.55vw);
      line-height: calc(20px + 0.55vw);
    }
    @media screen and (max-width: 500px) {
      font-size: 1rem;
      line-height: 1.3125rem;
    }
  }
`;
export const RecruitText = styled.div`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 32.4px;
  word-break: keep-all;
  letter-spacing: -0.03em;
  display: flex;
  flex-direction: column;
  gap: 16px 0;

  @media screen and (max-width: 500px) {
    gap: 22px 0;
  }
`;
export const TextContainer = styled.div`
  & > div {
    overflow: hidden;
  }
  & p {
    font-size: calc(14px + 0.21vw);
    line-height: calc(30px + 0.21vw);

    @media screen and (max-width: 1024px) {
      font-size: 1rem;
      line-height: 1.7rem;
    }
  }
`;
export const TitleSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 4px 0;

  @media screen and (max-width: 900px) {
    width: calc(100% - 60px);
    margin: 0 auto;
  }
  @media screen and (max-width: 500px) {
    width: calc(100% - 40px);
  }
  & > div {
    overflow: hidden;
  }
  & span {
    background: ${({ theme }) => theme.colors.blue4};
    border-radius: 12px;
    padding: 5.5px 8px;
    color: white;
    width: fit-content;
    font-size: 0.875rem;
    line-height: 1.3125rem;
    font-weight: 600;

    @media screen and (max-width: 1024px) {
    }
    @media screen and (max-width: 820px) {
      font-size: 0.8125rem;
      line-height: 1.21875rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 0.75rem;
      line-height: 1.125rem;
      padding: 5px 10px;
    }
  }
  & h3 {
    font-size: calc(15px + 1.72vw);
    line-height: calc(39px + 1.72vw);
    font-weight: 600;
    color: ${({ theme }) => theme.colors.titleBlack};

    @media screen and (max-width: 820px) {
      font-size: 1.75rem;
      line-height: 2.975rem;
    }
  }
`;

export const RecruitContent = styled.div`
  gap: 3.6vw;
  display: flex;
  align-items: flex-start;
  position: relative;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 28px 0;
  }

  & .swiper {
    @media screen and (max-width: 900px) {
      padding-left: 30px;
    }
    @media screen and (max-width: 500px) {
      padding-left: 20px;
    }
  }

  & .swiper-slide {
    padding: 0 10px 10px 10px;
    box-sizing: border-box;

    @media screen and (max-width: 900px) {
      padding: 0 0px 10px 0px;
    }
  }

  .swiper {
    width: 100%;
  }
`;
export const RecruitInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 541px;

  @media screen and (max-width: 900px) {
    width: calc(100% - 60px);
    margin: 0 auto;
  }
  @media screen and (max-width: 500px) {
    width: calc(100% - 40px);
  }
  & > div {
    overflow: hidden;
  }
`;

export const Card = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 5px 2px 9px 1px rgba(0, 0, 0, 0.08);
`;

export const CardHeader = styled.div`
  padding: 32px 32px 24px 32px;
  background: linear-gradient(180deg, #48dbef 0%, #4269f1 100%);

  @media screen and (max-width: 1024px) {
    padding: 28px 20px 20px 20px;
  }
  @media screen and (max-width: 1024px) {
    padding: 22px 20px 16px 20px;
  }
  @media screen and (max-width: 1024px) {
    padding: 18px 16px 14px 16px;
  }
`;
export const Annual = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.2rem;
  color: white;
  padding: 4px 14px;
  border: 2px solid white;
  border-radius: 4px;
  width: fit-content;

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.193125rem;
  }
  @media screen and (max-width: 820px) {
    padding: 4.5px 12px;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.875rem;
    line-height: 1.044375rem;
    padding: 3.5px 12px;
  }
`;

export const StaffInfo = styled.div`
  display: flex;
  align-items: center;
  align-items: baseline;
  gap: 0 12px;
  margin-top: 12px;
  line-height: 0px;

  & p {
    color: white;
  }

  & .employee-name {
    font-size: calc(15px + 0.7vw);
    line-height: calc(21px + 0.7vw);
    font-weight: 600;

    @media screen and (max-width: 1024px) {
      font-size: calc(16px + 0.7vw);
    }
    @media screen and (max-width: 820px) {
      font-size: 1.25rem;
      line-height: 1.491875rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 1.125rem;
      line-height: 1.3425rem;
    }
  }
  & .employee-age {
    font-weight: 300;
    font-size: calc(18px + 0.2vw);

    @media screen and (max-width: 820px) {
      font-size: calc(16px + 0.25vw);
    }
    @media screen and (max-width: 500px) {
      font-size: 1rem;
    }
  }
`;

export const StaffDetails = styled.div`
  padding: 24px 32px 44px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px 0;

  @media screen and (max-width: 1024px) {
    padding: 16px 20px 24px 20px;
  }
  @media screen and (max-width: 900px) {
    gap: 16px 0;
  }
  @media screen and (max-width: 500px) {
    padding: 16px;
  }
`;

export const StaffPay = styled.div`
  & p {
    font-size: 1.125rem;
    line-height: 1.68rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textBlack};

    @media screen and (max-width: 1024px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
    @media screen and (max-width: 900px) {
      font-size: 0.875rem;
      line-height: 1.3125rem;
    }
  }
  & h5 {
    color: #0057ff;
    font-weight: 700;
    font-size: calc(0.7em + 1.3vw);
    line-height: calc(0.75em + 1.3vw);
    width: fit-content;

    @media screen and (max-width: 900px) {
      font-size: calc(14px + 1.3vw);
      line-height: calc(26px + 1.3vw);
    }
    @media screen and (max-width: 500px) {
      font-size: 1.375rem;
      line-height: 2.0625rem;
    }
  }
`;

export const PropertyDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;

export const Property = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & p {
    font-size: calc(0.65rem + 0.5vw);
    line-height: calc(21px + 0.5vw);
    font-weight: 500;

    @media screen and (max-width: 900px) {
      font-size: calc(12px + 0.55vw);
      line-height: calc(20px + 0.55vw);
    }
  }
  & > div {
    display: flex;
    width: 70%;
    justify-content: space-between;
    & > div {
      display: flex;
      width: 32%;
      justify-content: space-between;
    }
  }
`;
export const Navigation = styled.div`
  display: flex;
  gap: 0 24px;
  position: absolute;
  bottom: 0;
  left: 0;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
export const NaviButton = styled.div`
  width: 56px;
  height: 56px;
  border: 1px solid ${({ theme }) => theme.colors.greyScale3};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;

export const NextArrow = styled(IoIosArrowBack)``;

export const PrevArrow = styled(IoIosArrowForward)``;

export const IntroSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px 0;

  @media screen and (max-width: 1024px) {
    gap: 120px 0;
    margin-top: 10px;
  }
  @media screen and (max-width: 820px) {
    gap: 100px 0;
  }
  @media screen and (max-width: 500px) {
    gap: 56px 0;
    margin-top: 16px;
  }
`;
export const IntroItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 0 5vw;

  @media screen and (max-width: 1024px) {
    gap: 0 30px;
  }
  @media screen and (max-width: 820px) {
    gap: 0 16px;
  }
  @media screen and (max-width: 500px) {
    gap: 12px 0;
    grid-template-columns: 1fr;
  }
`;
export const IntroImageBox = styled(motion.div)`
  max-width: 500px;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 3px 3px 17px -1px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 500px) {
    order: 1;
  }

  & img {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    display: block;

    @media screen and (max-width: 1024px) {
      aspect-ratio: 5/3;
    }
  }
`;

export const IntroDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px 0;

  @media screen and (max-width: 500px) {
    order: 2;
    gap: 8px 0;
  }
`;

export const IntroTitle = styled(motion.div)`
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  gap: 0 8px;
  & img {
    width: calc(14px + 1.35vw);
    height: calc(14px + 1.35vw);

    @media screen and (max-width: 1024px) {
      width: 30px;
      height: 30px;
    }
    @media screen and (max-width: 820px) {
      width: 20px;
      height: 20px;
    }
  }
  & h4 {
    font-size: calc(5px + 1.85vw);
    line-height: calc(25px + 1.85vw);
    font-weight: 600;

    @media screen and (max-width: 820px) {
      font-size: 1.25rem;
      line-height: 1.875rem;
    }
  }
`;
export const IntroDesc = styled(motion.p)`
  font-size: calc(13px + 0.32vw);
  line-height: calc(24px + 0.32vw);
  color: ${({ theme }) => theme.colors.textBlack};

  @media screen and (max-width: 1024px) {
    font-size: calc(8px + 0.8vw);
    line-height: calc(17px + 0.8vw);
  }
  @media screen and (max-width: 820px) {
    font-size: calc(10px + 0.5vw);
    line-height: calc(18px + 0.8vw);
  }

  @media screen and (max-width: 500px) {
    font-size: 0.875rem;
    line-height: 1.4rem;
  }
`;

export const FAQContainer = styled.div<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 500px) {
    .faq-answer .highlight,
    .faq-question .highlight {
      font-size: 1rem;
      line-height: 1.5rem;
    }
    & .faq-answer p {
      font-size: 0.875rem;
      line-height: 1.575rem;
    }
  }

  .faq-question {
    p {
      font-weight: 600;
      letter-spacing: -0.02em;
    }
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -16px;
    left: 0;
    height: 2px;
    width: 100%;
    background: ${({ theme }) => theme.colors.greyScale4};
  }

  p {
    font-size: calc(13px + 0.5vw);
    line-height: calc(28px + 0.5vw);
    font-weight: 400;

    @media screen and (max-width: 1024px) {
      font-size: 1.125rem;
      line-height: 1.8rem;
    }
    @media screen and (max-width: 820px) {
      font-size: 1rem;
      line-height: 1.575rem;
    }
  }
  .highlight {
    color: ${({ theme }) => theme.colors.blue4};
    font-weight: 700;
  }
  .faq-question {
    padding: 25.5px 12px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
      padding: 23px 12px;
    }
    @media screen and (max-width: 820px) {
      padding: 16px 12px;
    }
    @media screen and (max-width: 500px) {
      padding: 12px;
    }
  }
  .highlight {
    margin-right: 16px;

    @media screen and (max-width: 500px) {
      margin-right: 8px;
    }
  }

  .faq-answer {
    padding: 25px 12px;
    border-radius: 8px;
    background: ${({ theme }) => theme.suportColor.background};
    display: flex;
    transition: all 0.5s ease-in-out;
    margin-top: 16px;

    @media screen and (max-width: 1024px) {
      padding: 20px 12px;
    }
    @media screen and (max-width: 820px) {
      padding: 16px 12px;
      margin-top: 8px;
    }

    .highlight {
      @media screen and (max-width: 500px) {
        font-size: 1rem;
        line-height: 1.5rem;
      }
      p {
        font-weight: 500;
        letter-spacing: -0.03em;

        @media screen and (max-width: 1024px) {
          font-size: 1rem;
        }

        @media screen and (max-width: 820px) {
          font-size: 0.875rem;
        }
      }
    }
  }
`;

export const FAQContent = styled.div`
  padding: 24px 32px;
  box-sizing: border-box;
  border-radius: 16px;
  border: 2px solid ${({ theme }) => theme.suportColor.background};
  box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 32px 0;

  @media screen and (max-width: 820px) {
    padding: 24px 20px;
  }
  @media screen and (max-width: 500px) {
    padding: 24px 18px;
  }

  & ${FAQContainer}:last-child::before {
    display: none;
  }
`;

export const PlusIcon = styled(FaPlus)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.greyScale2};

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const MinusIcon = styled(FaMinus)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.greyScale2};
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const FAQDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  margin-top: 24px;

  @media screen and (max-width: 1024px) {
    padding: 0 16px;
  }
  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 16px;
    gap: 4px 0;
  }
  .contact-info {
    display: flex;
    gap: 0 30px;
    font-size: 1.125rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textBlack};

    @media screen and (max-width: 1024px) {
      font-size: 0.875rem;
      line-height: 1.3125rem;
      gap: 0 30px;
    }
    @media screen and (max-width: 500px) {
      gap: 0 20px;
    }
    .manager-name {
      position: relative;
      &::before {
        position: absolute;
        content: "";
        width: 2px;
        height: 75%;
        background: ${({ theme }) => theme.colors.greyScale3};
        right: -15px;
        top: 50%;
        transform: translateY(-50%);

        @media screen and (max-width: 1024px) {
          background: ${({ theme }) => theme.colors.gray3};
        }

        @media screen and (max-width: 500px) {
          width: 2px;
          right: -11px;
        }
      }
    }

    .manager-phone {
      display: flex;
      align-items: center;
      gap: 0 5px;
    }
  }
  .notice {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3rem;
    color: ${({ theme }) => theme.colors.textBlack};

    @media screen and (max-width: 1024px) {
      font-size: 0.8125rem;
    }
    @media screen and (max-width: 500px) {
      color: ${({ theme }) => theme.colors.grey6};
      line-height: 1.125rem;
    }
  }
`;

export const PhoneIcon = styled(BsFillTelephoneFill)`
  color: ${({ theme }) => theme.colors.greyScale3};
`;

export const Apply = styled.div`
  & p,
  h4 {
    color: white;
  }
`;

export const DirectBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 15px;
  padding: 32px 0;
  background: ${({ theme }) => theme.colors.titleBlack};
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  @media screen and (max-width: 1024px) {
    padding: 20px 0;
  }
  @media screen and (max-width: 820px) {
    padding: 17.5px 0;
  }
  &:hover {
    background: #0099ff;
  }

  & a {
    font-size: calc(8px + 0.81vw);
    line-height: calc(28px + 0.81vw);
    font-weight: 500;
    color: white;

    @media screen and (max-width: 1024px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
    @media screen and (max-width: 820px) {
      font-size: 0.875rem;
      line-height: 1.3125rem;
    }
  }
`;

export const ApplyBanner = styled.div`
  height: 60vh;
  background: url(${ApplyBackground}) no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 0;
  }
  & p,
  h4 {
    z-index: 1;
    color: white;
  }
  & p {
    font-size: calc(10px + 1.5vw);
    line-height: calc(22px + 1.5vw);
    font-weight: 400;

    @media screen and (max-width: 1024px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
  & h4 {
    font-size: 2.5vw;
    line-height: 3.5vw;
    font-weight: 700;
    text-align: center;

    @media screen and (max-width: 1024px) {
      font-size: 1.75rem;
      line-height: 2.45rem;
    }
  }
`;

export const ArrowIcon = styled(BsArrowUpRight)`
  font-size: 20px;
  color: white;

  @media screen and (max-width: 500px) {
    font-size: 17px;
  }
`;
