import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import ButtonForm from "@/components/form/button.form";

describe("ButtonForm component", () => {
  it("renders a button", () => {
    render(<ButtonForm>Click</ButtonForm>);

    const button = screen.getByRole("button", {
      name: /Click/i,
    });

    expect(button).toBeInTheDocument();
  });
  it("calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    render(<ButtonForm onClick={handleClick}>Click</ButtonForm>);

    const button = screen.getByRole("button", {
      name: /Click/i,
    });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});
