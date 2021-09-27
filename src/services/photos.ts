import { IPhoto } from '../interfaces/photo';
import { API_KEY, API_URL } from '../settings/nasa';

export const getPhotos = (camera: string = '', sol: number = 1000, date: string, page = 0): Promise<IPhoto[]> => {
  const url = `${API_URL}camera=${camera}&sol=${sol}&date=${date}&api_key=${API_KEY}`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.error('Error:', error));
};
