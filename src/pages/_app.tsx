import "@/styles/reset.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import type { FC } from "react";


const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="description" content="14th Thanks Party 最終問題" />
        <meta property="or:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="14th Thanks Party 最終問題" />
        <meta property="og:description" content="14th Thanks Party 最終問題" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#0066B2"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#0066B2"
        />
        <meta property="og:site_name" content="14th Thanks Party 最終問題" />
        <meta property="og:image" content="" />
        <title>14th Thanks Party 最終問題</title>
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;