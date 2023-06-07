import GeneralError from "@/components/GeneralError";
import NewsArticleGrid from "@/components/NewsArticleGrid";
import { NewsArticles } from "@/models/NewsArticles";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Alert } from "react-bootstrap";

export const getStaticPaths: GetStaticPaths = async () => {
  const categorySlugs = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const paths = categorySlugs.map((slug) => ({ params: { category: slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<NewsArticles> = async ({
  params,
}) => {
  const category = params?.category?.toString();

  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`
  );
  const categoryNews: NewsArticles = await response.json();
  return {
    props: { articles: categoryNews.articles || null },
    revalidate: 5 * 60,
  };
};

const CategoryPage = ({ articles }: NewsArticles) => {
  const router = useRouter();
  const category = router.query.category
    ?.toString()
    .charAt(0)
    .toUpperCase()
    .concat(router.query.category?.toString().slice(1));
  if (!articles) {
    return <GeneralError />;
  }
  return (
    <>
      <h3>{category}</h3>
      <Alert>
        This is page uses <strong>getStaticProps</strong> for very high page
        loading speed and <strong>incremental static regeneration</strong> to
        show data not older than <strong>5 minutes</strong>.
      </Alert>
      <NewsArticleGrid articles={articles} />
    </>
  );
};

export default CategoryPage;
