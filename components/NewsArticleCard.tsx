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
      : "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80";

  const publishedAtLocal = new Date(publishedAt).toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card className="h-100 shadow-sm">
        <Card.Img variant="top" src={validImageURL} />
        <Card.Header as="h6">{title}</Card.Header>
        <Card.Body>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{publishedAtLocal}</Card.Footer>
      </Card>
    </a>
  );
};

export default NewArticleCard;
