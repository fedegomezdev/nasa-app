import { useEffect, useState } from 'react';
import { IPhoto } from '../interfaces/photo';
import { getPhotos } from '../services/photos';
import { formatDate } from '../utils/formatDate';

const today = formatDate(new Date());
export interface queryParams {
  rover?: string;
  camera?: string;
  date?: string;
  sol?: string;
  page?: string;
}

export const useMarsPhotos = ({
  rover = 'curiosity',
  camera = 'fhaz',
  date = today,
  sol = null
}: queryParams) => {
  const [data, setData] = useState<IPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPhotos({ rover, camera, date, sol, page })
      .then((data) => {
        setData((prevData) => prevData.concat(data.photos));
        setHasMore(data.photos.length === 25);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [rover, camera, date, sol, page]);

  return { data, loading, error, hasMore, setPage };
};
