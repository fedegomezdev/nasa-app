import React, { FunctionComponent } from 'react';
import { ICamera } from '../../interfaces/camera';
import ModalImage from 'react-modal-image';

type PhotoProps = {
  id: number;
  image: string;
  sol: number;
  earth_date: string;
  camera: ICamera;
};

const Photo: FunctionComponent<PhotoProps> = (props) => {
  return (
    <div style={{ height: '350px', width: '150px', border: 'line' }}>
      <h2>{props.earth_date}</h2>
      <ModalImage small={props.image} large={props.image} alt="Mars Photo" loading="lazy" />
    </div>
  );
};

export default Photo;
