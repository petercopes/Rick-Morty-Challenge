import { Location } from "@/services/Location/locationService.types";
import {
  CardContainer,
  LocationInfoContainer,
  LocationName,
  LocationTypeContainer,
} from "./LocationCard.styles";

export const LocationCard = (location: Location) => {
  return (
    <CardContainer>
      <LocationInfoContainer>
        <LocationName>{location.name}</LocationName>
        <LocationTypeContainer>{location.type}</LocationTypeContainer>
      </LocationInfoContainer>
    </CardContainer>
  );
};
