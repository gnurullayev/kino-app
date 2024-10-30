import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "@/helpers/theme";
import createEmotionCache from "@/helpers/createEmotionCache";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "../styles/globals.scss";
import "../styles/swiper.scss";
import { TitleContextProvider } from "@/context";
import { Layout } from "@/components";
import { useState } from "react";
//Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
  const [queryClient] = useState(() => new QueryClient());
  return (
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
  );
}
