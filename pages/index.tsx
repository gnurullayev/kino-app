import { CategorySection, HomeHero } from "@/src/components";
import { heroData } from "@/src/components/HomeHeroCarusel/data";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box className="home" sx={{ p: "0px 0" }}>
      <HomeHero />
      <CategorySection
        title="Seriallar"
        subtitle="Eng Sara seriallar"
        list={heroData}
      />

      <CategorySection
        title="Hind kinolar"
        subtitle="Eng Sara hind kinolar"
        list={heroData}
      />
    </Box>
  );
}
