import React from 'react';
import Head from '../../components/Head';
import PhotoList from '../../components/PhotoList';
import Searcher from '../../components/Searcher';
import { useMarsPhotos } from '../../hooks/useMarsPhotos';

const HomePage = () => {
  const { data, loading, error } = useMarsPhotos({});
  return (
    <>
      <Head title="Mars Photos" />
      <Searcher />
      <div>
        <PhotoList photos={data} isError={error} isLoading={loading} />
      </div>
    </>
  );
};

export default HomePage;
