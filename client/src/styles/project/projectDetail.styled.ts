import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export const Wrapper = styled.div`
  margin-top: 80px;

  @media screen and (max-width: 500px) {
    margin-top: 3.5rem;
  }
`;

export const Inner = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 72px 0;
  gap: 106px 0;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1260px) {
    max-width: unset;
    width: calc(100% - 60px);
  }
  @media screen and (max-width: 1024px) {
    padding: 24px 0 40px;
    gap: 98px 0;
  }

  @media screen and (max-width: 500px) {
    gap: 48px 0;
    width: calc(100% - 40px);
  }
`;

export const BuildingName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px 0;

  @media screen and (max-width: 1024px) {
    gap: 8px 0;
  }

  & > p {
    border-top: 1px solid ${({ theme }) => theme.colors.greyScale2};
    padding: 10px;
    color: ${({ theme }) => theme.colors.greyScale1};
    line-height: 24px;

    @media screen and (max-width: 1024px) {
      padding: 8px 20px;
    }
    @media screen and (max-width: 820px) {
      padding: 8px 12px;
    }
    @media screen and (max-width: 500px) {
      padding: 8px;
      font-size: 0.875rem;
      line-height: 1.3125rem;
    }
  }
`;
export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px 0;

  @media screen and (max-width: 1024px) {
    gap: 40px 0;
  }
  @media screen and (max-width: 820px) {
    gap: 32px 0;
  }
`;
export const BuildingImg = styled.div`
  & img {
    width: 100%;
    max-height: 800px;
    object-fit: cover;
    object-position: bottom;
    aspect-ratio: 6 / 4;
  }
  & p {
    margin-top: 12px;
    font-weight: 300;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.greyScale2};
    font-weight: 400;
    @media screen and (max-width: 1024px) {
      font-size: 0.75rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 0.625rem;
      line-height: 0.9375rem;
      margin-top: 8px;
    }
  }
`;

export const BuildingInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 48px 0;
  @media screen and (max-width: 1024px) {
    gap: 32px 0;
  }
  @media screen and (max-width: 820px) {
    gap: 24px 0;
  }
  @media screen and (max-width: 500px) {
    gap: 12px 0;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -64px;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.suportColor.borderline};

    @media screen and (max-width: 1024px) {
      bottom: -56px;
    }
    @media screen and (max-width: 500px) {
      bottom: -40px;
    }
  }

  & h3 {
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 700;
    font-family: Montserrat;
    @media screen and (max-width: 1024px) {
      font-size: calc(14px + 1vw);
      line-height: calc(26px + 1vw);
    }
    @media screen and (max-width: 820px) {
      font-size: calc(12px + 0.8vw);
      line-height: calc(21px + 0.8vw);
    }
  }
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px 30px;

  @media screen and (max-width: 1024px) {
    gap: 28px 16px;

    & div > p {
      font-size: 0.875rem;
      line-height: 1.3125rem;
    }
    & .table-tr > div {
      padding: 12px 4px;
    }
  }
  @media screen and (max-width: 1024px) {
    & .table-tr > div {
      padding: 8px 4px;
    }
  }
  @media screen and (max-width: 500px) {
    gap: 16px 24px;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Th = styled.div`
  padding: 12px 8px;
  border-bottom: 1px solid ${({ theme }) => theme.suportColor.border};
  & p {
    font-size: 1.25rem;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.greyScale1};
  }

  @media screen and (max-width: 1024px) {
    padding: 8px 4px;
  }
`;
export const Td = styled.div`
  padding: 20px 8px;

  @media screen and (max-width: 1024px) {
    padding: 12px 4px;
  }
  & p {
    color: ${({ theme }) => theme.colors.titleBlack};
    font-size: 1.25rem;
    line-height: 30px;
    font-weight: 500;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 106px 0;

  @media screen and (max-width: 1024px) {
    gap: 98px 0;
  }
  @media screen and (max-width: 500px) {
    gap: 74px 0;
  }
`;
export const Product = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px 0;

  @media screen and (max-width: 1024px) {
    gap: 24px 0;
  }
`;
export const Carousel = styled.div`
  & h3 {
    font-size: 2rem;
    font-weight: 700;
    color: #000;
    line-height: 48px;

    @media screen and (max-width: 1024px) {
      font-size: calc(14px + 1vw);
      line-height: calc(26px + 1vw);
    }
    @media screen and (max-width: 820px) {
      font-size: calc(12px + 0.8vw);
      line-height: calc(21px + 0.8vw);
    }
  }
  & .swiper {
  }
`;
export const CarouselHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 44px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 32px;
  }
  @media screen and (max-width: 820px) {
    margin-bottom: 16px;
  }
  @media screen and (max-width: 500px) {
    margin-bottom: 24px;
  }
  & > div {
    display: flex;
    gap: 0 4px;

    @media screen and (max-width: 1024px) {
      gap: 0 8px;
    }
  }
`;
export const CarouselTitle = styled.div`
  font-size: 1.35rem;
  line-height: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.bodyBlack};

  @media screen and (max-width: 1024px) {
    font-size: 1.125rem;
    line-height: 1.5rem;
  }
  @media screen and (max-width: 820px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const CarouselImg = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 1.5/1;
  @media screen and (max-width: 1024px) {
    aspect-ratio: 4/3;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &:hover::before {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const NaviButton = styled.button`
  width: 48px;
  height: 48px;
  border: 1px solid black;
  line-height: 0px;

  @media screen and (max-width: 1024px) {
    width: 40px;
    height: 40px;
    border-color: ${({ theme }) => theme.colors.gray3};
    & svg {
      color: ${({ theme }) => theme.colors.gray7};
    }
    &:disabled {
      svg {
        color: #d5d5d5;
      }
    }
  }
  @media screen and (max-width: 820px) {
    width: 32px;
    height: 32px;
    padding: 0;
    & svg {
      font-size: 1.125rem;
    }
  }

  &:hover {
    background: ${({ theme }) => theme.colors.blue1};
    transition: background 0.2s ease-in-out;
    & svg {
      color: white;
    }
  }
`;
export const NextArrow = styled(IoIosArrowBack)`
  font-size: 1.5rem;
`;
export const PrevArrow = styled(IoIosArrowForward)`
  font-size: 1.5rem;
`;

export const CarouselDevelop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
  cursor: pointer;
`;

export const PageTitleContainer = styled.div`
  display: flex;
  gap: 0 12px;

  @media screen and (max-width: 1024px) {
    gap: 0 9px;
  }
  @media screen and (max-width: 500px) {
    gap: 0 6px;
  }
`;
export const PageTitle = styled.div`
  display: flex;
  overflow: hidden;

  & h3 {
    font-size: calc(37px + 0.7vw);
    line-height: calc(62px + 0.7vw);

    @media screen and (max-width: 1024px) {
      font-size: 4.7vw;
      line-height: 7vw;
    }
    @media screen and (max-width: 820px) {
      font-size: 4.2vw;
      line-height: 6.6vw;
    }
    @media screen and (max-width: 500px) {
      font-size: calc(17px + 2vw);
      line-height: calc(27px + 2vw);
    }
  }
`;
