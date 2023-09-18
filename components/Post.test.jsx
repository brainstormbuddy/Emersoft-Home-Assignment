import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter, useSearchParams } from "next/navigation";
import Post from "./Post";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe("Post Component", () => {
  const mockRouter = {
    push: jest.fn(),
  };

  const mockSearchParams = {
    get: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks(); // Clear mock function calls between tests
    useRouter.mockReturnValue(mockRouter);
    useSearchParams.mockReturnValue(mockSearchParams);
  });

  it("renders the Post component with data", () => {
    const categoriesData = [
      { id: 1, name: "Category 1" },
      { id: 2, name: "Category 2" },
    ];

    const postProps = {
      title: "Test Post",
      imageUrl: "https://fakeimg.pl/600x450?text=Test+Post",
      slug: "test-post",
      excerpt: "This is a test post excerpt.",
      categoriesData,
    };

    render(<Post {...postProps} />);

    // Verify that the component renders with the correct data
    expect(screen.getByText(postProps.title)).toBeInTheDocument();
    expect(screen.getByAltText(postProps.title)).toBeInTheDocument();
    expect(screen.getByText(postProps.excerpt)).toBeInTheDocument();

    // Verify that category links are rendered
    categoriesData.forEach((category) => {
      expect(screen.getByText(category.name)).toBeInTheDocument();
    });
  });

  it("navigates to the correct URL when the article is clicked", () => {
    const postProps = {
      title: "Test Post",
      imageUrl: "https://fakeimg.pl/600x450?text=Test+Post",
      slug: "test-post",
      excerpt: "This is a test post excerpt.",
      categoriesData: [],
    };

    render(<Post {...postProps} />);

    // Simulate a click event on the article
    fireEvent.click(screen.getByText(postProps.title));

    // Verify that router.push is called with the correct URL
    expect(mockRouter.push).toHaveBeenCalledWith(`/${postProps.slug}`);
  });

  it("navigates to the correct category search URL when a category link is clicked", () => {
    const categoriesData = [
      { id: 1, name: "Category 1", slug: "category1" },
      { id: 2, name: "Category 2", slug: "category2" },
    ];

    const postProps = {
      id: 1,
      title: "Test Post",
      imageUrl: "https://fakeimg.pl/600x450?text=Test+Post",
      slug: "test-post",
      excerpt: "This is a test post excerpt.",
      categories: [1, 2],
      categoriesData,
    };

    render(<Post {...postProps} />);

    // Simulate a click event on the first category link
    fireEvent.click(screen.getByText(categoriesData[0].name));

    // Verify that router.push is called with the expected category search URL
    expect(mockRouter.push).toHaveBeenCalledWith(`/?category=${categoriesData[0].slug}`);

    // Simulate a click event on the second category link
    fireEvent.click(screen.getByText(categoriesData[1].name));

    // Verify that router.push is called with the expected category search URL
    expect(mockRouter.push).toHaveBeenCalledWith(`/?category=${categoriesData[1].slug}`);
  });
});
