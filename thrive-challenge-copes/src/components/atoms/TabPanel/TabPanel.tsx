import { TAB_ROLES } from "@/util/data";
import { StyledTabContainer } from "./TabPanel.styles";
import { TabPanelProps } from "./TabPanel.types";

export const TabPanel: React.FC<TabPanelProps> = ({
  children,
  tabName,
  tabKey,
}) => {
  return (
    <StyledTabContainer
      id={`${tabName}Panel`}
      role={TAB_ROLES.TABPANEL}
      aria-labelledby={`${tabName}Tab`}
      tabIndex={tabKey}
    >
      {children}
    </StyledTabContainer>
  );
};
