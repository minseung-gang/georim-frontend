import React from "react";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
  max?: number;
}

function Layout({ children, max }: LayoutProps) {
  return <Wrapper max={max}>{children}</Wrapper>;
}

export default Layout;

const Wrapper = styled.div<{ max?: number }>`
  max-width: ${(props) => (props.max ? props.max + "px" : "1200px")};

  width: 100%;
  margin: 91px auto 0;
  ${(props) =>
    props.max ??
    ` @media screen and (max-width: 1260px) {
    width: calc(100% - 60px);
  }
  @media screen and (max-width: 1024px) {
    margin-top: 81px;
  }
  @media screen and (max-width: 500px) {
    margin-top: 57px;
    width: calc(100% - 40px);
  }`}
`;
