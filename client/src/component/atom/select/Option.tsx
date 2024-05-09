import React from "react";
import { useContext } from "react";
import { SelectContext } from "../../molecule/Select";
import styled from "styled-components";

export interface OptionsProps {
  onClick: () => void;
  value: string;
  children?: React.ReactNode;
}

export const Option: React.FC<OptionsProps> = ({
  onClick,
  value,
  children,
}) => {
  const context = useContext(SelectContext);

  if (context === undefined) {
    throw new Error(
      "<Select.Option> 컴포넌트는 <Select> 컴포넌트 아래에서만 사용될 수 있습니다."
    );
  }

  if (context) {
    const { setSelected, toggleOptionsVisibility } = context;

    return (
      <li
        onClick={() => {
          onClick();
          setSelected(value);
          toggleOptionsVisibility();
        }}
      >
        {children}
      </li>
    );
  }
  return null;
};
