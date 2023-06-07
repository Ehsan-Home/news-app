import GeneralError from "@/components/GeneralError";
import NewArticleCard from "@/components/NewsArticleCard";
import NewsArticleGrid from "@/components/NewsArticleGrid";
import { NewsArticles, Article } from "@/models/NewsArticles";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Alert } from "react-bootstrap";

export const getServerSideProps: GetServerSideProps<
  NewsArticles
> = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
  );
  const responseJSON: NewsArticles = await response.json();
  return {
    props: { articles: responseJSON.articles || null },
  };
};

export default function BreakingNewsPage({ articles }: NewsArticles) {
  if (!articles) {
    return <GeneralError />;
  }
  return (
    <>
      <Head>
        <title key="title">Breaking News!</title>
      </Head>
      <h1>Breaking News</h1>
      <Alert>
        This page uses <strong>getServerSideProps</strong> to fetch data
        server-side on every request. This allows search engines to crawl the
        page content and <strong>improves SEO</strong>.
      </Alert>
      <NewsArticleGrid articles={articles} />
    </>
  );
}
