import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders the Header component", () => {
  render(<Header />);

  // You can make assertions based on the content or attributes of the rendered component.

  // Example assertion: Check if the "Posts" link is present.
  const postsLink = screen.getByText("Posts");
  expect(postsLink).toBeInTheDocument();
});
