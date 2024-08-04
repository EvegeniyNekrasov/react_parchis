import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";

import Button from "./Button";

describe("Button", () => {
  it("Renders the text", () => {
    render(<Button text="Test" />);
    const buttonElement = screen.getByText("Test");
    expect(buttonElement).toBeInTheDocument();
  });

  it("Applies the correct width, height, background color, and text color", () => {
    render(
      <Button
        text="Test"
        width="50%"
        height="50%"
        bgColor="red"
        color="white"
      />,
    );
    const buttonElement = screen.getByText("Test");
    expect(buttonElement).toHaveStyle("width: 50%");
    expect(buttonElement).toHaveStyle("height: 50%");
    expect(buttonElement).toHaveStyle("background-color:  rgb(0, 123, 255)");
    expect(buttonElement).toHaveStyle("color:  rgb(255, 255, 255)");
  });

  it("Applies the correct border", () => {
    render(<Button text="Test" border="1px solid black" />);
    const buttonElement = screen.getByText("Test");
    expect(buttonElement).toHaveStyle("border: 1px solid black");
  });

  it("Calls the onClick function when clicked", () => {
    const onClick = vi.fn();
    render(<Button text="Test" onClick={onClick} />);
    const buttonElement = screen.getByText("Test");
    buttonElement.click();
    expect(onClick).toHaveBeenCalled();
  });

  it("Disables the button when disabled is true", () => {
    render(<Button text="Test" disabled />);
    const buttonElement = screen.getByText("Test");
    expect(buttonElement).toBeDisabled();
  });
});
