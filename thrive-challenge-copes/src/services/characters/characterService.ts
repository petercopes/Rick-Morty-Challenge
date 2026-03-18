import { Character, APIResponse } from './characterService.types';
import { createApiClient, handleApiError } from '@/util/axios';
import { API_ENDPOINT, TAB_NAME } from '@/util/data';
import { useQuery } from '@tanstack/react-query';

const apiClient = createApiClient();

export const fetchCharacters = async (): Promise<Character[]> => {
  try {
    const { data } = await apiClient.get<APIResponse<Character>>(API_ENDPOINT.CHARACTERS_ENDPOINT);
    return data.results;
  } catch (error) {
    return handleApiError(error);
  }
};



export const useCharacters = () => {
  return useQuery({
    queryKey: [TAB_NAME.CHARACTERS],
    queryFn: fetchCharacters,
    staleTime: Infinity, 
  });
};

