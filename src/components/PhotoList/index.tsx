import React, { FunctionComponent } from 'react';
import { IPhoto } from '../../interfaces/photo';
import { isEmpty } from '../../utils/emptyArray';
import Photo from '../Photo';
import SkeletonLoader from '../Skeleton';
import { ErrorText, PhotoListContainer } from './styles';

type PhotolistProps = {
  photos: IPhoto[];
  isLoading: boolean;
  isError: boolean;
};

const PhotoList: FunctionComponent<PhotolistProps> = ({ photos, isError, isLoading }) => {
  if (isError) return <ErrorText>Error</ErrorText>;
  if (isLoading) return <SkeletonLoader />;
  return (
    <PhotoListContainer>
      {!isEmpty(photos) ? (
        photos.map((photo: IPhoto, index) => (
          <Photo
            key={index}
            id={photo.id}
            image={photo.img_src}
            sol={photo.sol}
            earth_date={photo.earth_date}
            camera={photo.camera}
          />
        ))
      ) : (
        <ErrorText>Photos not founded</ErrorText>
      )}
    </PhotoListContainer>
  );
};

export default PhotoList;
