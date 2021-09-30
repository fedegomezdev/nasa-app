import React from 'react';
import PhotoList from '../../components/PhotoList';
import { useMarsPhotos } from '../../hooks/useMarsPhotos';

const SearchPage = ({ params }) => {
  const { rover, camera, sol, date } = params;
  console.log(params);
  const { data, loading, error } = useMarsPhotos({ rover, camera, sol, date });
  return (
    <>
      <h3>Searcher PAGE</h3>
      <PhotoList photos={data} isError={error} isLoading={loading} />
    </>
  );
};

export default SearchPage;
