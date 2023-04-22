import { Article } from "@/models/NewsArticles";
import { Card } from "react-bootstrap";

interface NewsArticleCardProps {
  article: Article;
}

const NewArticleCard = ({
  article: { url, urlToImage, title, description, publishedAt },
}: NewsArticleCardProps) => {
  const validImageURL =
    urlToImage?.startsWith("http") || urlToImage?.startsWith("https")
      ? urlToImage
      : undefined;

  return (
    <a href={url}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={validImageURL} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Footer>{publishedAt}</Card.Footer>
        </Card.Body>
      </Card>
    </a>
  );
};

export default NewArticleCard;
