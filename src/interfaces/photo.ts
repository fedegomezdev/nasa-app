import { ICamera } from './camera';
import { IRover } from './rover';

export interface IPhoto {
  id: number;
  earth_date: string;
  img_src: string;
  sol: number;
  camera: ICamera;
  rover: IRover;
}
