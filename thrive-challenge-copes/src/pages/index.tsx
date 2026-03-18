import { Loader } from "@/components/atoms/Loader/Loader";
import { TabButton } from "@/components/atoms/TabButton/TabButton";
import { TabPanel } from "@/components/atoms/TabPanel/TabPanel";
import { useCharacters } from "@/services/characters/characterService";
import { useLocations } from "@/services/Location/locationService";
import { Device, DeviceScreen, Main, TabList } from "@/styles/index.styles";
import { Tab, TAB_NAME, TAB_ROLES } from "@/util/data";
import { useState } from "react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<Tab>(TAB_NAME.CHARACTERS);
  const {
    data: locationsData,
    isLoading: isLocationsLoading,
    error: locationsError,
    isError: isLocationsError,
  } = useLocations();
  const {
    data: charactersData,
    isLoading: charactersLoading,
    isError: isCharactersError,
    error: charactersError,
  } = useCharacters();

  return (
    <Main>
      <Device>
        <DeviceScreen>
          <TabList role={TAB_ROLES.TABLIST} aria-label="Dashboard Data">
            <TabButton
              tabName={TAB_NAME.CHARACTERS}
              isActive={activeTab === TAB_NAME.CHARACTERS}
              onClick={() => setActiveTab(TAB_NAME.CHARACTERS)}
            >
              {TAB_NAME.CHARACTERS}
            </TabButton>

            <TabButton
              tabName={TAB_NAME.LOCATIONS}
              isActive={activeTab === TAB_NAME.LOCATIONS}
              onClick={() => setActiveTab(TAB_NAME.LOCATIONS)}
            >
              {TAB_NAME.LOCATIONS}
            </TabButton>
          </TabList>

          {activeTab === TAB_NAME.CHARACTERS && (
            //The tabPanel component may be removed in future commits
            <TabPanel tabKey={0} tabName={TAB_NAME.CHARACTERS}>
              {charactersLoading && (
                <Loader isLoading={charactersLoading} fullScreen size={50} />
              )}
              {isCharactersError && <p>Error: {charactersError.message}</p>}
              {charactersData &&
                charactersData.map((item) => <p key={item.id}>{item.name}</p>)}
            </TabPanel>
          )}

          {activeTab === TAB_NAME.LOCATIONS && (
            //The tabPanel component may be removed in future commits
            <TabPanel tabKey={1} tabName={TAB_NAME.LOCATIONS}>
              {isLocationsLoading && (
                <Loader isLoading={isLocationsLoading} fullScreen size={50} />
              )}
              {isLocationsError && <p>Error: {locationsError.message}</p>}
              {locationsData &&
                locationsData.map((item) => <p key={item.id}>{item.name}</p>)}
            </TabPanel>
          )}
        </DeviceScreen>
      </Device>
    </Main>
  );
}
