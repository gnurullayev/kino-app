import { StaticImageData } from "next/image";

export interface IHomeSliderCard {
  name: string;
  image: StaticImageData | string;
  slug?: string;
  id: string | null;
}
