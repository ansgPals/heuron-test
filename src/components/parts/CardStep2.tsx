import {
  StyledButtonWrapper,
  StyledCardStepBox,
  StyledErrorMsg,
  StyledLabel,
  StyledOutlineButton,
} from "@/styles/commons";
import { CardStep2Props } from "@/types/interfaces/components";

export default function CardStep2(props: CardStep2Props) {
  const { handleNext, handlePrev, playerNames, handlePlayerNames } = props;

  const isDuplicate =
    new Set(playerNames.map((name) => name.trim())).size !== playerNames.length;
  const isFilled = playerNames.every((n) => n.trim() !== "");
  const isNameValid = !isDuplicate && isFilled;

  const handlePlayerNameChange = (index: number, name: string) => {
    const updated = [...playerNames];
    updated[index] = name;
    handlePlayerNames(updated);
  };

  return (
    <StyledCardStepBox>
      {playerNames.map((name, idx) => (
        <div key={idx}>
          <StyledLabel>Player {idx + 1} 이름: </StyledLabel>
          <input
            type="text"
            value={name}
            onChange={(e) => handlePlayerNameChange(idx, e.target.value)}
          />
        </div>
      ))}
      {!isNameValid &&
        (!isFilled ? (
          <StyledErrorMsg>{"플레이어이름을 모두 입력해주세요"}</StyledErrorMsg>
        ) : (
          <StyledErrorMsg>
            {"동일한 플레이어이름을 사용하실 수 없습니다."}
          </StyledErrorMsg>
        ))}

      <StyledButtonWrapper>
        <StyledOutlineButton onClick={handlePrev}>이전</StyledOutlineButton>
        <StyledOutlineButton onClick={handleNext} disabled={!isNameValid}>
          다음
        </StyledOutlineButton>
      </StyledButtonWrapper>
    </StyledCardStepBox>
  );
}
