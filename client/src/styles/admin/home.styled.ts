import styled from "styled-components";

export const Wrapper = styled.div<{ $header: boolean }>`
  width: 100%;
  height: 100vh;

  & .inner {
    display: flex;
    height: 100%;
  }
  .content {
    position: relative;
    width: 100%;
    overflow: hidden;

    main {
      width: 100%;
      height: 100%;
      padding-top: 45px;
      background: #eeeeee;

      .inner {
        flex-direction: column;
        margin: 25px 15px 25px 30px;
        padding: 20px 25px;
        height: calc(100% - 50px);
        background: white;
      }
    }
  }

  header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: white;

    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 45px;
      padding: 0 15px 0 30px;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
    }
    .header-title {
      font-size: 18px;
      line-height: 22px;
      font-weight: 600;
    }
    button {
      padding: 7px 15px;
      font-size: 12px;
      letter-spacing: -0.5px;
      border-radius: 3px;
      font-weight: 500;

      &.logout {
        background: ${({ theme }) => theme.admColor.MainColor};
        color: white;
        letter-spacing: 0.2px;
      }
    }
  }
`;
