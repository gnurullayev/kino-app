import { StaticImageData } from "next/image";

export interface IHeroData {
  id: number;
  title: string;
  slug: string;
  image: StaticImageData;
  category: string;
  description: string;
}
