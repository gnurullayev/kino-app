import { StaticImageData } from "next/image";

export interface IHomeSliderCard {
  name: string;
  image: StaticImageData;
  slug: string;
  id: number;
}
