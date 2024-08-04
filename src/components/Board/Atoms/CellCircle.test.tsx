import "@testing-library/jest-dom";
import { PlayerColor, colors } from "@/data/data";
import { hexToRgba } from "@/utils/test-utils";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import CellCircle from "./CellCircle";

describe("CellCircle", () => {
  it("Renders the correct color", () => {
    render(<CellCircle color={PlayerColor.RED} />);
    const cellCircleElement = screen.getByTestId("cell");
    const expectedColor = hexToRgba(colors[PlayerColor.RED], 1);
    expect(cellCircleElement).toHaveStyle(`background-color: ${expectedColor}`);
  });
});
