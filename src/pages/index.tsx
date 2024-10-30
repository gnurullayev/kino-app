import { Box } from "@mui/material";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { API } from "../services/api";
import { IHome } from "@/interfaces/home";
import Home from "@/features/home";

export default function HomePage({
  home,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Box className="home" sx={{ p: "0px 0" }}>
      <Home data={home} />
    </Box>
  );
}

export const getServerSideProps = (async () => {
  // Fetch data from external API
  const home: IHome = await API.getHome();
  
  // Pass data to the page via props
  return { props: { home } };
}) satisfies GetServerSideProps<{ home: IHome }>;
