import React from "react";
import * as Tabs from "../../../styles/component/tabs.styled";

interface ListProps {
  children: React.ReactNode;
}

function List({ children }: ListProps) {
  return <Tabs.List>{children}</Tabs.List>;
}

export default List;
