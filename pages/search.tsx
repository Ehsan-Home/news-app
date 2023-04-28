import { FormEvent } from "react";
import { Button, Form } from "react-bootstrap";

const Search = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchQueryInput = document.getElementById(
      "search-query"
    ) as HTMLInputElement;
    const searchQuery = searchQueryInput.value;
    console.log(searchQuery);
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
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

export default Search;
