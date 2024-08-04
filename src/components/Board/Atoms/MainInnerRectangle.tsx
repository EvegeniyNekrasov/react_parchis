import type { MainInnerRectangleProps } from "@/interfaces/interfaces";
import type React from "react";
import styled from "styled-components";

const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: calc(var(--board-dimention) / 3);
  height: calc(var(--board-dimention) / 3);
`;

const MainInnerRectangle: React.FC<MainInnerRectangleProps> = ({
  children,
}) => {
  return <Cell>{children}</Cell>;
};

export default MainInnerRectangle;
