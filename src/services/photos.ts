import { API_KEY, API_URL } from '../settings/nasa';

export const getPhotos = async ({ rover, camera, date, sol, page }) => {
  try {
    const url = new URL(`/mars-photos/api/v1/rovers/${rover}/photos?`, API_URL);
    url.searchParams.set('camera', camera);
    sol && url.searchParams.set('sol', sol);
    date && url.searchParams.set('date', date);
    url.searchParams.set('page', page || '1');
    url.searchParams.set('api_key', API_KEY);
    const response = await fetch(String(url));
    const photos = await response.json();
    console.log(url.href);
    return photos;
  } catch (error) {
    console.log(error);
  }
};
