import styled from "styled-components";
import { FaCalendarAlt } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";

export const Wrapper = styled.div`
  padding: 20px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  font-family: "Wanted Sans Variable", "Wanted Sans", -apple-system,
    BlinkMacSystemFont, system-ui, "Segoe UI", "Apple SD Gothic Neo",
    "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", sans-serif;

  h4 {
    text-align: left;
  }
`;

export const Inner = styled.div`
  height: 100%;
  padding: 30px 20px;
  max-width: 930px;
`;

export const Form = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

  & .gp-5-0 {
    gap: 5px 0;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  border-bottom: 1px solid ${({ theme }) => theme.admColor.gray5};

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.admColor.gray5};
  }
  & .input_title {
    padding: 20px 10px;
    background: ${({ theme }) => theme.admColor.gray6};
    font-weight: 600;
    & p {
      font-size: 12px;
      text-align: left;
    }
  }
  & .input_content {
    display: flex;
    align-items: center;
    padding: 0 20px;
    gap: 0 10px;

    p {
      font-size: 13px;
      min-width: fit-content;
      letter-spacing: -0.5px;
    }

    & .label_form {
      width: 500px;
      height: 230px;
      padding: 20px 0;
      cursor: pointer;

      & span {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${({ theme }) => theme.admColor.gray6};
        color: ${({ theme }) => theme.admColor.gray5};
        border-radius: 3px;
      }

      & .upload_img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }

    & .flexBox {
      display: grid;
      width: 100%;
      grid-template-columns: 150px 10px 150px;
      align-items: center;
      gap: 0 20px;

      & > div {
        display: flex;
        align-items: center;
        gap: 0 2px;
        input {
          margin-left: 5px;
          text-align: right;
        }
      }
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type="number"] {
      -moz-appearance: textfield;
    }

    & input {
      padding: 3px 8px;
      border: 1px solid ${({ theme }) => theme.admColor.gray5};
      border-radius: 2px;
      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
      cursor: pointer;

      &[type="text"],
      &[type="number"] {
        width: 100%;
      }
      &::placeholder {
        font-size: 12px;
      }
      &:focus {
        outline: none;
      }
    }

    .check_form {
      display: flex;
      gap: 0 30px;

      .check_container {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
    .upload_container {
      .input_field {
        display: flex;
        align-items: center;
        gap: 0 5px;
      }
    }

    .trigger {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      min-width: 135px;
      padding: 3px 8px;
      line-height: 18px;
      border: 1px solid ${({ theme }) => theme.admColor.gray5};
      border-radius: 3px;
      cursor: pointer;
      gap: 0 5px;

      p {
        width: 100%;
      }
    }

    ul {
      border: 1px solid ${({ theme }) => theme.admColor.gray5};
    }
    li {
      cursor: pointer;
      padding: 10px 16px;
      font-size: 14px;
      font-weight: 500;
      color: #8795a9;
      font-size: 13px;

      &:hover {
        background: #f7f7f7;
      }
    }
  }
`;

export const FlexBox = styled.div`
  display: flex;
  gap: 0 4px;
`;

export const ImageUploader = styled.div`
  background: #f5f7f8;
  border-radius: 5px;

  label {
    width: 100%;
    height: 240px;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .upload_img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  span {
    color: ${({ theme }) => theme.admColor.gray4};
  }
`;

export const CalendarIcon = styled(FaCalendarAlt)`
  font-size: 14px;
  cursor: pointer;
  color: ${({ theme }) => theme.admColor.MainColor};
`;

export const IconBox = styled.div`
  position: relative;
`;

export const UploadIcon = styled(FiUpload)`
  font-size: 14px;
  cursor: pointer;
  color: ${({ theme }) => theme.admColor.MainColor};
`;

export const UploadIconBox = styled.div`
  padding: 3px 5px;
  border-radius: 3px;
  border: 1px solid #edb3b1;
  line-height: 18px;
`;

export const SubmitBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0 20px;
  padding: 30px 0;

  & button {
    width: 100px;
    padding: 8px 15px;
    border-radius: 3px;
    cursor: pointer;
    color: white;
    background: #464d60;
    font-size: 13px;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: #313541;
    }
  }
`;
