import { StyledLabel } from "@/styles/commons";
import { ToggleButtonProps } from "@/types/interfaces/components";
import styled from "@emotion/styled";

export default function ToggleButton(props: ToggleButtonProps) {
  const { label, value, handleChange, isDisabled } = props;
  return (
    <StyledToggleButton>
      <StyledLabel>{label ?? ""}</StyledLabel>
      <input
        checked={value}
        disabled={isDisabled}
        onChange={handleChange}
        role="switch"
        type="checkbox"
      />
    </StyledToggleButton>
  );
}

const StyledToggleButton = styled.div`
  input[type="checkbox"] {
    appearance: none;
    position: relative;
    border: 0.2rem solid gray;
    border-radius: 1.25em;
    width: 3.7rem;
    height: 2.2rem;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      width: 1.4em;
      height: 1.4em;
      border-radius: 50%;
      transform: scale(0.8);
      background-color: ${(props) => props.theme.colors.grey500};
      transition: left 250ms linear;
    }

    &:checked::before {
      background-color: ${(props) => props.theme.colors.white};
      left: 1em;
    }

    &:checked {
      background-color: ${(props) => props.theme.colors.primary400};
      border-color: ${(props) => props.theme.colors.primary400};
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
`;
