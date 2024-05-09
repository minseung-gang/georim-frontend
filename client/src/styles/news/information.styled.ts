import styled from "styled-components";
import Building from "../../asset/images/buildings5.png";
export const Cover = styled.div`
  padding-bottom: 295px;
`;
export const Container = styled.div`
  position: relative;
  height: 650px;
  background: url(${Building}) no-repeat;
  background-size: cover;
  background-position: top;
`;
export const TextBox = styled.div`
  position: absolute;
  bottom: 50px;
  left: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  & > p {
    font-weight: 300;
    color: white;
    width: 430px;
    line-height: 26px;
    word-break: keep-all;
    white-space: pre-line;
  }
`;

export const SubTitle = styled.strong`
  color: white;
  font-size: 5rem;
`;

export const Content = styled.div`
  height: 80vh;
`;
