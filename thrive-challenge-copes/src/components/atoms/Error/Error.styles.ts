import styled from "styled-components"

export const ErrorContainer =styled.div`
    font-family:${({ theme }) => theme.font.family.primary};
    position: absolute;
    align-self: center;
    justify-self: center;
    text-align:center;
`
export const ErrorTitle = styled.h3`
    padding: ${({theme}) => `0 0 ${theme.spacing.md} 0 `};
	color: ${({ theme }) => theme.colors.white};
	text-shadow: ${({ theme }) => theme.shadows.activeButtonTabText};
`
export const ErrorMessage = styled.p`
    font-family:${({ theme }) => theme.font.family.primary};
	text-shadow: ${({ theme }) => theme.shadows.characterInfoText};
    text-transform: uppercase;
`