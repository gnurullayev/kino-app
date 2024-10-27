import { IHeroData } from "../../features/home/components/HomeHeroCarusel/homeHeroCarousel.props";

export interface ICategorySection {
  title: string;
  url: string;
  subtitle: string;
  list: IHeroData[];
}
