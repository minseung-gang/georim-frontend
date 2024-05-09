import React from "react";
import * as Toggle from "../../../styles/component/dropdown.styled";

interface ListProps {
  children: React.ReactNode;
  event?: () => void;
}

function List({ children, event }: ListProps) {
  return <Toggle.Li onClick={event}>{children}</Toggle.Li>;
}

export default List;
