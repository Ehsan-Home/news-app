import NewArticleCard from "@/components/NewsArticleCard";
import NewsArticleGrid from "@/components/NewsArticleGrid";
import { NewsArticles, Article } from "@/models/NewsArticles";
import { GetServerSideProps } from "next";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps<
  NewsArticles
> = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=ca&apiKey=${process.env.NEWS_API_KEY}`
  );
  const responseJSON: NewsArticles = await response.json();
  return {
    props: { articles: responseJSON.articles },
  };
};

export default function BreakingNewsPage({ articles }: NewsArticles) {
  return (
    <>
      <Head>
        <title key="title">Breaking News!</title>
      </Head>
      <h1>Breaking News</h1>
      <NewsArticleGrid />
      <NewArticleCard article={articles[0]} />
    </>
  );
}
