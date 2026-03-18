import styled from "styled-components";

export const LoaderContainer = styled.div<{ fullScreen?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${({fullScreen}) => (fullScreen ? "100vh" : "200px")};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  opacity:0.7;
`;
