// All GLOBAL setup is done here
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import styles from "@/styles/App.module.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Container } from "react-bootstrap";
import NavBar from "@/components/NavBar";
import NextNProgress from "nextjs-progressbar";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Head>
        <title key="title">InfoSphere</title>
        <meta name="description" content="News app by Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextNProgress />
      <NavBar />
      <Container className={styles.pageContainer}>
        <Component {...pageProps} />
      </Container>
    </div>
  );
}
