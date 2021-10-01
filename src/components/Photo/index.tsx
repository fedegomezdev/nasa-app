import React, { FunctionComponent } from 'react';
import { ICamera } from '../../interfaces/camera';
import ModalImage from 'react-modal-image';
import { PhotoContainer } from './styles';

type PhotoProps = {
  id: number;
  image: string;
  sol: number;
  earth_date: string;
  camera: ICamera;
};

const Photo: FunctionComponent<PhotoProps> = (props) => {
  return (
    <PhotoContainer>
      <ModalImage
        small={props.image}
        large={props.image}
        alt="Mars Photo"
        style={{ aspectRatio: '16/9' }}
      />
    </PhotoContainer>
  );
};

export default Photo;
