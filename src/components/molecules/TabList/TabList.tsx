import { TabButton } from "@/components/atoms/TabButton/TabButton";
import { TAB_ROLES, TAB_NAME } from "@/util/data";
import { ListContainer } from "./TabList.styles";
import { TabListProps } from "./TabList.types";

export const TabList = ({ activeTab, clickHandler }: TabListProps) => {
  return (
    <ListContainer role={TAB_ROLES.TABLIST} aria-label="Dashboard Data">
      <TabButton
        tabName={TAB_NAME.CHARACTERS}
        isActive={activeTab === TAB_NAME.CHARACTERS}
        onClick={() => clickHandler(TAB_NAME.CHARACTERS)}
      >
        {TAB_NAME.CHARACTERS}
      </TabButton>
      <TabButton
        tabName={TAB_NAME.LOCATIONS}
        isActive={activeTab === TAB_NAME.LOCATIONS}
        onClick={() => clickHandler(TAB_NAME.LOCATIONS)}
      >
        {TAB_NAME.LOCATIONS}
      </TabButton>
    </ListContainer>
  );
};
