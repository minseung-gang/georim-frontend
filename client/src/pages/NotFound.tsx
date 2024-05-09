import React from "react";
import { Link } from "react-router-dom";
import Layout from "../component/Layout";
import styled from "styled-components";

function NotFound() {
  return (
    <Wrapper>
      <main className="inner">
        <p className="main_txt">요청하신 페이지를 표시할 수 없습니다.</p>
        <p className="sub_txt">
          <span>입력하신 주소</span>가 올바른지 다시 한 번 확인해주세요.
        </p>
        <div className="button">
          <Link to="/">
            <button>홈페이지로 돌아가기</button>
          </Link>
        </div>
      </main>
    </Wrapper>
  );
}

export default NotFound;

const Wrapper = styled.div`
  & .inner {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px 0;

    .main_txt {
      font-size: 26px;
      font-weight: 500;
      color: #f95353;
    }
    .sub_txt {
      font-size: 20px;
      color: #4d4d4d;
    }
    .button {
      margin-top: 30px;
      button {
        width: 180px;
        gap: 0 10px;
        padding: 12px 20px;
        color: white;
        border-radius: 3px;
        background: #57a4f4;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: -0.5px;
      }
    }
  }
`;
