import React from 'react';
import Head from '../../components/Head';
import Header from '../../components/Header';
import LastSearch from '../../components/LastSearch';
import PhotoList from '../../components/PhotoList';
import Searcher from '../../components/Searcher';
import { useMarsPhotos } from '../../hooks/useMarsPhotos';

const HomePage = () => {
  const { data, loading, error } = useMarsPhotos({});
  return (
    <>
      <Head title="Mars Photos" />
      <Header />
      <h4>Today Photos</h4>
      <PhotoList photos={data} isError={error} isLoading={loading} />
      <LastSearch />
    </>
  );
};

export default HomePage;
