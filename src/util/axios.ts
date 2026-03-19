import axios from "axios";
import { API_ENDPOINT } from "./data";

export const createApiClient = () =>{
    return axios.create({
  baseURL: API_ENDPOINT.BASE_URL,
  timeout: 5000, 
});
}
export const handleApiError = (error: unknown): never => {
  if (axios.isAxiosError(error)) {
    const message = error.response?.data?.error || error.message || 'An unexpected API error occurred';
    throw new Error(`API Error: ${message}`);
  }
  throw new Error('An unexpected error occurred during fetch');
};