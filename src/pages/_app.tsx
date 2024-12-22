import type { AppProps } from "next/app";
import Script from "next/script";
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
import AdBanner from "@/features/app/AdSeanse";
import dynamic from "next/dynamic";

const snowTime = new Date().getMonth();

const SnowEffect = dynamic(() => import("../components/SnowEffect"), {
  ssr: false,
});

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const isSnowMonth = [11, 0, 1].includes(snowTime);

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
        <meta name="google-adsense-account" content="ca-pub-6341050522698824" />
        <meta
          name="google-site-verification"
          content="ojKGPlxNbjVi1Jb7aS0QCh9njRe-yVG-dAjUQ6K2jSw"
        />
      </Head>

      {loading && (
        <div className="spinner">
          <LinearProgress color="success" />
        </div>
      )}
      <Analytics />

      {isSnowMonth && <SnowEffect />}

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

      <AdBanner
        dataAdFormat="auto"
        dataFullWidthResponsive={true}
        dataAdSlot="6135369832"
      />
    </>
  );
}
