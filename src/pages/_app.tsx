import type { AppProps } from "next/app";
import { LinearProgress, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "@/helpers/theme";
import createEmotionCache from "@/helpers/createEmotionCache";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TitleContextProvider } from "@/context";
import { Layout } from "@/components";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import "../styles/globals.scss";
import "../styles/swiper.scss";
import { Analytics } from "@/features/app";
import Head from "next/head";
import AdSense from "@/features/app/AdSense";
import AdBanner from "@/features/app/AdBanner";

//Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export const config = { amp: true };

export default function App(props: MyAppProps) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      <Head>
        <AdSense pId="ca-pub-6341050522698824" />
      </Head>
      {loading && (
        <div className="spinner">
          <LinearProgress color="success" />
        </div>
      )}
      <Analytics />
      <TitleContextProvider>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <CssBaseline />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </QueryClientProvider>
          </ThemeProvider>
        </CacheProvider>
      </TitleContextProvider>

      {/* <AdBanner
        dataAdFormat="auto"
        dataFullWidthResponsive={true}
        dataAdSlot="6135369832"
      /> */}
    </>
  );
}
