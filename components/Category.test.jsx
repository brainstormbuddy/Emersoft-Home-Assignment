import { expect, jest, describe, it, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Category from "./Category";

describe("Category component", () => {
  it("renders the category name", () => {
    const categoryName = "Test";
    render(<Category href="/test" name={categoryName} />);
    const categoryElement = screen.getByText(categoryName);
    expect(categoryElement).toBeInTheDocument();
  });

  it("calls the onClick function when clicked", () => {
    const onClickMock = jest.fn();
    render(<Category href="/test" name="Test" onClick={onClickMock} />);
    const categoryElement = screen.getByText("Test");
    categoryElement.click();
    expect(onClickMock).toHaveBeenCalled();
  });
});
