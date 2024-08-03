import type React from "react";
import styled from "styled-components";
import type { PlayableRectangleProps } from "@/interfaces/interfaces";

const getGridTemplate = (index: number) => {
  let gridTemplateColumn = "";
  let gridTemplateRow = "";
  switch (index) {
    // vertical rectangles
    case 1:
    case 7:
      gridTemplateColumn = "repeat(3, 1fr)";
      gridTemplateRow = "repeat(7, 1fr)";
      break;
    // horizontal rectangles
    case 3:
    case 5:
      gridTemplateColumn = "repeat(7, 1fr)";
      gridTemplateRow = "repeat(3, 1fr)";
      break;
    default:
      gridTemplateColumn = "repeat(1, 1fr)";
      gridTemplateRow = "repeat(1, 1fr)";
      break;
  }

  return { gridTemplateColumn, gridTemplateRow };
};

type ReactangleProps = {
  $column: string;
  $row: string;
};

const Rectangle = styled.div<ReactangleProps>`
    width: calc(var(--board-dimention) / 3);
    height: calc(var(--board-dimention) / 3);
    display: grid;
    grid-template-columns: ${({ $column }) => $column};
    grid-template-rows: ${({ $row }) => $row};
`;

const PlayableRectangle: React.FC<PlayableRectangleProps> = ({
  children,
  index,
}) => {
  const { gridTemplateColumn, gridTemplateRow } = getGridTemplate(index);
  return (
    <Rectangle $column={gridTemplateColumn} $row={gridTemplateRow}>
      {children}
    </Rectangle>
  );
};

export default PlayableRectangle;
