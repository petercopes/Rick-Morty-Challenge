import styled from "styled-components";
export const TabList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;
export const Device = styled.div`
  height: ${({ theme }) => theme.containers.deviceHeight};
  width: ${({ theme }) => theme.containers.deviceWidth};
  margin: auto;
  display:flex;
  flex-direction:column;
  background-color: ${({ theme }) => theme.colors.deviceBackground};
	padding: ${({ theme }) => theme.spacing.md};
	padding-top: ${({ theme }) => theme.spacing.xs};
  border-radius: 45px;
`;
export const DeviceScreen = styled.div`
  background-color: ${({ theme }) => theme.colors.screenBackground};
  border: ${({ theme }) => theme.borders.screenBorder};
  border-radius: 45px;
  width: stretch;
  height: stretch;
  overflow:clip;
  position:relative;
  &::before {
    background-color: ${({ theme }) => theme.colors.screenOverlayShadow};
    z-index:${({ theme }) => theme.zIndices.screenShadow};
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        0deg,
        rgba(7, 43, 11, 0.188) 50%,
        transparent 50%
    );
    background-size: 100% 5px;
    z-index: ${({ theme }) => theme.zIndices.screenLines};
		pointer-events: none; 
	}
`;
export const Main = styled.main`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.font.size.heading};
	display: flex;
	justify-content: center;
	padding: ${({ theme }) => theme.spacing.md};
	font-family: ${({ theme }) => theme.font.family.primary};
	font-weight: ${({ theme }) => theme.font.weights.normal};
	color:${({ theme }) => theme.colors.black};
`