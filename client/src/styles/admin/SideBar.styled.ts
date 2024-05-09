import styled from "styled-components";
import { TfiWrite } from "react-icons/tfi";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

export const Wrapper = styled.div`
  min-width: 250px;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  background: ${({ theme }) => theme.admColor.gray1};

  font-family: "Wanted Sans Variable", "Wanted Sans", -apple-system,
    BlinkMacSystemFont, system-ui, "Segoe UI", "Apple SD Gothic Neo",
    "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", sans-serif;

  .pd-0-20 {
    padding: 0 20px;
  }
  .pd-20-0 {
    padding: 20px 0;
  }
  .pd-20 {
    padding: 20px;
  }

  & .main_logo {
    border-bottom: 1px solid ${({ theme }) => theme.admColor.gray2};
    padding: 10px 20px;
    text-align: center;
    height: 45px;
    img {
      height: 100%;
      object-fit: contain;
    }
  }
  nav {
    padding: 20px 0;
    height: 100%;
    & .list {
      & .at-category {
        display: flex;
        justify-content: space-between;
        padding-bottom: 15px;
        color: ${({ theme }) => theme.admColor.gray3};
        padding: 20px;

        & p {
          font-size: 14px;
          letter-spacing: -0.02rem;
        }
      }
      & .at-gnb {
        display: flex;
        justify-content: space-between;
        padding-bottom: 15px;
        color: ${({ theme }) => theme.admColor.gray3};
      }
      & .at-gnb {
        .at-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: white;

          & .trigger {
            padding: 0 20px;
          }

          & svg {
            font-size: 17px;
            color: ${({ theme }) => theme.admColor.white};
          }
          & p {
            font-size: 14px;
            font-weight: 300;
            color: ${({ theme }) => theme.admColor.white};
            cursor: pointer;
          }

          & .at-title {
            display: flex;
            align-items: center;
            gap: 0 20px;
          }
        }
      }

      & .at-lnb {
        display: block;
        text-align: left;
        padding: 7px 0 7px 58px;
        font-size: 14px;
        font-weight: 300;
        color: ${({ theme }) => theme.admColor.white};
        transition: background 0.2s ease-in-out;

        &:hover {
          background: ${({ theme }) => theme.admColor.gray0};
        }

        &:first-child {
          margin-top: 10px;
        }
      }
    }
  }
`;

export const WritingIcon = styled(TfiWrite)``;
export const DropDownIcon = styled(IoMdArrowDropdown)`
  color: ${({ theme }) => theme.colors.gray2} !important;
`;
export const DropUpIcon = styled(IoMdArrowDropup)`
  color: ${({ theme }) => theme.colors.gray2} !important;
`;
