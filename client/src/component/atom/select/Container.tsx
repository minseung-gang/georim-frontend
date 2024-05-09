import React, { useContext } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return <div style={{ position: "relative" }}>{children}</div>;
}

export default Container;
