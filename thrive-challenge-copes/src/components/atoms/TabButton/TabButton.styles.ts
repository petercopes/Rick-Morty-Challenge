import styled from "styled-components";


export const StyledTabButton = styled.button<{ isActive?: boolean }>`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  cursor: pointer;
  background-color: transparent; 
  color: ${({ theme }) => theme.colors.secondaryGreen};
  border: none; 
  font-weight: ${({ theme }) => theme.font.weights.bold};
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${({ theme }) => theme.font.size.xl};
  transition: ${({ theme }) => theme.transitions.default};
  margin: 0; 
  letter-spacing: 1px;
  position: relative;
  &::before {
    content: "[";
    position: absolute;
    left: 20%;
    opacity: 0;
    color: ${({ theme }) => theme.colors.primaryGreen};
    transition: ${({ theme }) => theme.transitions.default};
    font-weight: 900;
  }
  ${({isActive,theme}) => isActive && (`
    color: ${theme.colors.primaryGreen};
    text-shadow:${theme.shadows.activeButtonTabText});
    &::before {
      opacity: 1;
      left: ${theme.spacing.sm};
    }
    
  &::after {
    content: "";
    position: absolute;
    bottom: -${theme.spacing.xxs};
    left: 0;
    width: 100%;
    height: ${theme.spacing.xxs};
    background-color:${theme.colors.primaryGreenShadow};
    box-shadow: ${theme.shadows.activeButtonTab};
    z-index: ${theme.zIndices.shadow};
  }
  
  `)}

`;


