import React, { ReactElement, createContext, useState } from "react";
import List from "../atom/tabs/List";
import Trigger from "../atom/tabs/Trigger";
import Panel from "../atom/tabs/Panel";

type SetterOrUpdater<T> = (value: T | ((currVal: T) => T)) => void;

interface TabsProps<T> {
  children: React.ReactNode;
  value?: number;
  category?: string[];
}

interface TabsContextProps<T> {
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  categories?: string;
}

export const TabsContext = createContext<TabsContextProps<any> | null>(null);

const Tabs = <T,>({ value, children }: TabsProps<T>): ReactElement => {
  const [selectedIndex, setSelectedIndex] = useState<number>(value as number);

  const providerValue: TabsContextProps<T> = {
    selectedIndex,
    setSelectedIndex,
  };

  return (
    <TabsContext.Provider value={providerValue}>
      {children}
    </TabsContext.Provider>
  );
};

Tabs.List = List;
Tabs.Trigger = Trigger;
Tabs.Panel = Panel;

export default Tabs;
