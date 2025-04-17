import styled from "@emotion/styled";

export const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 0.8rem;
`;

export const StyledCardStepBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  input {
    width: 30rem;
    padding: 0.5rem;
  }
`;

export const StyledErrorMsg = styled.div`
  color: ${(props) => props.theme.colors.error};
  font-size: ${(props) => props.theme.fontSizes.size13};
  margin-top: 0.3rem;
`;

export const StyledOutlineButton = styled.button`
  padding: 0.5rem 1rem;

  border: 0.1rem solid ${(props) => props.theme.colors.grey700};
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.white};
  cursor: pointer;

  :disabled {
    background-color: ${(props) => props.theme.colors.grey400};
    cursor: not-allowed;
  }
`;

export const StyledLabel = styled.label`
  font-size: ${(props) => props.theme.fontSizes.size15};
  margin: 0 0.8rem 0 0;
`;
