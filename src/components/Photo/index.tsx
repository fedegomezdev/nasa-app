import React, { FunctionComponent } from 'react';
import { ICamera } from '../../interfaces/camera';

type PhotoProps = {
  id: number;
  image: string;
  sol: number;
  earth_date: string;
  camera: ICamera;
};

const Photo: FunctionComponent<PhotoProps> = (props) => {
  return (
    <div>
      <h2>{props.earth_date}</h2>
      <img src={props.image} alt="Mars Photo" />
    </div>
  );
};

export default Photo;
