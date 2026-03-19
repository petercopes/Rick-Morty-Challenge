import { TAB_NAME, TAB_ROLES } from "@/util/data";
import { Loader } from "../../atoms/Loader/Loader";
import { theme } from "@/styles/theme";
import { useLocations } from "@/services/Location/locationService";
import { TabPanel } from "../CharactersTab/CharactersTab.styles";
import { LocationCard } from "@/components/atoms/LocationCard/LocationCard";
import { Error } from "@/components/atoms/Error/Error";

export const LocationsTab = ({ tabKey }: { tabKey: number }) => {
  const {
    data: locationsData,
    isLoading: isLocationsLoading,
    error: locationsError,
    isError: isLocationsError,
  } = useLocations();

  return (
    <TabPanel
      id={`${TAB_NAME.LOCATIONS}Panel`}
      role={TAB_ROLES.TABPANEL}
      aria-labelledby={`${TAB_NAME.LOCATIONS}Tab`}
      tabIndex={tabKey}
    >
      {isLocationsLoading && (
        <Loader
          isLoading={isLocationsLoading}
          size={50}
          color={theme.colors.white}
        />
      )}
      {isLocationsError && <Error message={locationsError.message} />}
      {locationsData &&
        locationsData.map((item) => (
          <LocationCard
            id={item.id}
            name={item.name}
            type={item.type}
            key={item.id}
          />
        ))}
    </TabPanel>
  );
};
