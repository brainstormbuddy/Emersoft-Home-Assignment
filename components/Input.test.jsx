import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input component", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText } = render(
      <Input onChange={() => {}} placeholder="Test placeholder" />,
    );
    expect(getByPlaceholderText("Test placeholder")).toBeInTheDocument();
  });

  it("calls onChange with the input value", () => {
    const mockOnChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input onChange={mockOnChange} placeholder="Test placeholder" />,
    );
    const input = getByPlaceholderText("Test placeholder");
    fireEvent.change(input, { target: { value: "Test value" } });
    expect(mockOnChange).toHaveBeenCalledWith("Test value");
  });

  it("renders with a leading element", () => {
    const leadingElement = <div>Leading</div>;
    const { getByText } = render(<Input onChange={() => {}} leading={leadingElement} />);
    expect(getByText("Leading")).toBeInTheDocument();
  });
});
