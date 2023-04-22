import { NewsArticles } from "@/models/NewsArticles";
import { Col, Row } from "react-bootstrap";
import NewArticleCard from "./NewsArticleCard";

const NewsArticleGrid = ({ articles }: NewsArticles) => {
  return (
    <Row className="g-4">
      {articles.map((article) => (
        <Col sm={12} md={6} lg={4} key={article.url}>
          <NewArticleCard article={article} />
        </Col>
      ))}
    </Row>
  );
};

export default NewsArticleGrid;
