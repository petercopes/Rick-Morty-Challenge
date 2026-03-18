import styled from "styled-components";

export const StyledTabContainer = styled.div<{ isActive?: boolean }>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;