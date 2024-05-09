import styled from "styled-components";
import WhiteLogo from "../asset/images/logo_1.png";
import BlackLogo from "../asset/images/logo_2.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const Logo = styled.div`
  width: 140px;
  height: 24px;
  background: url(${BlackLogo});
  background-size: contain;

  @media screen and (max-width: 500px) {
    width: 66px;
    height: 12px;
  }
`;

export const Inner = styled.div<{ $active: boolean; $visible: boolean }>`
  width: 100%;
  transition: all ${(props) => (props.$visible ? "0.2s" : "0")};
  border-bottom: 1px solid
    ${({ theme, $active, $visible }) =>
      $active
        ? $visible
          ? theme.suportColor.borderline
          : "transparent"
        : "transparent"};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: 6rem;
  font-size: 2rem;
  font-weight: 600;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
  height: 90px;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 1550px) {
    max-width: unset;
    margin: 0 60px;
  }
  @media screen and (max-width: 1440px) {
    height: 80px;
  }
  @media screen and (max-width: 1280px) {
    margin: 0 30px;
  }
  @media screen and (max-width: 1280px) {
    margin: 0 30px;
  }
  @media screen and (max-width: 500px) {
    height: 56px;
    margin: 0 16px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 0 56px;
  height: 100%;
  align-items: center;

  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

export const GNB = styled.ul`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;

  &:hover {
    & > li:hover {
      & .gnb_text > a {
        color: black;
        font-weight: 600;
      }
    }
    & .gnb_text > a {
      color: ${({ theme }) => theme.colors.greyScale2};
      font-weight: 500;
    }
  }
`;
export const GnbBar = styled.span`
  width: 160px;
  height: 3px;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.blue4};
  position: absolute;
  left: 0;
  bottom: -1.5px;
  transition: all 0.3s ease-in-out;
`;
export const Menu = styled.li`
  min-width: fit-content;

  width: 160px;
  position: relative;
  & > div > a {
    font-size: 18px;
    font-family: "Montserrat";
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const LNB = styled.ul<{ $active: boolean; $visible: boolean }>`
  position: absolute;
  top: 90px;
  width: 100%;
  height: 250px;
  padding: 25px 0;
  pointer-events: ${(props) => (props.$active ? "auto" : "none")};
  display: ${(props) => (props.$visible ? "block" : "none")};
`;
export const LnbList = styled.ul`
  overflow: hidden;
`;

export const LnbItem = styled.li`
  height: 50px;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-family: pretendard;
    color: ${({ theme }) => theme.colors.titleBlack};
    font-weight: 500;
    white-space: nowrap;
    &:hover {
      color: ${({ theme }) => theme.colors.blue4};
      font-weight: 600;
    }
  }
`;
export const DropDown = styled.div<{ $hover: boolean; $visible: boolean }>`
  width: 100%;
  height: 340px;
  margin: 0 auto;
  position: absolute;
  top: ${(props) => (props.$hover ? "0px" : "-391px")};
  background: white;
  display: ${(props) => (props.$visible ? "block" : "none")};
  transition: top 0.2s ease-in-out;
  z-index: -1;
`;

export const Hamburger = styled(RxHamburgerMenu)`
  font-size: 28px;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 1280px) {
    display: block;
  }

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;
export const Header = styled.header<{
  $active: boolean;
  $default: boolean;
  $visible?: boolean;
  $blur?: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  background: ${(props) =>
    props.$default ? "rgba(0,0,0,0.3)" : "transparent"};
  ${(props) =>
    !props.$visible && props.$default === false
      ? "background: white"
      : "background: transparent"};
  transition: all 0.5s ease-in-out;
  transform: ${(props) =>
    props.$visible ? "translate3d(0, 0, 0)" : "translate3d(0, -8rem, 0)"};
  box-shadow: ${(props) =>
    props.$default ? "none" : "0 1px 2px -1px rgba(0, 0, 0, 0.2)"};
  backdrop-filter: ${(props) => (props.$blur ? "blur(2px)" : {})};
  border-bottom: ${(props) =>
    props.$blur ? "1px solid rgba(255,255,255,0.15)" : "none"};
  & ${Logo} {
    transition: background 0.3s ease;
    background: url(${(props) =>
        props.$default ? (props.$active ? BlackLogo : WhiteLogo) : BlackLogo})
      no-repeat;

    background-size: contain;
  }

  & .gnb_text > a {
    color: ${({ theme, $default }) =>
      $default ? "white" : theme.colors.titleBlack};
  }

  & ${Hamburger} {
    transition: color 0.3s ease;
    color: ${({ theme, $default }) =>
      $default ? "white" : theme.colors.titleBlack};
  }

  & ${LNB} {
    & a {
      opacity: ${(props) => (props.$active ? 1 : 0)};
      transition: opacity 0.2s;
    }
  }
  & ${GnbBar} {
    display: ${(props) => (props.$active ? "block" : "none")};
  }
`;

export const LocalContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const HamburgerModal = styled.div<{ $isOpened: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;

  z-index: 2;
  pointer-events: ${(props) => (props.$isOpened ? "auto" : "none")};

  & .inner {
    right: ${(props) => (props.$isOpened ? "0" : "-100%")};
  }
  & .curtain {
    background: ${(props) =>
      props.$isOpened ? "rgba(0, 0, 0, 0.6)" : "transparent"};
  }
`;

export const Curtain = styled.div`
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;

  z-index: 2;
`;

export const ModalInner = styled.div`
  width: 60%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  background: white;
  box-sizing: border-box;
  transition: all 0.6s ease-in-out;

  @media screen and (max-width: 1023px) {
    width: 80%;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 40px;

  & .content-inner {
   
    display: flex;
    flex-direction: column;
    gap: 24px 0;
    height: 100%;
    overflow-y: scroll;
}
  }
`;

export const ModalHeader = styled.div<{ $isMobile: boolean }>`
  display: flex;
  justify-content: ${(props) =>
    props.$isMobile ? "space-between" : "flex-end"};
  padding: 16px 20px;
  align-items: center;
`;

export const ModalLogo = styled.img`
  width: 82px;
  height: 14px;
  object-fit: contain;
`;

export const MNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px 0;
  overflow-y: scroll;

  @media screen and (max-width: 820px) {
  }
  @media screen and (max-width: 500px) {
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MGnb = styled.div`
  & .trigger {
    padding: 12px 20px;
  }
  & p {
    font-family: Montserrat;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.02rem;

    @media screen and (max-width: 1024px) {
      font-size: 1.125rem;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.blue2};
    }
  }
`;

export const MLnb = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  padding: 16px 20px;
  background: #f5f5f5;
  border: 1px solid #e7e7e7;

  & > li {
    padding: 4px 0;

    & a {
      font-size: 1.125rem;
      line-height: 1.6875rem;
      font-weight: 500;

      @media screen and (max-width: 500px) {
        font-size: 1rem;
      }
    }
  }
`;
export const CloseIcon = styled(IoCloseOutline)`
  font-size: 28px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

export const ArrowDown = styled(IoIosArrowDown)`
  color: ${({ theme }) => theme.colors.gray5};
  font-size: 24px;
`;
export const ArrowUp = styled(IoIosArrowUp)`
  color: ${({ theme }) => theme.colors.gray5};
  font-size: 24px;
`;
export const ArrowRight = styled(IoIosArrowForward)`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.gray3};
`;
export const BannerImg = styled.img``;
export const MBanner = styled.div`
  margin: 40px 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;

  & img {
    width: 100%;
    border-radius: 4px;
  }
`;

export const BannerContent = styled.div`
  color: white;
  & .content_title {
    display: flex;
    align-items: center;
    gap: 0 12px;
  }

  & .title {
    font-size: 22px;
    line-height: 33px;
    font-weight: 700;
  }

  & .number {
    color: #163d88;
    font-size: 20px;
    font-family: Montserrat;
    font-weight: 600;
    background: white;
    line-height: 30px;
    padding: 0 6px;
    border-radius: 4px;
  }

  & .content_detail {
    display: flex;
    gap: 0 24px;

    & p {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export const BannerBar = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.5) 65.5%,
    rgba(153, 153, 153, 0) 100%
  );
  margin: 8px 0 4px;
`;
