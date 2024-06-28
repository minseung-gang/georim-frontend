import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  width: 95%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.9vw 0;
  padding-top: 4rem;

  &.m-t-24 {
    margin-top: 24px;
  }

  @media screen and (max-width: 1536px) {
    max-width: unset;
    width: 100%;
    padding: 0 60px;
    margin: 0;
    gap: 20px 0;
  }
  @media screen and (max-width: 1280px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 970px) {
    padding: 0;
    margin: 0;
    gap: 6.2vw 0;
  }
  @media screen and (max-width: 768px) {
    order: 5;
  }
  @media screen and (max-width: 500px) {
  }
`;

export const TitleContainer = styled.div`
  & .gp-0-8 {
    gap: 0 8px;
  }

  @media screen and (max-width: 970px) {
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    align-items: center;
  }
`;
export const Cursor = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  position: fixed;
  z-index: 1000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  cursor: none;
  opacity: 0;

  & p {
    color: white;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 700;
  }
  &.cursor-grow {
    transform: translate(-50%, -50%) scale(1.4);
    background-color: ${({ theme }) => theme.colors.blue1};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    opacity: 1;
  }
`;

/* export const Cursor = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  position: fixed;
  z-index: 1000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  cursor: none;
  opacity: 0;

  & p {
    color: white;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 700;
  }
  &.cursor-grow {
    transform: translate(-50%, -50%) scale(1.4);
    background-color: rgba(11, 25, 65, 0.8)};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    opacity:1;
  }
`; */
export const Title = styled.div`
  & h3 {
    font-weight: 700;
    font-size: calc(18px + 1.67vw);
    line-height: calc(25px + 3vw);
    color: ${({ theme }) => theme.colors.titleBlack};
    letter-spacing: -1px;

    @media screen and (max-width: 1536px) {
      padding: 10px 24px;
    }
    @media screen and (max-width: 1280px) {
      font-size: 2.25rem;
      line-height: 3.6rem;
    }
    @media screen and (max-width: 970px) {
      padding: 10px 30px;
    }
    @media screen and (max-width: 600px) {
      font-size: 1.625rem;
      line-height: 2.4375rem;
      padding: 0;
    }
  }
`;

export const TitleBtnCotainer = styled.div`
  @media screen and (min-width: 501px) {
    display: none;
  }
  display: flex;
  align-items: center;
  gap: 0 2px;
  & p {
    font-size: 0.75rem;

    font-weight: 600;
    font-family: Montserrat;
    color: ${({ theme }) => theme.colors.textBlack};
  }
  & svg {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.textBlack};
  }
`;
export const BrowserContent = styled.div`
  display: flex;

  @media screen and (max-width: 1536px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 27px;
  }
  @media screen and (max-width: 970px) {
    display: none;
  }
  & .inner {
    width: 600px;
    @media screen and (max-width: 1536px) {
      width: 100%;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px 0;
`;
export const ContentDetails = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  border-radius: 16px;
  width: 100%;
  cursor: pointer;

  @media screen and (min-width: 1536px) {
    .backdrop {
    }
    &:hover {
      cursor: none;
      .backdrop {
        display: flex;
        width: 43rem;
        background: ${({ theme }) => theme.colors.blue4};
      }
      .oth-info p {
        color: white;
        min-width: fit-content;

        &.location_text::before {
          display: block;
        }

        &.category_text {
          display: block;
        }
      }
      p {
        color: white;
      }
    }
  }

  @media screen and (max-width: 1536px) {
    padding: 16px 24px;
    border-radius: 4px;
    &:hover {
      cursor: none;
      background: ${({ theme }) => theme.colors.blue4};
      box-shadow: 4px 4px 4px 0px rgba(14, 47, 74, 0.1);

      .oth-info p {
        color: white;
        &.location_text::before {
          background: rgba(255, 255, 255, 0.4);
        }
      }
      p {
        color: white;
      }
    }
  }
  @media screen and (max-width: 1280px) {
    padding: 12px 24px;
  }
`;
export const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: flex-end;
  padding: 0 32px;
  border-radius: 16px;
  z-index: 1;
  box-shadow: 4px 4px 4px 0px rgba(14, 47, 74, 0.1);
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
`;
export const ItemName = styled.p`
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 600;

  @media screen and (max-width: 1536px) {
    font-size: 1.5rem;
    line-height: 2.25rem;
  }
  @media screen and (max-width: 1280px) {
    font-size: 1.375rem;
    line-height: 2.0625rem;
  }
`;
export const FlexBox = styled.div`
  display: flex;

  &.items-center {
    align-items: center;
  }
  &.justify-center {
    justify-content: center;
  }
  &.flex-column {
    flex-direction: column;
  }
  &.gap-y-8 {
    gap: 8px 0;
  }
  &.gap-x-31 {
    gap: 0 31px;
  }
  & .oth-info {
    & p:first-child {
      &::before {
        content: "";
        position: absolute;
        right: -16px;
        top: 50%;
        transform: translateY(-50%);
        height: 18px;
        width: 1px;

        @media screen and (min-width: 1536px) {
          background: rgba(255, 255, 255, 0.4);
          display: none;
        }
        @media screen and (max-width: 1536px) {
          height: 14px;
          background: ${({ theme }) => theme.colors.textBlack};
          display: block;
        }
      }
    }
    p {
      position: relative;
      font-size: 1.25rem;
      line-height: 1.875rem;
      color: ${({ theme }) => theme.colors.textBlack};

      @media screen and (min-width: 1536px) {
        &.category_text {
          display: none;
        }
      }

      @media screen and (max-width: 1536px) {
        font-size: 1rem;
        line-height: 1.5rem;

        &.category_text {
          display: block;
        }
      }
      @media screen and (max-width: 1280px) {
        font-size: 0.875rem;
        line-height: 1.3125rem;
      }
    }
  }
`;
export const ArrowContainer = styled.div`
  background: rgba(255, 255, 255, 0.4);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1536px) {
    width: 40px;
    height: 40px;
  }
`;

export const RightArrow = styled(IoIosArrowForward)`
  color: white;
`;
export const RightArrow2 = styled(IoIosArrowRoundForward)`
  color: white;
  font-size: 24px;
`;
export const Image = styled.div<{ $link: string }>`
  position: relative;
  background-position: bottom;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  aspect-ratio: 8/6;
  & > img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  @media screen and (max-width: 1536px) {
    width: 100%;
    aspect-ratio: unset;
    border-radius: 4px;
  }
`;
export const ImageContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 32px 32px 24px;

  @media screen and (max-width: 1280px) {
    padding: 24px;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      178.59deg,
      rgba(255, 255, 255, 0) 50%,
      rgba(21, 27, 80, 0.7) 100%
    );
  }

  & .sticker {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.blue1};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.375rem;
    font-weight: 700;

    @media screen and (max-width: 1536px) {
      visibility: hidden;
    }
  }
`;

export const PriceInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  gap: 0 16px;

  @media screen and (max-width: 1536px) {
    gap: 0 28px;

    &:last-child {
      margin-top: 12px;
    }
  }

  p {
    font-size: 1.5rem;
    line-height: 2.25rem;
    font-weight: 600;
    color: white;

    @media screen and (max-width: 1536px) {
      font-size: 1rem;
      line-height: 1.5rem;

      &.py-price {
        font-size: 1.5rem;
        line-height: 2.25rem;
        font-weight: 700;
      }
    }
    @media screen and (max-width: 1280px) {
      &.py-price {
        font-size: 1.375rem;
        line-height: 2.0625rem;
      }
    }
  }
`;

export const MobileContent = styled.div`
  @media screen and (min-width: 970px) {
    display: none;
  }
`;
export const SwiperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5vh 0;
`;
export const SwiperContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5vh 0;
`;
export const SwiperImage = styled.div`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  aspect-ratio: 18.8 / 20;
  height: 34vh;

  @media screen and (max-width: 500px) {
    height: unset;
  }

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
  }
`;
export const Status = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  background: ${({ theme }) => theme.colors.blue1};
  font-size: calc(0.6rem + 0.8vw);
  line-height: 1.125rem;
  color: white;
  font-weight: 600;
  @media screen and (max-width: 970px) {
    border-radius: 0px 4px 4px 0;
    padding: 8px 16px;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.8125rem;
    line-height: 1.21875rem;
    padding: 4px 12px;
  }
`;
export const SwiperDetails = styled.div``;
export const ViewBtn = styled.div`
  display: block;
  text-align: center;
  font-size: 0.625rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textBlack};
  line-height: 1rem;
  padding: 8px 0;
  border: 1px solid ${({ theme }) => theme.colors.greyScale3};
  border-radius: 1px;
`;
export const BuildingName = styled.div`
  color: #121212;
  font-size: calc(0.8rem + 1vw);
  line-height: calc(1.3rem + 1vw);
  letter-spacing: -0.03rem;
  font-weight: 600;
  word-break: keep-all;
`;
export const BuildingAddress = styled.div`
  font-size: calc(0.5rem + 1.1vw);
  line-height: calc(0.85rem + 1.2vw);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textBlack};
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
  margin-top: 2px;
`;

export const SwiperBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 24px;
`;

export const NaviButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.greyScale3};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const NextArrow = styled(IoIosArrowBack)``;
export const PrevArrow = styled(IoIosArrowForward)``;
