import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import { SlOptionsVertical } from "react-icons/sl";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: white;
  border-radius: 2px;

  p,
  td,
  th,
  button {
    font-family: "Wanted Sans Variable", "Wanted Sans", -apple-system,
      BlinkMacSystemFont, system-ui, "Segoe UI", "Apple SD Gothic Neo",
      "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", sans-serif;
  }

  .navi {
    display: flex;
    gap: 0 8px;
    margin-bottom: 25px;
    align-items: center;

    .navi_con {
      font-size: 12px;
      font-weight: 500;
      &:first-child {
        font-weight: 600;
      }
    }
    svg {
      font-size: 10px;
    }
  }

  & .content_info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 15px;

    .util_container {
      display: flex;
      align-items: center;
      gap: 0 30px;
    }
    .total_posts {
      font-size: 15px;
      font-weight: 500;

      .num {
        color: ${({ theme }) => theme.admColor.blue1};
      }
    }
    .add_btn {
      padding: 7px 14px;
      border-radius: 3px;
      display: flex;
      align-items: center;
      border: 1px solid ${({ theme }) => theme.admColor.gray4};
      gap: 0 6px;
      font-size: 14px;
      font-weight: 500;
      color: ${({ theme }) => theme.admColor.black};
    }
  }

  & .table {
    width: 100%;
    height: 100%;
    border-spacing: 0;
    border-collapse: separate;

    thead {
      width: 100%;
      border: 1px solid ${({ theme }) => theme.colors.gray3};
    }

    .checkbox_icon {
      width: 17px;
      height: 17px;
      color: ${({ theme }) => theme.admColor.MainColor};
      display: none;
    }

    input[type="checkbox"]:checked ~ .checkbox .checkbox_icon {
      display: block;
    }

    tbody {
      td {
        svg {
          width: 15px;
          height: 15px;
          color: ${({ theme }) => theme.admColor.gray3};
        }
        img {
          border-radius: 2px;
        }
      }
      tr {
        border-left: 1px solid ${({ theme }) => theme.colors.gray3};
        border-right: 1px solid ${({ theme }) => theme.colors.gray3};
      }
      tr:last-child {
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray3};
      }
    }

    tr {
      display: grid;
      grid-template-columns: 80px 2fr 1fr 2.5fr 2.5fr 3fr 1.5fr 1.5fr 50px;
      border-bottom: 1px solid ${({ theme }) => theme.admColor.gray6};

      th,
      td {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 9px 7px;
        word-break: keep-all;
        line-height: 16px;
        font-weight: 500;
        text-align: center;

        .flex {
          display: flex;
          gap: 0 4px;
        }
        .gp-0-2 {
          gap: 0 2px;
        }
        .slash {
          font-size: 11px;
          line-height: 13px;
        }
      }
      th {
        font-size: 13px;
        font-weight: 600;
        color: #cf9c9c;
        background: ${({ theme }) => theme.colors.gray2};
        border-top: 1px solid ${({ theme }) => theme.colors.gray3};
        border-bottom: 1px solid ${({ theme }) => theme.admColor.gray5};
        &:first-child {
          border-left: 1px solid ${({ theme }) => theme.colors.gray3};
        }
        &:last-child {
          border-right: 1px solid ${({ theme }) => theme.colors.gray3};
        }

        .up_down_btn {
          display: flex;
          flex-direction: column;
          margin-left: 5px;

          svg {
            cursor: pointer;
          }
        }
      }
      td {
        font-size: 13px;
        .checkbox {
          cursor: pointer;
        }
      }
    }

    .checkbox {
      width: 17px;
      height: 17px;
      border-radius: 3px;
      border: 1px solid ${({ theme }) => theme.admColor.gray5};
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .options_container {
    position: relative;
    .options {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border: 1px solid ${({ theme }) => theme.admColor.gray6};
      border-radius: 3px;
      background: white;
      box-shadow: 0 0 4px -2px rgba(0, 0, 0, 0.3);
      overflow: hidden;

      p {
        padding: 7px 10px;
        cursor: pointer;
        transition: all 0.1s ease-in-out;

        &:hover {
          background: ${({ theme }) => theme.admColor.gray2};
          color: white;
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const PlusIcon = styled(FiPlus)`
  font-size: 16px;
`;

export const OptionsIcon = styled(SlOptionsVertical)`
  cursor: pointer;
`;

export const SearchField = styled.div`
  display: flex;
  align-items: center;

  .trigger {
    width: 120px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    border-radius: 3px 0 0 3px;
    border: 1px solid ${({ theme }) => theme.admColor.gray4};
    border-right: none;
    cursor: default;

    p {
      font-size: 13px;
    }
  }
  ul {
    border: 1px solid ${({ theme }) => theme.admColor.gray6};
    li {
      padding: 10px;
      font-size: 13px;

      &:hover {
        background: ${({ theme }) => theme.admColor.gray6};
      }
    }
  }
`;

export const SerachForm = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  gap: 0 3px;
  border: 1px solid ${({ theme }) => theme.admColor.gray4};
  border-radius: 0 3px 3px 0;
  padding: 0 5px;

  input {
    width: 150px;
    border: none;
    height: 100%;
    padding: 0 10px;
    font-weight: 500;

    &:focus {
      outline: none;
    }
  }
`;
export const SearchIcon = styled(HiMagnifyingGlass)`
  font-size: 17px;
  color: ${({ theme }) => theme.admColor.MainColor};
  margin-bottom: 1px;
  cursor: pointer;
`;

export const ArrowTopIcon = styled(BiSolidUpArrow)`
  font-size: 10px;
`;

export const ArrowBottomIcon = styled(BiSolidDownArrow)`
  font-size: 10px;
`;
