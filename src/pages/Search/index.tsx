import React, { useCallback } from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import PhotoList from '../../components/PhotoList';
import { Title } from '../../components/Searcher/styles';
import { useMarsPhotos } from '../../hooks/useMarsPhotos';
import { useQuery } from '../../hooks/useQuery';
import { ButtonContainer } from './styles';

const SearchPage = () => {
  const query = useQuery();
  const rover = query.get('rover');
  const camera = query.get('camera');
  const sol = query.get('sol');
  const date = query.get('date');
  const { data, loading, error, hasMore, setPage } = useMarsPhotos({
    rover,
    camera,
    sol,
    date
  });

  const handleNextPage = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  return (
    <>
      <Header />
      <Title>SEARCH RESULTS</Title>
      <PhotoList photos={data} isError={error} isLoading={loading} />
      {hasMore && (
        <ButtonContainer>
          <Button handleClick={handleNextPage} content="LOAD MORE" width="50%" />
        </ButtonContainer>
      )}
    </>
  );
};

export default SearchPage;
