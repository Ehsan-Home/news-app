import NewsArticleGrid from "@/components/NewsArticleGrid";
import { Article, NewsArticles } from "@/models/NewsArticles";
import { FormEvent, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";

const Search = () => {
  const [searchResults, setSearchResults] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchQueryInput = document.getElementById(
      "search-query"
    ) as HTMLInputElement;
    const searchQuery = searchQueryInput.value;
    if (searchQuery.length === 0) {
      return;
    }
    setSearchResults(null);
    setLoading(true);
    fetchSearchResult(searchQuery);
  };

  const fetchSearchResult = async (searchQuery: string) => {
    const response = await fetch(`./api/searchQuery?q=${searchQuery}`);
    const searchResults = await response.json();
    setLoading(false);
    setSearchResults(searchResults);
  };

  return (
    <>
      <h3>Search</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Search query</Form.Label>
          <Form.Control
            id="search-query"
            name="search-query"
            placeholder="E.g. Sports, politics,..."
          ></Form.Control>
        </Form.Group>
        <Button type="submit" className="mb-3">
          Submit
        </Button>
        <div className="d-flex flex-column align-items-center">
          {loading && <Spinner />}
          {error && <div>Error happened</div>}
          {searchResults && searchResults.length === 0 && (
            <div>Nothing found</div>
          )}
          {searchResults && searchResults.length > 0 && (
            <NewsArticleGrid articles={searchResults} />
          )}
        </div>
      </Form>
    </>
  );
};

export default Search;
