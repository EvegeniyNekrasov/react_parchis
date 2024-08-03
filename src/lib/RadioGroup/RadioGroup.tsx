import type React from "react";
import styled from "styled-components";

interface RadioGroupProps {
  children: React.ReactNode;
}

const RadioGroupContainer = styled.div`
    display: flex;
    gap: 8px;
    align-items: flex-start;
    width: 100%;
`;

const RadioGroup: React.FC<RadioGroupProps> = ({ children }) => {
  return <RadioGroupContainer>{children}</RadioGroupContainer>;
};

export default RadioGroup;
