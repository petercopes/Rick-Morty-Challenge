import { createApiClient, handleApiError } from "@/util/axios";
import { APIResponse } from "../characters/characterService.types";
import { Location } from "./locationService.types";
import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT, TAB_NAME } from "@/util/data";

const apiClient = createApiClient();

export const fetchLocations = async (): Promise<Location[]> => {
  try {
    const { data } = await apiClient.get<APIResponse<Location>>(API_ENDPOINT.LOCATIONS_ENDPOINT);
    return data.results;
  } catch (error) {
    return handleApiError(error);
  }
};

export const useLocations = () => {
  return useQuery({
    queryKey: [TAB_NAME.LOCATIONS],
    queryFn: fetchLocations,
    staleTime: Infinity,
  });
};