import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown Component", () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const placeholder = "Select an option";

  test("renders the dropdown with placeholder text", () => {
    render(
      <Dropdown selected="" setSelected={() => {}} options={options} placeholder={placeholder} />,
    );

    const dropdownButton = screen.getByRole("button");
    expect(dropdownButton).toHaveTextContent(placeholder);
  });

  test("renders the dropdown with selected value", () => {
    const selectedOption = "Option 1";
    render(<Dropdown selected={selectedOption} setSelected={() => {}} options={options} />);

    const dropdownButton = screen.getByRole("button");
    expect(dropdownButton).toHaveTextContent(selectedOption);
  });

  test("opens the dropdown options when clicked", () => {
    render(<Dropdown selected="" setSelected={() => {}} options={options} />);

    const dropdownButton = screen.getByRole("button");
    fireEvent.click(dropdownButton);

    const dropdownOptions = screen.getAllByRole("option");
    expect(dropdownOptions.length).toBe(options.length);
  });

  test("selects an option when clicked", () => {
    const setSelected = jest.fn();
    render(<Dropdown selected="" setSelected={setSelected} options={options} />);

    const dropdownButton = screen.getByRole("button");
    fireEvent.click(dropdownButton);

    const firstOption = screen.getAllByRole("option")[0];
    fireEvent.click(firstOption);

    expect(setSelected).toHaveBeenCalledWith(options[0]);
  });
});
