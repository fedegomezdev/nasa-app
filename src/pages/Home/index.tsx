import React from 'react';
import Head from '../../components/Head';
import Header from '../../components/Header';
import PhotoList from '../../components/PhotoList';
import { useMarsPhotos } from '../../hooks/useMarsPhotos';
import { Title } from '../Search/styles';

const HomePage = () => {
  const { data, loading, error } = useMarsPhotos({});
  return (
    <>
      <Head title="Mars Photos" />
      <Header />
      <Title>Today Photos</Title>
      <PhotoList photos={data} isError={error} isLoading={loading} />
    </>
  );
};

export default HomePage;
