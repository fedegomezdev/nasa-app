import React from 'react';
import Header from '../../components/Header';
import PhotoList from '../../components/PhotoList';
import { Title } from '../../components/Searcher/styles';
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
      <Title>SEARCH RESULTS</Title>
      <PhotoList photos={data} isError={error} isLoading={loading} />
    </>
  );
};

export default SearchPage;
