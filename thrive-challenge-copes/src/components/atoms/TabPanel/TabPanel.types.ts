import { TAB_NAME } from "@/util/data";
export interface TabPanelProps {
  children: React.ReactNode;
  tabName:  TAB_NAME;
  tabKey: number;
};
