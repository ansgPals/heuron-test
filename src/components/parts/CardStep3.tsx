import {
  StyledButtonWrapper,
  StyledCardStepBox,
  StyledErrorMsg,
  StyledLabel,
  StyledOutlineButton,
} from "@/styles/commons";
import { CardStep3Props } from "@/types/interfaces/components";

export default function CardStep3(props: CardStep3Props) {
  const { handleNext, handlePrev, cardCount, handleCardCount } = props;

  const isCardCountValid = cardCount >= 1 && cardCount <= 10;

  return (
    <StyledCardStepBox>
      <div>
        <StyledLabel>카드 개수 (1~10장): </StyledLabel>
        <input
          type="text"
          inputMode="numeric"
          value={cardCount || ""}
          onChange={(e) =>
            handleCardCount(Number(e.target.value.replace(/[^0-9]/g, "")))
          }
        />
      </div>

      {!isCardCountValid && (
        <StyledErrorMsg>{"1~10장 사이로 입력해주세요."}</StyledErrorMsg>
      )}
      <StyledButtonWrapper>
        <StyledOutlineButton onClick={handlePrev}>이전</StyledOutlineButton>
        <StyledOutlineButton onClick={handleNext} disabled={!isCardCountValid}>
          시작
        </StyledOutlineButton>
      </StyledButtonWrapper>
    </StyledCardStepBox>
  );
}
