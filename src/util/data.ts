import { ValueOf } from "next/dist/shared/lib/constants";

export enum TAB_NAME {
    CHARACTERS = "CHARACTERS",
    LOCATIONS = "LOCATIONS"
}
export type Tab = ValueOf<TAB_NAME>;

export enum TAB_ROLES {
    TAB = "tab",
    TABPANEL = "tabpanel",
    TABLIST = "tablist",
}

export const API_ENDPOINT = {
    BASE_URL: 'https://rickandmortyapi.com/api',
    CHARACTERS_ENDPOINT:'/character',
    CHARACTERS_QUERY_KEY:'characters',
    LOCATIONS_ENDPOINT:'/location',
    LOCATION_QUERY_KEY:'locations',
}