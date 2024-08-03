import styled from "styled-components";
import type { ContainerProps } from "@interfaces/interfaces";

const ContainerDiv = styled.div<{
  $width: string;
  $height: string;
  $orientation: string;
  $bgColor: string;
  $padding: string;
  $gap: string;
}>`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    background-color: ${(props) => props.$bgColor};
    margin: 0 auto;
    display: flex;
    padding: ${(props) => props.$padding};
    flex-direction: ${(props) => props.$orientation};
    gap: ${(props) => props.$gap};
`;

const Container: React.FC<ContainerProps> = ({
  children,
  width = "100%",
  height = "100%",
  orientation = "row",
  bgColor = "#f8f9fa",
  padding = "0",
  gap = "1rem",
  ...props
}) => {
  return (
    <ContainerDiv
      $width={width}
      $height={height}
      $orientation={orientation}
      $bgColor={bgColor}
      $padding={padding}
      $gap={gap}
      {...props}
    >
      {children}
    </ContainerDiv>
  );
};

export default Container;
