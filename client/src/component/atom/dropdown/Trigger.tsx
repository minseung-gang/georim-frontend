import React, { useContext, ReactElement, useEffect } from "react";
import * as Toggle from "../../../styles/component/dropdown.styled";
import { DropDownContext } from "../../molecule/Dropdown";

interface TriggerProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon1?: React.ReactElement;
  icon2?: React.ReactElement;
}

function Trigger({ children, onClick, icon1, icon2 }: TriggerProps) {
  const context = useContext(DropDownContext);
  if (context) {
    const { state, toggle } = context;
    const handleClickEvent = () => {
      if (onClick) {
        onClick();
      }
      toggle(!state);
    };
    return (
      <Toggle.Trigger
        className="trigger"
        $isClicked={state}
        onClick={() => handleClickEvent()}
      >
        {children}
        {icon1 && state ? icon1 : icon2}
      </Toggle.Trigger>
    );
  }

  return null;
}

export default Trigger;
