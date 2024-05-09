import React, { useContext, useState, useEffect } from "react";
import * as Toggle from "../../../styles/component/dropdown.styled";
import { DropDownContext } from "../../molecule/Dropdown";

interface DropdownProps {
  children: React.ReactNode;
}

function Dropdown({ children }: DropdownProps) {
  const context = useContext(DropDownContext);

  if (context) {
    const { state, toggle } = context;
    return (
      <Toggle.DropDown className={state ? "dropdown is-open" : ""}>
        <Toggle.Content aria-hidden="false">{children}</Toggle.Content>
      </Toggle.DropDown>
    );
  }
  return null;
}

export default Dropdown;
