import type React from "react";
import styled from "styled-components";
import type { RadioProps } from "@interfaces/interfaces";

const Label = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
`;

const Input = styled.input`
    display: none;
`;

const CustomRadio = styled.span<{ color: string; disabled: boolean }>`
    width: 20px;
    height: 20px;
    border: 2px solid ${(props) => (props.disabled ? "#c0c0c0" : props.color)};
    border-radius: 50%;
    margin-right: 8px;
    position: relative;

    ${Input}:checked + &::after {
        content: '';
        width: 12px;
        height: 12px;
        background-color: ${(props) => (props.disabled ? "#c0c0c0" : props.color)};
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1);
        transition: transform 0.2s ease;
    }

    &::after {
        content: '';
        width: 12px;
        height: 12px;
        background-color: ${(props) => (props.disabled ? "#c0c0c0" : props.color)};
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.2s ease;
    }
`;

const Radio: React.FC<RadioProps> = ({
  name,
  value,
  disabled,
  onChange,
  text,
  color = "#030303",
}) => {
  return (
    <Label>
      <Input
        type="radio"
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
      <CustomRadio color={color} disabled={disabled} />
      <span>{text}</span>
    </Label>
  );
};

export default Radio;
