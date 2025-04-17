import { StyledLabel } from "@/styles/commons";
import { ColorPickerProps } from "@/types/interfaces/components";
import styled from "@emotion/styled";

export default function ColorPicker(props: ColorPickerProps) {
  const { label, value, handleChange } = props;
  return (
    <StyledColorInput>
      <StyledLabel>{label ?? ""}</StyledLabel>
      <input
        type="color"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </StyledColorInput>
  );
}

const StyledColorInput = styled.div`
  input[type="color"] {
    cursor: pointer;
    width: 3.7rem;
    height: 2.2rem;
    border: 0.1rem solid gray;
    border-radius: 0.8rem;
    padding: 0;
    background: none;
    appearance: none;
    -webkit-appearance: none;

    &::-webkit-color-swatch-wrapper {
      padding: 0;
    }

    &::-webkit-color-swatch {
      border: none;
    }
  }
`;
