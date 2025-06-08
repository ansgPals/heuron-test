import {
  StyledButtonWrapper,
  StyledCardStepBox,
  StyledErrorMsg,
  StyledLabel,
  StyledOutlineButton,
} from "@/styles/commons";
import { CardStep1Props } from "@/types/interfaces/components";

export default function CardStep1(props: CardStep1Props) {
  const { playerCount, setPlayerCount, handleNext } = props;

  const isPlayerCountValid = playerCount >= 2 && playerCount <= 15;
  return (
    <StyledCardStepBox>
      <div>
        <StyledLabel>플레이어 수(2~15명): </StyledLabel>
        <input
          type="text"
          inputMode="numeric"
          value={playerCount || ""}
          onChange={(e) =>
            setPlayerCount(Number(e.target.value.replace(/[^0-9]/g, "")))
          }
        />
      </div>

      {!isPlayerCountValid && (
        <StyledErrorMsg>{"2~15명의 플레이어만 가능합니다."}</StyledErrorMsg>
      )}
      <StyledButtonWrapper>
        <StyledOutlineButton
          onClick={handleNext}
          disabled={!isPlayerCountValid}
        >
          다음
        </StyledOutlineButton>
      </StyledButtonWrapper>
    </StyledCardStepBox>
  );
}
