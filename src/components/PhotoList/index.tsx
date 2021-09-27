import React, { FunctionComponent } from 'react';
import { IPhoto } from '../../interfaces/photo';
import Photo from '../Photo';

const PhotoList: FunctionComponent<IPhoto[]> = (props) => {
  return (
    <div>
      {props.map((photo: IPhoto) => (
        <Photo
          id={photo.id}
          image={photo.img_src}
          sol={photo.sol}
          earth_date={photo.earth_date}
          camera={photo.camera}
        />
      ))}
    </div>
  );
};

export default PhotoList;
