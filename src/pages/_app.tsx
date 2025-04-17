import MainLayout from "@/layouts/MainLayout";
import { globalStyle } from "@/styles/globalStyle";
import { theme } from "@/styles/theme";
import { Global, ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle(theme)} />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default MyApp;
