import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { Option } from "../atom/select/Option";
import List from "../atom/select/List";
import Trigger from "../atom/select/Trigger";
import Container from "../atom/select/Container";
import { set } from "react-hook-form";

interface SelectType {
  defaultValue: string;
  children?: React.ReactNode;
}

interface SelectContextProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  isOptionsVisible: boolean;
  toggleOptionsVisibility: () => void;
}

export const SelectContext = createContext<SelectContextProps | null>(null);

export const Select = ({
  defaultValue,
  children,
}: SelectType): React.ReactElement => {
  useEffect(() => {
    setSelected(defaultValue);
  }, [defaultValue]);

  const [selected, setSelected] = useState(defaultValue || "선택하세요");
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const toggleOptionsVisibility = () => {
    setIsOptionsVisible((prev) => !prev);
  };

  const providerValue: SelectContextProps = {
    selected,
    setSelected,
    isOptionsVisible,
    toggleOptionsVisibility,
  };

  return (
    <SelectContext.Provider value={providerValue}>
      {children}
    </SelectContext.Provider>
  );
};

Select.Option = Option;
Select.Container = Container;
Select.List = List;
Select.Trigger = Trigger;
