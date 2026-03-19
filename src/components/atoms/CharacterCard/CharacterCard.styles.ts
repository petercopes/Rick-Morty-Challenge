import { CHARACTER_STATUS } from "@/services/characters/characterService.types"
import styled from "styled-components"

export const CardContainer = styled.div`
  display:flex;
	flex-direction:column;
	border: ${({ theme }) => theme.borders.characterCard};
	border-radius:${({ theme }) => theme.spacing.sm};
	padding-bottom: ${({ theme }) => theme.spacing.xxs};
	overflow: clip;
`

export const CharacterImage = styled.img`
	opacity:0.8;
`

export const CharacterInfoContainer = styled.section`
	display:flex;
	flex-direction:column;
	height:100%;
	justify-content:space-between;
	padding: ${({ theme }) => theme.spacing.md};
	text-transform:uppercase;
	font-family: ${({ theme }) => theme.font.family.secondary};
	font-size: ${({ theme }) => theme.font.size.base};
	font-weight: ${({ theme }) => theme.font.weights.bold};
`

export const CharacterName = styled.h3`
	 padding: ${({theme}) => `0 0 ${theme.spacing.md} 0 `};
	 color: ${({ theme }) => theme.colors.white};
	 text-shadow: ${({ theme }) => theme.shadows.activeButtonTabText};
`

export const CharacterDetailsList = styled.ul`
	list-style:none;
	color:${({ theme }) => theme.colors.primaryGreen};
	text-shadow: ${({ theme }) => theme.shadows.characterInfoText};
`

export const CharacterDetailsListItem = styled.li`
	padding-bottom: ${({ theme }) => theme.spacing.sm};

`

export const CharacterStatusIndicator = styled.span<{status:string}>`
	display: inline-block;
	width:  ${({ theme }) => theme.spacing.xs};
	height: ${({ theme }) => theme.spacing.xs};
	border-radius: 50%;
	margin-right: ${({ theme }) => theme.spacing.xs};
	${({ status,theme }) => {
    switch (status) {
      case CHARACTER_STATUS.ALIVE:
        return `
					background-color: ${theme.colors.characterStatusAlive};
					box-shadow: 0 0 ${theme.spacing.xs} ${theme.colors.characterStatusAlive};`;
			case CHARACTER_STATUS.DEAD:
        return `
					background-color: ${theme.colors.characterStatusDead};
					box-shadow: 0 0 ${theme.spacing.xs} ${theme.colors.characterStatusDead};`;
			case CHARACTER_STATUS.UNKNOWN:
      return `
				background-color: ${theme.colors.characterStatusUnknown};
				box-shadow: 0 0 ${theme.spacing.xs} ${theme.colors.characterStatusUnknown};`;
      default:
        return ``;}}}
`