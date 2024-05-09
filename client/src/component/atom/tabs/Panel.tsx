import React from "react";
import { useContext } from "react";
import { TabsContext } from "../../molecule/Tabs";
import * as Tab from "../../../styles/component/tabs.styled";

interface PanelProps {
  value: number;
  children: React.ReactNode;
}

export default function Panel({ value, children }: PanelProps) {
  const context = useContext(TabsContext);
  const seletedIndex = context?.selectedIndex;
  if (context === null) return <></>;

  return <Tab.Panel value={seletedIndex === value}>{children}</Tab.Panel>;
}
