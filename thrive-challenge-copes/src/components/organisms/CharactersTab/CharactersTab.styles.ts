import styled from "styled-components";

export const TabPanel = styled.div`
  max-height: ${({ theme }) => theme.containers.tabContentHeight};
  height:stretch;
  overflow:scroll;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap:  ${({ theme }) => theme.spacing.lg};
  position: relative;
`;