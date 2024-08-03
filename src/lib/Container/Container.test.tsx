import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import Container from "./Container";

describe("Container", () => {
  it("Renders the children", () => {
    render(
      <Container width="100%" height="100%">
        <div>Test</div>
      </Container>,
    );

    const testElement = screen.getByText("Test");
    expect(testElement).toBeInTheDocument();
  });

  it("Applies the correct width and height", () => {
    render(
      <Container data-testid="container" width="50%" height="50%">
        <div>Test</div>
      </Container>,
    );

    const containerElement = screen.getByTestId("container");
    expect(containerElement).toHaveStyle("width: 50%");
    expect(containerElement).toHaveStyle("height: 50%");
  });
});
