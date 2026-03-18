import { useCharacters } from "@/services/characters/characterService";
import { TAB_NAME, TAB_ROLES } from "@/util/data";
import { Loader } from "../../atoms/Loader/Loader";
import { theme } from "@/styles/theme";
import { CharacterCard } from "@/components/atoms/CharacterCard/CharacterCard";
import { TabPanel } from "./CharactersTab.styles";

export const CharactersTab = ({ tabKey }: { tabKey: number }) => {
  const {
    data: charactersData,
    isLoading: charactersLoading,
    isError: isCharactersError,
    error: charactersError,
  } = useCharacters();

  return (
    <TabPanel
      id={`${TAB_NAME.CHARACTERS}Panel`}
      role={TAB_ROLES.TABPANEL}
      aria-labelledby={`${TAB_NAME.CHARACTERS}Tab`}
      tabIndex={tabKey}
    >
      {charactersLoading && (
        <Loader
          isLoading={charactersLoading}
          fullScreen
          size={50}
          color={theme.colors.white}
        />
      )}
      {isCharactersError && <p>Error: {charactersError.message}</p>}
      {charactersData &&
        charactersData.map((item) => (
          <CharacterCard
            image={item.image}
            name={item.name}
            species={item.species}
            status={item.status}
            id={item.id}
            key={item.id}
          />
        ))}
    </TabPanel>
  );
};
