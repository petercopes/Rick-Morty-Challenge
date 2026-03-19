import styled from "styled-components";
export const ListContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;