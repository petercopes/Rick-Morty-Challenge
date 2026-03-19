import { TAB_ROLES } from "@/util/data";
import { StyledTabButton } from "./TabButton.styles";
import { ButtonProps } from "./TabButton.types";

export const TabButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  isActive,
  tabName,
}) => {
  return (
    <StyledTabButton
      id={`${tabName}Tab`}
      onClick={onClick}
      $isActive={isActive}
      role={TAB_ROLES.TAB}
      aria-selected={isActive}
      aria-controls={`${tabName}Panel`}
    >
      {children}
    </StyledTabButton>
  );
};
