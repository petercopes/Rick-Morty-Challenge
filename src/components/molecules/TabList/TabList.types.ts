import { Tab, TAB_NAME } from '@/util/data';
export interface TabListProps  {
  activeTab: Tab;
  clickHandler: (arg0:TAB_NAME) => void;
};

