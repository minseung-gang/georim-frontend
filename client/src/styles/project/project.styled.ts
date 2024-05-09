import styled from "styled-components";
import DevelopBackground from "../../asset/images/developBanner_01.png";
import SalesBackground from "../../asset/images/salesBanner_01.png";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

export const Wrapper = styled.div``;
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

export const Banner = styled.div`
  padding-top: 60vh;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }

  &.develop {
    background-image: url(${DevelopBackground});
    background-position: 100% 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  &.sales {
    background-image: url(${SalesBackground});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
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

  @media screen and (max-width: 1024px) {
    left: 30px;
  }
  @media screen and (max-width: 820px) {
    gap: 4px 0;
  }
  @media screen and (max-width: 500px) {
    p {
      line-height: 1.5rem;
      font-size: 1rem;
    }
  }

  & h3 {
    font-size: 4rem;
    line-height: 89.6px;

    @media screen and (max-width: 1024px) {
      font-size: calc(32px + 2vw);
      line-height: calc(50px + 2.2vw);
    }
    @media screen and (max-width: 500px) {
      font-size: calc(25px + 2vw);
      line-height: calc(37px + 2vw);
    }
  }

  & > div {
    overflow: hidden;
  }

  & .banner_subtitle {
    font-size: 1.25rem;
    line-height: 1.875rem;
    letter-spacing: -0.01rem;

    @media screen and (max-width: 1024px) {
      font-size: calc(10px + 0.8vw);
      line-height: calc(17px + 1vw);
    }
  }
`;
export const ScrollBar = styled.div`
  width: 2px;
  height: calc(60vh * 0.15);
  position: relative;
  background: rgb(201 201 201 / 20%);
  overflow: hidden;
  margin-top: 32px;

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

  @media screen and (max-width: 820px) {
    margin-top: 8px;
  }
`;
export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 0 88px;
  display: flex;
  flex-direction: column;
  gap: 60px 0;

  & .breadcrumb{
    @media screen and (max-width: 1260px) {
      width: calc(100% - 60px);
    }
 
    @media screen and (max-width: 500px){
      width: calc(100% - 40px);
    }
  }

  @media screen and (max-width: 1260px) {
    max-width: unset;
   
    margin: 0 auto;
  }
  @media screen and (max-width: 1024px){
    gap: 12px 0;
    padding: 20px 0 40px;
  }
  @media screen and (max-width: 820px){
    padding: 20px 0 32px;
  }
  @media screen and (max-width: 500px){
    padding: 16px 0 32px;
  }
}
`;
export const PlusIcon = styled(FaPlus)`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.textBlack};
`;
export const Navi = styled.div<{ right?: string }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.right ? "flex-end" : "flex-start")};
  gap: 0 38px;
  padding: 12px 14px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const NaviText = styled.span`
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 20px;
  line-height: 0;
  position: relative;
  color: ${({ theme }) => theme.colors.textBlack};

  &:nth-child(2) {
    width: 168px;
  }
  &:last-child {
    font-family: pretendard;
    width: 118px;
  }
  &:first-child::before {
    display: none;
  }
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-19px, -50%);
    width: 2px;
    height: 16px;
    background: ${({ theme }) => theme.suportColor.border};
  }
`;
export const SubDirectory = styled.p`
  color: ${({ theme }) => theme.colors.textBlack};
`;
export const SubDirectory1 = styled(SubDirectory)`
  width: 140px;
`;
export const SubDirectory2 = styled(SubDirectory)`
  width: 90px;
`;

export const BuildingsForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px 0;
  align-items: flex-end;
  & .card:hover {
    cursor: none;
    img {
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 1024px) {
    gap: 32px 0;
  }

  @media screen and (max-width: 820px) {
    gap: 24px 0;
  }
  @media screen and (max-width: 500px) {
    gap: 16px 0;
  }
`;
export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  @media screen and (max-width: 1260px) {
    width: calc(100% - 60px);
  }

  @media screen and (max-width: 500px) {
    width: calc(100% - 40px);
    flex-direction: column;
    gap: 24px 0;
    order: 1;
  }
`;

export const ProjectCount = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.gray7};
  font-weight: 500;

  @media screen and (max-width: 820px) {
    font-size: 0.875rem;
    line-height: 1.3125rem;
  }
  @media screen and (max-width: 500px) {
    order: 2;
    width: 100%;
  }
  & span {
    color: ${({ theme }) => theme.colors.blue4};
    font-weight: 600;
    margin-right: 2px;
  }
`;
export const ControlGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px 0;
  margin-top: 12px;

  @media screen and (max-width: 500px) {
    margin-top: 0;
    gap: 24px 0;
  }
`;

export const FilterBtnForm = styled.div`
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 500px) {
    order: 2;
    overflow-x: scroll;
    padding: 0 20px;
  }
`;

export const FilterBtnBox = styled.div`
  display: flex;
  gap: 0 12px;

  @media screen and (max-width: 1260px) {
    width: calc(100% - 60px);
    margin: 0 auto;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const FilteredBtn = styled.button<{ $active: boolean }>`
  min-width: fit-content;
  padding: 9px 20px;
  border-radius: 4px;
  height: 36px;
  background: ${({ theme, $active }) =>
    $active ? theme.colors.blue2 : "white"};
  color: ${({ theme, $active }) =>
    $active ? "white" : theme.colors.greyScale2};
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? "transparent" : theme.suportColor.border};
  font-weight: 400;
  font-family: pretendard;
  letter-spacing: 0.5px;
  font-size: 1rem;
  line-height: 17.4px;
  position: relative;
  overflow: hidden;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    padding: 8px 14px;
    font-size: 0.875rem;
  }
  @media screen and (max-width: 820px) {
    padding: 8px 12px;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.8125rem;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    background: ${({ theme }) => theme.colors.blue2};
    width: 100%;
    height: 100%;

    z-index: -1;
  }
  &:hover {
    &::before {
      transition: all 0.3s ease-in-out;
      left: 0;
    }
    color: white;
    transition: all 0.2s ease-in-out;
  }
`;

export const SearchBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0 20px;
  padding: 16px 12px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray3};
  width: 300px;

  & input {
    width: 100%;
    border: none;
    font-family: pretendard;
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: -0.01rem;

    &::placeholder {
      font-weight: 400;

      @media screen and (max-width: 1260px) {
        color: ${({ theme }) => theme.colors.gray5};
      }
      @media screen and (max-width: 1024px) {
        font-size: 0.8125rem;
        line-height: 1.21875rem;
      }
    }
    &:focus {
      outline: none;
    }

    @media screen and (max-width: 1024px) {
      font-size: 0.8125rem;
      line-height: 1.21875rem;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 246px;
    padding: 14px 8px;
    border-width: 1px;
  }
`;

export const SearchIcon = styled(IoIosSearch)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.gray5};
  min-width: fit-content;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const GridContainer = styled.div`
  gap: 64px 30px;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto;

  @media screen and (max-width: 1260px) {
    width: calc(100% - 60px);
    gap: 56px 12px;
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px 12px;
  }
  @media screen and (max-width: 500px) {
    width: calc(100% - 40px);
    grid-template-columns: 1fr;
    order: 2;
  }
  & .skeleton {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px 0;
    cursor: pointer;
    width: 100%;
  }

  & .skeleton__text {
    display: flex;
    flex-direction: column;
    gap: 4px 0;
  }
  & .skeleton__image {
    width: 100%;
    aspect-ratio: 1.5/1;
    background: #eef0f1;
  }
  & .skeleton__title {
    width: 60%;
    height: 22px;
    background: #eef0f1;

    @media screen (max-width: 500px) {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }
  & .skeleton__category {
    width: 40%;
    height: 20%;
    height: 22px;
    background: #eef0f1;
  }
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 25vh;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 500px) {
    height: 30vh;
  }
  & img {
    width: 100%;
    height: 100%;
    transition: transform 0.4s ease-in-out;
    object-fit: cover;
    object-position: center;
  }
  &::before {
    content: "";
    width: 100%;
    height: 60%;
    position: absolute;
    bottom: -50%;
    left: 0;
    background: linear-gradient(
      180deg,
      rgba(22, 49, 114, 0) 33.5%,
      rgba(22, 49, 114, 0.6) 100%
    );
    transition: bottom 0.2s ease-in-out;
  }
`;

export const BuildingsName = styled.p`
  font-size: 22px;
  font-weight: 600;F
  line-height: 30.8px;
  letter-spacing:-2px;
  color: ${({ theme }) => theme.colors.titleBlack};

  @media screen and (max-width: 500px){
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

export const BuildingsCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  border: 1px solid #e8eef4;
  cursor: none;
`;

export const ObserverTarget = styled.div`
  display: block;
  position: fixed;
  bottom: 0;
  max-width: 1200px;
  width: 100%;
  height: 10vh;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  padding: 16px 16px 32px;

  @media screen and (max-width: 820px) {
    padding: 16px 12px;
    gap: 16px 0;
  }

  @media screen and (max-width: 500px) {
    gap: 16px 0;
  }
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;
export const ContentItem = styled.div`
  display: flex;
  align-items: center;

  & > p {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;

    @media screen and (max-width: 500px) {
      font-size: 0.875rem;
      line-height: 1.3125rem;
    }
  }
`;
export const TitleInfo = styled.p`
  max-width: 60px;
  width: 100%;

  color: ${({ theme }) => theme.colors.greyScale2};
`;

export const ContentDetails = styled.p`
  color: ${({ theme }) => theme.colors.textBlack};
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.02rem;
`;

export const EmptyMessage = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.greyScale3};

  @media screen and (max-width: 1024px) {
    font-size: 0.8125rem;
  }
`;
