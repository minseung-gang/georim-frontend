import { useContext } from "react";
import { TabsContext } from "../../molecule/Tabs";
import * as Tab from "../../../styles/component/tabs.styled";

interface TriggerProps {
  value: number;
  children: React.ReactNode;
}

export default function Trigger({ value, children }: TriggerProps) {
  const context = useContext(TabsContext);
  const isActive = context?.selectedIndex === value;
  const handlePress = () => {
    if (context) {
      context.setSelectedIndex(value);
    }
  };

  return (
    <Tab.Trigger onClick={handlePress} $active={isActive}>
      {children}
    </Tab.Trigger>
  );
}
