import { TabButton } from "@/components/atoms/TabButton/TabButton";
import { CharactersTab } from "@/components/organisms/CharactersTab/CharactersTab";
import { LocationsTab } from "@/components/organisms/LocationsTab/LocationsTab";
import { Device, DeviceScreen, Main, TabList } from "@/styles/index.styles";
import { Tab, TAB_NAME, TAB_ROLES } from "@/util/data";
import { useState } from "react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<Tab>(TAB_NAME.CHARACTERS);

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

          {activeTab === TAB_NAME.CHARACTERS && <CharactersTab tabKey={0} />}
          {activeTab === TAB_NAME.LOCATIONS && <LocationsTab tabKey={1} />}
        </DeviceScreen>
      </Device>
    </Main>
  );
}
