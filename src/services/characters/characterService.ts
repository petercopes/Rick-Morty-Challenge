import { Character, APIResponse } from './characterService.types';
import { createApiClient, handleApiError } from '@/util/axios';
import { API_ENDPOINT } from '@/util/data';
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
    queryKey: [API_ENDPOINT.CHARACTERS_QUERY_KEY],
    queryFn: fetchCharacters,
    staleTime: Infinity, 
  });
};

