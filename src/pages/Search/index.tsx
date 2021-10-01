import React from 'react';
import Header from '../../components/Header';
import PhotoList from '../../components/PhotoList';
import { useMarsPhotos } from '../../hooks/useMarsPhotos';
import { useQuery } from '../../hooks/useQuery';

const SearchPage = () => {
  const query = useQuery();
  const rover = query.get('rover');
  const camera = query.get('camera');
  const sol = query.get('sol');
  const date = query.get('date');
  const { data, loading, error } = useMarsPhotos({ rover, camera, sol, date });
  return (
    <>
      <Header />
      <h4>Search Results</h4>
      <PhotoList photos={data} isError={error} isLoading={loading} />
    </>
  );
};

export default SearchPage;
