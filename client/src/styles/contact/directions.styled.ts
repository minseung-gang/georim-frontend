import styled from "styled-components";
import { TbBusStop } from "react-icons/tb";
import { TbCar } from "react-icons/tb";
import { LuClock2 } from "react-icons/lu";
import { TbTrain } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";
import { TbMapPinFilled } from "react-icons/tb";
import { HiOutlinePrinter } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { TbPhone } from "react-icons/tb";
import { TbArrowBearRight } from "react-icons/tb";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { LuDoorOpen } from "react-icons/lu";

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px 0;
  padding: 2.5rem 0 6.875rem;

  @media screen and (max-width: 1024px) {
    padding: 40px 0;
  }

  @media screen and (max-width: 600px) {
    padding: 16px 0 32px;
    gap: 40px 0;
  }
`;
export const MainView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px 0;

  @media screen and (max-width: 1024px) {
    gap: 32px 0;
  }
  @media screen and (max-width: 600px) {
    gap: 20px 0;
  }
  #map {
    width: 100%;
    height: calc(21vw + 200px);
    border-radius: 5px;
  }
`;
export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media screen and (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 16px 0;
  }

  & > div {
    overflow: hidden;
  }
`;

export const SectionTitle = styled.div`
  overflow: hidden;
  & h3 {
    font-size: calc(20px + 1.9vw);
    line-height: calc(48px + 1.9vw);
    font-weight: 600;
    letter-spacing: -2px;

    @media screen and (max-width: 1024px) {
      font-size: calc(20px + 2vw);
      line-height: calc(40px + 2vw);
    }

    @media screen and (max-width: 600px) {
      font-size: calc(22px + 1.6vw);
      line-height: calc(36px + 1.6vw);
    }
  }
`;
export const ContactInfo = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0 12px;

  @media screen and (max-width: 1024px) {
    align-items: center;
  }

  & .telephone {
    font-size: calc(23px + 0.9vw);
    line-height: calc(39px + 0.9vw);
    font-weight: 600;

    @media screen and (max-width: 1024px) {
      font-size: calc(21px + 0.9vw);
      line-height: calc(35px + 0.9vw);
    }
    @media screen and (max-width: 820px) {
      font-size: calc(12px + 2.1vw);
      line-height: calc(22px + 2.1vw);
    }
  }
`;

export const PhoneIcon = styled(FaPhone)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.greyScale3};

  @media screen and (max-width: 600px) {
    width: 22px;
    height: 22px;
  }
`;

export const CompanyAddress = styled.div`
  display: flex;
  align-items: center;
  gap: 0 14px;
  margin: 32px 0;

  @media screen and (max-width: 1024px) {
    margin: 24px 0;
  }
  @media screen and (max-width: 600px) {
    margin: 20px 0;
  }
`;

export const LocationIconBox = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.suportColor.background};
  border-radius: 50%;

  @media screen and (max-width: 1024px) {
    width: 24px;
    height: 24px;
  }
`;

export const LocationIcon = styled(TbMapPinFilled)`
  width: 22px;
  height: 20px;
  color: ${({ theme }) => theme.colors.blue4};

  @media screen and (max-width: 1024px) {
    width: 14px;
    height: 16px;
  }
`;

export const Address = styled.p`
  font-size: 1.5rem;
  line-height: 36px;
  font-weight: 600;

  @media screen and (max-width: 1024px) {
    font-size: calc(8px + 1.2vw);
    line-height: calc(18px + 1.2vw);
  }

  @media screen and (max-width: 820px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.875rem;
    line-height: 1.3125rem;
  }
`;

export const CompanyInfo = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 20px;

  @media screen and (max-width: 1024px) {
    gap: 0 12px;
  }
  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 8px 0;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 25px 0;
  background: #f4f6f8;
  border-radius: 8px;

  @media screen and (max-width: 1024px) {
    padding: 24px 0;
  }

  @media screen and (max-width: 820px) {
    padding: 16px 0;
  }
  @media screen and (max-width: 600px) {
    flex-direction: row;
    padding: 24px 16px;
    gap: 0 24px;
  }
  & svg {
    @media screen and (max-width: 820px) {
      width: 16px;
      height: 16px;
    }
    @media screen and (max-width: 600px) {
      width: 14px;
      height: 14px;
    }
  }
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px 0;

  @media screen and (max-width: 600px) {
    flex-direction: row;
    gap: 0 8px;
  }

  & svg {
    color: ${({ theme }) => theme.colors.greyScale1};
  }
`;

export const PhoneInfoIcon = styled(TbPhone)`
  width: 24px;
  height: 24px;
`;

export const FaxInfoIcon = styled(HiOutlinePrinter)`
  width: 24px;
  height: 24px;
`;

export const EmailInfoIcon = styled(AiOutlineMail)`
  width: 24px;
  height: 24px;
`;

export const CalendarIcon = styled(FaRegCalendarCheck)``;

export const DoorIcon = styled(LuDoorOpen)``;
export const Category = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.greyScale1};

  @media screen and (max-width: 820px) {
    font-size: 0.875rem;
    line-height: 1.3125rem;
  }

  @media screen and (max-width: 600px) {
    line-height: 1.3125rem;
  }
`;
export const InfoText = styled.p`
  font-size: 1.375rem;
  font-weight: 600;
  line-height: 33px;

  @media screen and (max-width: 1024px) {
    font-size: 1.125rem;
    line-height: 1.6875rem;
  }

  @media screen and (max-width: 820px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.875rem;
    line-height: 1.3125rem;
  }
`;

export const VisitGuide = styled.div`
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  gap: 2.5rem 0;

  @media screen and (max-width: 1024px) {
    margin-top: 48px;
    gap: 32px 0;
  }

  @media screen and (max-width: 600px) {
    margin-top: 40px;
    gap: 20px 0;
  }

  & h3 {
    font-size: calc(13px + 1.41vw);
    line-height: calc(33px + 1.41vw);
    font-weight: 600;
    letter-spacing: -0.5px;

    @media screen and (max-width: 1024px) {
      font-size: calc(12px + 1.8vw);
      line-height: calc(24px + 1.8vw);
    }

    @media screen and (max-width: 820px) {
      font-size: calc(9px + 1.6vw);
      line-height: calc(20px + 1.6vw);
    }

    @media screen and (max-width: 600px) {
      font-size: 1.125rem;
      line-height: 1.6875rem;
    }
  }
`;

export const VisitInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem 0;

  @media screen and (max-width: 820px) {
    gap: 48px 0;
  }
`;
export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px 0;

  @media screen and (max-width: 1024px) {
    gap: 12px 0;
  }

  @media screen and (max-width: 820px) {
    gap: 8px 0;
  }
`;
export const InfoLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0 24px;

  @media screen and (max-width: 1024px) {
    gap: 0 16px;
  }
  @media screen and (max-width: 600px) {
    gap: 0 12px;
  }

  & svg {
    @media screen and (max-width: 1024px) {
      widht: 32px;
      height: 32px;
    }

    @media screen and (max-width: 820px) {
      width: 24px;
      height: 24px;
    }
  }
`;

export const CustomOverlay = styled.div`
  color: rgb(0, 0, 0);
  background: white;
  margin-bottom: 170px;
  margin-right: 0px;
  width: fit-content;
  padding: 16px 32px;
  position: relative;
  border-radius: 8px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    bottom: -15px;
    border-top: 15px solid white;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: 768px) {
      bottom: -15px;
      margin-bottom: 0px;
    }
  }

  & h4 {
    font-size: 1.375rem;
    font-weight: 600;
    line-height: 33px;
  }
  & p {
    font-size: 0.875rem;
    line-height: 21px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textBlack};
  }
  @media (max-width: 768px) {
    padding: 8px 14px;
    h4 {
      font-size: 1rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
`;
export const OverlayInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;
export const ClockIcon = styled(LuClock2)`
  width: 34px;
  height: 34px;
  stroke-width: 1.8px;
  color: ${({ theme }) => theme.colors.greyScale1};
`;

export const TrainIcon = styled(TbTrain)`
  width: 40px;
  height: 40px;
  stroke-width: 1.5px;
  color: ${({ theme }) => theme.colors.greyScale1};
`;
export const CarIcon = styled(TbCar)`
  width: 40px;
  height: 40px;
  stroke-width: 1.5px;
  color: ${({ theme }) => theme.colors.greyScale1};
`;
export const BusIcon = styled(TbBusStop)`
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.greyScale1};
  stroke-width: 1.5px;
`;
export const InfoTitle = styled.p`
  font-size: 1.75rem;
  line-height: 42px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.bodyBlack};

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
    line-height: 2.25rem;
  }
  @media screen and (max-width: 820px) {
    font-size: 1.2rem;
    line-height: 1.875rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;
export const InfoContent = styled.p`
  font-size: 1.375rem;
  font-weight: 500;
  line-height: 33px;
  margin-left: 58px;

  @media screen and (max-width: 1024px) {
    margin-left: 40px;
    font-size: 1.25rem;
    line-height: 1.875rem;
  }

  @media screen and (max-width: 820px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.875rem;
    line-height: 1.3125rem;
    margin-left: 36px;
  }
`;
export const TransportInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px 0;
  margin-left: 64px;
  margin-top: 18px;

  @media screen and (max-width: 1024px) {
    margin-top: 12px;
    margin-left: 56px;
  }
  @media screen and (max-width: 820px) {
    margin-top: 8px;
    margin-left: 40px;
  }
  @media screen and (max-width: 600px) {
    margin-left: 36px;
  }
`;
export const TransportSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
`;
export const TransportRoutes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;
export const TransportStopInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0 18px;
  & h4 {
    font-size: 1.375rem;
    font-weight: 600;
    line-height: 33px;

    @media screen and (max-width: 1024px) {
      font-size: 1.25rem;
      line-height: 2.25rem;
    }
    @media screen and (max-width: 820px) {
      font-size: 1.125rem;
      line-height: 1.6875rem;
    }
    @media screen and (max-width: 600px) {
      font-size: 0.875rem;
      line-height: 1.3125rem;
    }
  }
  & p {
    color: ${({ theme }) => theme.colors.greyScale1};
    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;

    @media screen and (max-width: 820px) {
      font-size: 0.875rem;
      line-height: 1.3125rem;
    }
    @media screen and (max-width: 820px) {
      font-size: 0.75rem;
      line-height: 0.875rem;
    }
  }
`;
export const TransportRoute = styled.div`
  display: flex;
  align-items: center;
  gap: 0 12px;

  @media screen and (max-width: 600px) {
    gap: 0 10px;
  }
`;

const RouteDescription = styled.p`
  border-radius: 16px;
  min-width: 49px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.875rem;
  font-weight: 300;
  letter-spacing: 0.3px;
  padding: 0 12px;
  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    min-width: 47px;
    height: 24px;
    font-size: 0.8125rem;
    line-height: 1.21875rem;
  }
`;
export const RouteDetail = styled.p`
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 30px;

  @media screen and (max-width: 1024px) {
    font-size: 1.125rem;
    line-height: 1.6875rem;
  }
  @media screen and (max-width: 820px) {
    font-size: 0.875rem;
    line-height: 1.3125rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.8125rem;
    line-height: 1.21875rem;
  }
`;
export const BlueBtn = styled(RouteDescription)`
  background: #386de8;
`;
export const GreenBtn = styled(RouteDescription)`
  background: #3cc344;
`;
export const RedBtn = styled(RouteDescription)`
  background: #fb5852;
`;
export const GreenBtn2 = styled(RouteDescription)`
  background: #90c73d;
`;
export const GreenBtn3 = styled(RouteDescription)`
  background: #8fc53c;
`;

export const YellowBtn = styled(RouteDescription)`
  background: #f4b542;
`;

export const OverLayBtn = styled.a`
  padding: 5px 8px;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.blue4};
  color: white;
  display: flex;
  align-items: center;
  gap: 0 2px;
  font-size: 0.8125rem;
  line-height: 19.5px;
  font-weight: 300;
  font-family: pretendard;
  @media (max-width: 768px) {
    font-size: 0.6rem;
    padding: 1px 5px;
  }
`;

export const ArrowIcon = styled(TbArrowBearRight)`
  width: 14px;
  height: 14px;
`;
export const BtnContainer = styled.div`
  display: flex;
  gap: 0 8px;
`;
