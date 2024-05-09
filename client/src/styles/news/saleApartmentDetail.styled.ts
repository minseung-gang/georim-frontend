import styled from "styled-components";
import { FaPhone } from "react-icons/fa6";
import { BsBuildings } from "react-icons/bs";
import { BsPinMap } from "react-icons/bs";
import { BsCalendarCheck } from "react-icons/bs";
import { BsDoorOpen } from "react-icons/bs";
import { BsFiletypePdf } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

export const Wrapper = styled.div`
  width: 100%;
  margin: 91px auto 0;
  max-width: 1400px;

  @media screen and (max-width: 1500px) {
    margin-top: 80px;
    width: calc(100% - 60px);
  }
  @media screen and (max-width: 500px) {
    margin-top: 57px;
    width: calc(100% - 40px);
  }
`;

export const Inner = styled.div`
  padding: 3.5rem 0 6.375rem;
  display: flex;
  flex-direction: column;
  gap: 72px 0;

  @media screen and (max-width: 1024px) {
    padding: 1.5rem 0 2.5rem;
    gap: 3.5rem 0;
  }
  @media screen and (max-width: 820px) {
    gap: 4rem 0;
  }
  @media screen and (max-width: 600px) {
    gap: 3rem 0;
    padding: 1rem 0 2rem;
  }
`;
export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px 0;
  align-items: center;

  @media screen and (max-width: 600px) {
    & h3 {
      font-size: calc(16px + 1.5vw);
      line-height: calc(27px + 1.5vw);
    }
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  & img {
    width: 100%;
    border-radius: 4px;
    object-fit: contain;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  &.product-section {
    gap: 56px 0;

    @media screen and (max-width: 1024px) {
      gap: 32px 0;
    }
    @media screen and (max-width: 820px) {
      gap: 56px 0;
    }
    @media screen and (max-width: 600px) {
      gap: 32px 0;
    }
  }
  &.product-info {
    gap: 56px 0;

    @media screen and (max-width: 1024px) {
      gap: 32px 0;
    }
    @media screen and (max-width: 600px) {
      gap: 28px 0;
    }
  }
  &.pyeng-info {
    gap: 40px 0;

    @media screen and (max-width: 1024px) {
      gap: 32px 0;
    }
    @media screen and (max-width: 600px) {
      gap: 24px 0;
    }
  }
`;

export const MainTitle = styled.div`
  display: flex;
  overflow: hidden;

  & h3 {
    font-size: 3.125rem;
  }
`;

export const Message = styled.p`
  font-family: Montserrat;
  font-size: 0.75rem;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const AptInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  gap: 100px 0;
  margin-top: 56px;

  @media screen and (max-width: 1024px) {
    margin-top: 32px;
    gap: 88px 0;
  }
  @media screen and (max-width: 820px) {
    gap: 72px 0;
  }
  @media screen and (max-width: 600px) {
    margin-top: 24px;
    gap: 40px 0;
  }
`;

export const BasicInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoTitle = styled.p`
  font-size: calc(21px + 1vw);
  line-height: calc(41px + 1vw);
  font-weight: 600;
  margin-right: 16px;

  @media screen and (max-width: 1024px) {
    font-size: calc(16px + 1.2vw);
    line-height: calc(30px + 1.2vw);
  }
  @media screen and (max-width: 820px) {
    font-size: calc(11px + 1.1vw);
    line-height: calc(21px + 1.1vw);
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const PromotionBtn = styled.div`
  width: 68px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #a22424;
  color: white;
  line-height: 0;
  font-size: 0.875rem;
  font-family: Pretendard;
  font-weight: 300;

  @media screen and (max-width: 820px) {
    width: 60px;
    height: 29px;
  }

  @media screen and (max-width: 600px) {
    width: 58px;
    height: 28px;
    font-size: 0.8125rem;
  }
`;
export const PhoneIcon = styled(FaPhone)`
  width: 22px;
  height: 22px;

  @media screen and (max-width: 600px) {
    width: 20px;
    height: 20px;
  }
`;
export const WebPhone = styled.p`
  font-size: calc(21px + 1vw);
  line-height: calc(41px + 1vw);
  font-weight: 600;
  margin-left: 12px;
  letter-spacing: -0.8px;

  @media screen and (max-width: 1024px) {
    font-size: calc(18px + 1vw);
    line-height: calc(32px + 1vw);
  }
  @media screen and (max-width: 820px) {
    font-size: calc(11px + 1.1vw);
    line-height: calc(21px + 1.1vw);
  }
`;
export const MobilePhone = styled.a`
  font-weight: 600;
  margin-left: 12px;
  display: flex;
  align-items: center;
  gap: 0 12px;

  @media screen and (max-width: 600px) {
    font-size: calc(12px + 1.1vw);
    line-height: 0;
  }
`;
export const InfoCard = styled.div`
  width: 25%;
  border-radius: 8px;
  background: #f4f6f8;
  text-align: center;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 4px 0;

  @media screen and (max-width: 820px) {
    gap: 4px 0;
    padding: 30px 10px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    flex-direction: row;
    gap: 0 24px;
    align-items: center;
    padding: 24px 16px;
    height: 70px;

    & > div {
      display: flex;
      align-items: center;
      gap: 0 8px;
    }
  }
  & svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.greyScale1};

    @media screen and (max-width: 1024px) {
      width: 16px;
      height: 16px;
    }
    @media screen and (max-width: 820px) {
      width: 14px;
      height: 14px;
    }
  }
`;

export const InfoContent = styled.div`
  display: flex;
  gap: 0 20px;

  @media screen and (max-width: 1024px) {
    gap: 0 12px;
  }
  @media screen and (max-width: 820px) {
    gap: 0 8px;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 8px 0;
  }
`;
export const CardTitle = styled.p`
  font-size: calc(12px + 0.3vw);
  line-height: calc(20px + 0.3vw);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.greyScale1};
  margin-top: 4px;

  @media screen and (max-width: 1024px) {
    font-size: calc(13px + 0.3vw);
    line-height: calc(21px + 0.3vw);
  }
  @media screen and (max-width: 820px) {
    font-size: calc(12px + 0.25vw);
    line-height: calc(19px + 0.25vw);
  }
  @media screen and (max-width: 600px) {
    margin-top: unset;
    font-size: 0.875rem;
    line-height: unset;
  }
`;
export const CategoryIcon = styled(BsBuildings)``;

export const LocationIcon = styled(BsPinMap)``;

export const CalendarIcon = styled(BsCalendarCheck)``;

export const DoorIcon = styled(BsDoorOpen)``;

export const FileIcon = styled(BsFiletypePdf)``;

export const CardContent = styled.p`
  font-size: calc(12px + 0.3vw);
  line-height: calc(20px + 0.3vw);
  font-weight: 500;
  word-break: keep-all;

  @media screen and (max-width: 1024px) {
    font-size: calc(13px + 0.3vw);
    line-height: calc(21px + 0.3vw);
  }
  @media screen and (max-width: 820px) {
    font-size: calc(12px + 0.25vw);
    line-height: calc(19px + 0.25vw);
  }
  @media screen and (max-width: 600px) {
    font-size: 0.875rem;
    line-height: unset;
  }
`;

export const BtnIcon = styled.div`
  text-align: center;

  & button {
    border-radius: 8px;
    padding: 10px 16px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.suportColor.border};
    color: ${({ theme }) => theme.colors.bodyBlack};
    font-size: 1.125rem;
    font-weight: 500;
    font-family: pretendard;
    gap: 0 10px;

    @media screen and (max-width: 1024px) {
      font-size: 1rem;
      line-height: 1.5rem;
      border: 1px solid ${({ theme }) => theme.colors.gray4};
    }
    @media screen and (max-width: 820px) {
      padding: 8px 12px;
      font-size: 0.875rem;
      line-height: 1.3125rem;
    }
    & svg {
      width: 24px;
      height: 24px;
      color: ${({ theme }) => theme.colors.textBlack};

      @media screen and (max-width: 1024px) {
        width: 20px;
        height: 20px;
      }

      @media screen and (max-width: 820px) {
        width: 16px;
        height: 16px;
      }
    }
  }

  &:hover {
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.blue4};

    color: white;
    & svg {
      color: white;
    }

    & button {
      color: white;
      border-color: transparent;
    }
  }
`;

export const HomeIcons = styled(TbWorld)``;

export const Btn = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 20px;
  margin-top: 40px;

  @media screen and (max-width: 1024px) {
    margin-top: 24px;
  }
`;
export const SectionTitle = styled.div`
  display: flex;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.suportColor.borderline};
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 20px 0;
  }

  & h4 {
    font-size: calc(12px + 0.85vw);
    line-height: calc(26px + 0.85vw);
    font-weight: 600;

    @media screen and (max-width: 1024px) {
      font-size: calc(12px + 1.2vw);
      line-height: calc(24px + 1.2vw);
    }

    @media screen and (max-width: 820px) {
      font-size: calc(11px + 1.2vw);
      line-height: calc(21px + 1.2vw);
    }

    @media screen and (max-width: 600px) {
      font-size: 1.25rem;
      height: 1.875rem;
    }
  }
`;

export const TriggerText = styled.p`
  width: fit-content;
  font-size: calc(11px + 0.6vw);
  line-height: calc(22px + 0.6vw);
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textBlack};

  @media screen and (max-width: 1024px) {
    padding: 4.5px 10px;
    font-size: calc(12px + 0.6vw);
  }
  @media screen and (max-width: 820px) {
    font-size: calc(12px + 0.5vw);
    line-height: calc(20px + 0.5vw);
  }
`;
export const PyengContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 30px;

  @media screen and (max-width: 820px) {
    gap: 0 20px;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const PyeongImage = styled.div`
  & img {
    width: 100%;
    object-fit: contain;
    aspect-ratio: 1.2/1;
  }
`;

export const PyengInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 24px 0;

  @media screen and (max-width: 1024px) {
    justify-content: flex-start;
    padding-top: 2rem;
  }
  @media screen and (max-width: 820px) {
    gap: 12px 0;
  }
  @media screen and (max-width: 600px) {
    gap: 20px 0;
    padding-top: 24px;
  }
`;
export const PyengInner = styled.div`
  margin-top: 20px;

  @media screen and (max-width: 600px) {
    margin-top: 0;
  }
`;
export const PyengTitle = styled.p`
  font-size: calc(13px + 0.6vw);
  line-height: calc(25px + 0.6vw);
  color: ${({ theme }) => theme.colors.greyScale2};
  font-weight: 600;

  @media screen and (max-width: 820px) {
    font-size: 2vw;
    line-height: 2.9vw;
  }
  @media screen and (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;
export const PyengValue = styled.span`
  font-size: calc(17px + 0.6vw);
  line-height: calc(31px + 0.6vw);
  font-weight: 500;
  display: flex;
  gap: 0 8px;
  margin-top: 4px;

  @media screen and (max-width: 1024px) {
    font-size: calc(18px + 0.6vw);
    line-height: calc(30px + 0.6vw);
    gap: 0 6px;
  }
  @media screen and (max-width: 820px) {
    font-size: 2.6vw;
    line-height: 4vw;
    gap: 0 4px;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.25rem;
  }
`;
export const Price = styled.span`
  font-weight: 700;
`;
export const Description = styled.p`
  font-size: calc(10px + 0.32vw);
  line-height: calc(21px + 0.32vw);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.greyScale2};
  position: absolute;
  bottom: 0;
  left: 0;

  @media screen and (max-width: 1024px) {
    font-size: 0.8125rem;
    line-height: 1.21875rem;
  }
  @media screen and (max-width: 820px) {
    font-size: 0.75rem;
    line-height: 1.125rem;
  }
  @media screen and (max-width: 600px) {
    position: relative;
    color: ${({ theme }) => theme.colors.gray5};
  }
`;

export const Trigger = styled.div<{ $active: boolean }>`
  background: ${({ theme, $active }) =>
    $active ? theme.colors.blue4 : "white"};
  color: ${({ theme, $active }) =>
    $active ? "white" : theme.colors.textBlack};

  width: fit-content;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  gap: 0 16px;

  @media screen and (max-width: 600px) {
    gap: 0 12px;
  }
`;

export const Map = styled.div`
  margin-top: 40px;
  @media screen and (max-width: 1024px) {
    margin-top: 32px;
  }

  @media screen and (max-width: 820px) {
    & #map {
      height: 23rem !important;
    }
  }

  @media screen and (max-width: 600px) {
    margin-top: 24px;
  }
`;
