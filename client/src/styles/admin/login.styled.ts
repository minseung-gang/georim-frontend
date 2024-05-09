import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  [class*="btn"].large {
    height: 56px;
  }

  & .inner {
    margin-top: 20vh;
    & .logo_container {
      padding: 40px 0;
      text-align: center;

      img {
        height: 45px;
        object-fit: contain;
      }
    }

    form {
      width: 400px;
      .title {
        display: block;
        padding-bottom: 5px;
        font-size: 14px;
        font-weight: normal;
        color: #444b59;
        text-align: left;
      }

      .frm_con {
        .input_form:nth-child(2) {
          margin-top: 12px;
        }
        .input_form {
          input {
            width: 100%;
            height: 48px;
            padding: 14px 12px;
            border: 1px solid ${({ theme }) => theme.admColor.gray5};
            border-radius: 4px;

            &:focus {
              outline: none;
            }
            &::placeholder {
              font-size: 13px;
              font-weight: normal;
              color: ${({ theme }) => theme.admColor.gray4};
              font-weight: 500;

              letter-spacing: -0.5px;
            }
          }
        }
      }
      .error_txt {
        margin: 16px 0;
        text-align: center;
        p {
          font-size: 14px;
          color: #dc2c2c;
        }
      }
      .button {
        display: -webkit-flex;
        display: -ms-flex;
        display: -ms-flexbox;
        display: flex;
        margin: 24px 0 0;

        .signin_btn {
          width: 100%;
          font-size: 16px;
          font-weight: 600;
          text-align: center;
          border-radius: 4px;
          background: #0085ba;
          letter-spacing: -0.1px;
          color: white;
          font-family: "Pretendard";
        }
      }
    }
  }

  footer {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);

    & p {
      font-size: 12px;
      line-height: 18px;
      color: #667084;
      letter-spacing: -0.5px;
    }
  }
`;
export const Form = styled.form``;
