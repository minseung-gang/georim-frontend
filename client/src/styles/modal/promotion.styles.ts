import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  .curtain {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.05);
  }
  .inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background: white;
    min-width: 500px;

    border-radius: 5px;
    box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.1);
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;

      p {
        font-weight: 600;
        font-size: 17px;
      }
    }
    .sec_tit {
      font-size: 14px;
      font-weight: 600;
      color: #e19393;
    }
    .check_container {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      gap: 0 5px;
    }
    .flex {
      display: flex;
      align-items: center;
    }
    .gp-0-10 {
      gap: 0 10px;
    }
    .gp-0-20 {
      gap: 0 20px;
    }
    .content {
      display: grid;
      gap: 25px 0;
      .container {
        display: flex;
        flex-direction: column;
        gap: 12px 0;

        .label_form {
          display: flex;
          width: 250px;
          height: 180px;
          justify-content: center;
          align-items: center;
          background: ${({ theme }) => theme.admColor.gray6};
          border-radius: 3px;
          overflow: hidden;
          cursor: pointer;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        span {
          font-size: 400;
          font-size: 13px;
          color: ${({ theme }) => theme.admColor.gray5};
        }
      }

      input {
        max-width: 200px;
        padding: 3px 8px;
        border: none;
        border-bottom: 1px solid #dfdfdf;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        margin: 0;

        &:focus {
          outline: none;
        }
      }
    }

    p {
      font-size: 13px;
      font-weight: 500;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .comm_form {
      display: flex;
      flex-direction: column;
      gap: 25px 0;
    }
    .price {
      input {
        max-width: 100px;
        text-align: right;
        color: ${({ theme }) => theme.admColor.gray3};
      }
    }
  }
  .btn_container {
    display: flex;
    justify-content: flex-end;
    gap: 0 10px;
    margin-top: 50px;

    button {
      padding: 5px 15px;
      border-radius: 5px;
      color: white;
      background: ${({ theme }) => theme.admColor.MainColor};
    }
  }
`;

export const CloseIcon = styled(IoClose)`
  font-size: 22px;
  cursor: pointer;
`;
