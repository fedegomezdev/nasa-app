import React from 'react';
import { useMarsPhotos } from './hooks/useMarsPhotos';
import { Photo } from './interfaces/photo';

const App = () => {
  const { data, isError, isLoading } = useMarsPhotos('fhaz', 1000);
  if (isError) return <p>Error</p>;
  if (isLoading) return <p>Loading...</p>;
  console.log(data);
  return (
    <div className="App">
      {data.photos.map((photo: Photo) => (
        <img src={photo.img_src} alt="Test" />
      ))}
    </div>
  );
};

export default App;
