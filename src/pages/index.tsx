import { Box } from "@mui/material";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { API } from "../services/api";
import { IHome } from "@/interfaces/home";
import Home from "@/features/home";
import { MetaData } from "@/components";

export default function HomePage({
  home,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!home) return null;

  return (
    <Box className="home" sx={{ p: "0px 0" }}>
      <MetaData />
      <Home data={home} />
    </Box>
  );
}

export const getServerSideProps = (async () => {
  try {
    // Fetch data from external API
    const home: IHome = await API.getHome();

    // Pass data to the page via props
    return { props: { home } };
  } catch (error) {
    console.error("Failed to fetch home data:", error);

    // Return an empty object or handle the error as needed
    return { props: { home: null } };
  }
}) satisfies GetServerSideProps<{ home: IHome | null }>;
