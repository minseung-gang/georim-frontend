import styled from "styled-components";
import banner from "../../asset/images/hm_banner_02.jpg";
import { FaPlus } from "react-icons/fa6";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(${banner}) no-repeat;
  background-size: cover;

  @media screen and (max-width: 768px) {
    order: 4;
  }

  &::after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
`;

export const Inner = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1300px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 0 14.5vw;

  @media screen and (max-width: 1536px) {
    max-width: unset;
    margin: 0 60px 0;
  }
  @media screen and (max-width: 1280px) {
    width: auto;
    flex-direction: column;
    justify-content: center;
    gap: 83px 0;
    margin: 0;
  }
  @media screen and (max-width: 820px) {
    margin: 0 80px;
    gap: 6.25rem 0;
  }
  @media screen and (max-width: 500px) {
    margin: 0 17px;
    gap: 17vw 0;
  }
`;

export const BusinessSection = styled.div<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  opacity: 0;
  ${(props) =>
    props.$active
      ? "animation: popup_animation 0.5s ease-in-out forwards"
      : {}};

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
  & > div > p {
    width: fit-content;
    font-size: 1.25rem;
    line-height: 1.875rem;
    font-weight: 600;
    letter-spacing: -0.01rem;
    margin-bottom: 12px;
    color: white;
    padding-bottom: 2px;
    border-bottom: 2px solid #0099ff;

    @media screen and (max-width: 1536px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
    @media screen and (max-width: 1280px) {
      width: fit-content;
      font-size: 0.875rem;
      line-height: 1.3125rem;
      text-align: center;
      margin-bottom: 16px;
      text-align: center;
    }
    @media screen and (max-width: 500px) {
      font-size: 3.2vw;
      line-height: 4.7vw;
      margin-bottom: 5px;
      border-width: 1px;
    }
  }

  & h3 {
    font-size: 3.125rem;
    line-height: 5rem;
    font-weight: 700;
    letter-spacing: -0.1rem;
    color: white;
    /*  font-family: Montserrat; */

    @media screen and (max-width: 1536px) {
      font-size: 2.5rem;
      line-height: 4rem;
    }
    @media screen and (max-width: 1280px) {
      font-size: 2.125rem;
      line-height: 3.1875rem;
      text-align: center;
    }
    @media screen and (max-width: 820px) {
      font-size: 1.875rem;
      line-height: 2.8125rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 1.625rem;
      line-height: 2.4375rem;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 1536px) {
    width: 50%;
    gap: 50px 0;
  }

  @media screen and (max-width: 1280px) {
    padding-top: 5rem;
    width: 100%;
    align-items: center;
  }
  @media screen and (max-width: 820px) {
    padding-top: 0;
  }
`;

export const TitleCaption = styled.div`
  @media screen and (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 0 27px;

  & button {
    padding: 10px 24px 10px 24px;
    color: white;
    border: 1px solid white;
    display: flex;
    align-items: center;
    gap: 0 9px;
    font-size: 1rem;
    height: 3rem;
    font-weight: 600;
    font-family: pretendard;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
    span {
      font-size: 1rem;
      line-height: 25.6px;
    }
    @media screen and (max-width: 1536px) {
      padding: 10px 20px;
    }
  }

  @media screen and (max-width: 1536px) {
    gap: 0 16px;
  }
  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

export const CardForm = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 60px 0;
  height: 100%;
  justify-content: center;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: -53px;
    transform: translateY(-50%);
    width: 1px;
    height: 100%;
    background: rgba(255, 255, 255, 0.15);

    @media screen and (max-width: 1280px) {
      position: absolute;
      top: -19px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 1px;
    }
    @media screen and (max-width: 820px) {
      display: none;
    }
  }

  @media screen and (max-width: 1536px) {
    width: 50%;
  }
  @media screen and (max-width: 1280px) {
    flex-direction: row;
    gap: 0px;
    width: 100%;
    height: unset;
  }
  @media screen and (max-width: 820px) {
    flex-wrap: wrap;
    gap: 12.5vw 0;
  }
`;

export const BusinessCard = styled.div`
  position: relative;
  @media screen and (max-width: 1280px) {
    width: 25%;
  }
  @media screen and (max-width: 820px) {
    width: 50%;
  }

  & > div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px 0;

    @media screen and (max-width: 1536px) {
      gap: 8px 0;
    }
    @media screen and (max-width: 1280px) {
      align-items: center;
      gap: 30px 0;
    }
    @media screen and (max-width: 500px) {
      gap: 8px 0;
    }
  }

  & img {
    width: 180px;
    aspect-ratio: 1/1;
  }
`;

export const Achievement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px 0;

  &.card_container::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -56px;
    transform: translateY(-50%);
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 0 3px 1px rgba(255, 255, 255, 1),
      0 0 4px 5px rgba(255, 255, 255, 0.3),
      0 0 7px 11px rgba(255, 255, 255, 0.2);

    @media screen and (max-width: 1280px) {
      top: -22px;
      left: 50%;
      transform: translateX(-50%);
    }
    @media screen and (max-width: 500px) {
      top: -12px;
      width: 4px;
      height: 4px;
    }
  }

  & p {
    font-weight: 600;
    font-size: 1.375rem;
    line-height: 2.2rem;
    letter-spacing: -0.02rem;
    color: white;

    @media screen and (max-width: 1536px) {
      font-size: 1.125rem;
      line-height: 1.8rem;
    }
    @media screen and (max-width: 1280px) {
      font-size: 1rem;
      line-height: 1.6rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 1rem;
      line-height: 1.6rem;
    }
  }
  & > p {
    @media screen and (max-width: 1280px) {
      order: 1;
    }
  }
`;

export const Count = styled.p``;
export const AchieveDetails = styled.div`
  position: relative;
  display: flex;
  align-items: baseline;
  gap: 0 6px;

  @media screen and (max-width: 1280px) {
    order: 2;
  }

  & .selector::before {
    content: "+";
    position: absolute;
    top: -10px;
    right: -20px;
    font-size: 1.7rem;
    color: white;
    @media screen and (max-width: 1536px) {
      font-size: 1.5rem;
    }
    @media screen and (max-width: 1280px) {
      display: none;
    }
  }

  & > ${Count} {
    font-size: 4.5rem;
    font-weight: 600;
    line-height: 4.5rem;
    letter-spacing: -1px;
    font-family: Montserrat;
    color: white;

    @media screen and (max-width: 1536px) {
      font-size: 3.5rem;
      line-height: 3.5rem;
    }
    @media screen and (max-width: 1280px) {
      font-size: 3rem;
      line-height: 3rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 1.75rem;
      line-height: 1.75rem;
    }
  }

  .unit_text {
    font-size: 1.875rem;
    font-weight: 600;
    @media screen and (max-width: 1536px) {
      font-size: 1.25rem;
      line-height: 2rem;
    }
    @media screen and (max-width: 1280px) {
      font-size: 1.125rem;
      line-height: 1.8rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 0.875rem;
      line-height: 1.4rem;
    }
  }
`;

export const PlusIcon = styled(FaPlus)`
  font-size: 18px;

  @media screen and (max-width: 1536px) {
    font-size: 15px;
  }
`;
