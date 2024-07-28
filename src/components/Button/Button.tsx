import styled from "styled-components";
import { ButtonProps } from "../../interfaces/interfaces";

const ButtonContainer = styled.button<{ $width: string, $height: string, $bgColor: string, $color: string, $border: string }>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$color};
  border: ${(props) => props.$border};
  border-radius: 0.2rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #007bff;
    color: white;
  }

  &:disabled {
    background-color: #ced4da;
    color: #6c757d;
    cursor: not-allowed;
  }
`;

const Button: React.FC<ButtonProps> = ({ text, width = "100%", height = "auto", bgColor = "#007bff", color = "white", border = "none", ...props }) => {
  return (
    <ButtonContainer $width={width} $height={height} $bgColor={bgColor} $color={color} $border={border} {...props}>
      {text}
    </ButtonContainer>
  )
}

export default Button;