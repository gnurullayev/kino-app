import { HomeHero } from "@/src/components";
import { Box, Container } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box className="home" sx={{ p: "0px 0" }}>
        <HomeHero />
      </Box>
    </>
  );
}
