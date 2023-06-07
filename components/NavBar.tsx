import Link from "next/link";
import React, { Component } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const NavBar = () => {
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} href="/">
          InfoSphere
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/breakingnews">
              Breaking News
            </Nav.Link>
            <Nav.Link as={Link} href="/search">
              Search
            </Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {categories.map((category) => {
                return (
                  <React.Fragment key={category}>
                    <NavDropdown.Item
                      as={Link}
                      href={`/categories/${category}`}
                    >
                      {category}
                    </NavDropdown.Item>
                  </React.Fragment>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
