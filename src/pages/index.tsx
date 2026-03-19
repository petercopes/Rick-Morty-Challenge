import { TabList } from "@/components/molecules/TabList/TabList";
import { CharactersTab } from "@/components/organisms/CharactersTab/CharactersTab";
import { LocationsTab } from "@/components/organisms/LocationsTab/LocationsTab";
import { Device, DeviceScreen, Heading, Main } from "@/styles/index.styles";
import { Tab, TAB_NAME } from "@/util/data";
import Head from "next/head";
import { useState } from "react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<Tab>(TAB_NAME.CHARACTERS);

  return (
    <>
      <Head>
        <title>The Portal-Dex</title>
        <meta
          name="description"
          content="Catalog every character, alien, and dimension in the show"
        />
        <link rel="icon" href="/site-icon.png" />
      </Head>
      <Main>
        <Device>
          <Heading>The Portal-Dex v1.0</Heading>
          <DeviceScreen>
            <TabList activeTab={activeTab} clickHandler={setActiveTab} />
            {activeTab === TAB_NAME.CHARACTERS && <CharactersTab tabKey={0} />}
            {activeTab === TAB_NAME.LOCATIONS && <LocationsTab tabKey={1} />}
          </DeviceScreen>
        </Device>
      </Main>
    </>
  );
}
