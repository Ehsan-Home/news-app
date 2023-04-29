import NewsArticleGrid from "@/components/NewsArticleGrid";
import { NewsArticles } from "@/models/NewsArticles";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

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
    props: { articles: categoryNews.articles },
    revalidate: 5 * 60,
  };
};

const CategoryPage = ({ articles }: NewsArticles) => {
  const router = useRouter();
  const category = router.query.category?.toString();
  return (
    <>
      <h3>{category} :</h3>
      <NewsArticleGrid articles={articles} />
    </>
  );
};

export default CategoryPage;
