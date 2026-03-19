import styled from "styled-components"

export const CardContainer = styled.div`
    display:flex;
	flex-direction:column;
	border: 2px solid ${({ theme }) => theme.colors.cardBorder};
	border-radius:${({ theme }) => theme.spacing.sm};
    padding:${({ theme }) => theme.spacing.lg};
    font-family: ${({ theme }) => theme.font.family.secondary};
    background-color: ${({ theme }) => theme.colors.locationBackground};
    text-transform:uppercase;
    font-weight: ${({ theme }) => theme.font.weights.bold};
`
export const LocationInfoContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height:100%
`;

export const LocationTypeContainer = styled.div`
    width: fit-content;
    padding: ${({theme}) => `${theme.spacing.xs} ${theme.spacing.md}`};
    border: 1px solid ${({ theme }) => theme.colors.locationInfo};
    color: ${({ theme }) => theme.colors.locationInfo};
    font-size: ${({ theme }) => theme.font.size.xs};
    box-shadow:  ${({ theme }) => theme.shadows.locationInfo};
    text-transform: uppercase;
    border-radius: ${({theme}) => `${theme.spacing.xs} ${theme.spacing.xxs}`};
`;

export const LocationName = styled.h3`
    color: ${({ theme }) => theme.colors.white};
	text-shadow: ${({ theme }) => theme.shadows.activeButtonTabText};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
`;