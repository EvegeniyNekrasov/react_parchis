import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Dot from "./Dot";

describe("Dot component", () => {
  it("renders correctly with given props", () => {
    const { getByRole } = render(<Dot top="50%" left="50%" />);
    const dotElement = getByRole("dot");

    expect(dotElement).toBeInTheDocument();
    expect(dotElement).toHaveStyle(`
      top: 50%;
      left: 50%;
      width: 20%;
      height: 20%;
      border-radius: 50%;
      background-color: rgb(0, 0, 0);
      position: absolute;
      transform: translate(-50%, -50%);
    `);
  });
});
