import {
  CardContainer,
  CharacterImage,
  CharacterInfoContainer,
  CharacterName,
  CharacterDetailsList,
  CharacterDetailsListItem,
  CharacterStatusIndicator,
} from "./CharacterCard.styles";
import { Character } from "@/services/characters/characterService.types";

export const CharacterCard = (character: Character) => {
  return (
    <CardContainer>
      <CharacterImage src={character.image} />
      <CharacterInfoContainer>
        <CharacterName>{character.name}</CharacterName>
        <CharacterDetailsList>
          <CharacterDetailsListItem>
            <CharacterStatusIndicator status={character.status} />
            {` [${character.status}]`}
          </CharacterDetailsListItem>
          <CharacterDetailsListItem>
            {" "}
            {`> SPECIE: ${character.species} `}
          </CharacterDetailsListItem>
        </CharacterDetailsList>
      </CharacterInfoContainer>
    </CardContainer>
  );
};
