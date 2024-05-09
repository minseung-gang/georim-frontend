import React, { useEffect, useState } from "react";
import { createContext } from "react";
import Trigger from "../atom/dropdown/Trigger";
import List from "../atom/dropdown/List";
import Dropdown from "../atom/dropdown/Dropdown";
import { useToggle } from "../../hook/useToggle";

interface NavbarProps {
  children: React.ReactNode;
}

interface DropDownContextProps {
  state: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DropDownContext = createContext<DropDownContextProps | null>(null);

function DropDown({ children }: NavbarProps) {
  const { state, toggle } = useToggle();
  const providerValue: DropDownContextProps = {
    state,
    toggle,
  };
  return (
    <DropDownContext.Provider value={providerValue}>
      {children}
    </DropDownContext.Provider>
  );
}

export default DropDown;

DropDown.Trigger = Trigger;
DropDown.List = List;
DropDown.Dropdown = Dropdown;
