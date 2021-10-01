import React from 'react';
import Header from '../../components/Header';
import PhotoList from '../../components/PhotoList';
import Searcher from '../../components/Searcher';
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
      <h3>Searcher PAGE</h3>
      <Header />
      <Searcher />
      <PhotoList photos={data} isError={error} isLoading={loading} />
    </>
  );
};

export default SearchPage;
