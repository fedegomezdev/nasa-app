import React, { FunctionComponent } from 'react';
import { IPhoto } from '../../interfaces/photo';
import { isEmpty } from '../../utils/emptyArray';
import Photo from '../Photo';
import SkeletonLoader from '../Skeleton';
import { PhotoListContainer } from './styles';

type PhotolistProps = {
  photos: IPhoto[];
  isLoading: boolean;
  isError: boolean;
};

const PhotoList: FunctionComponent<PhotolistProps> = ({ photos, isError, isLoading }) => {
  if (isError) return <p>Error</p>;
  if (isLoading) return <SkeletonLoader />;
  return (
    <PhotoListContainer>
      {!isEmpty(photos) ? (
        photos.map((photo: IPhoto) => (
          <Photo
            key={photo.id}
            id={photo.id}
            image={photo.img_src}
            sol={photo.sol}
            earth_date={photo.earth_date}
            camera={photo.camera}
          />
        ))
      ) : (
        <p>No hay fotos</p>
      )}
    </PhotoListContainer>
  );
};

export default PhotoList;
