import useSWR from 'swr';
import { API_KEY, API_URL } from '../settings/nasa';
import { fetcher } from '../utils/fetcher';

export const useMarsPhotos = (camera?: string, sol?: number, date?: string) => {
  const url = `${API_URL}camera=${camera}&sol=${sol}&date=${date}&api_key=${API_KEY}`;
  const { data, error } = useSWR(url, fetcher);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
};
