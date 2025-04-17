import { StyledOutlineButton } from "@/styles/commons";
import { CardStep4Props } from "@/types/interfaces/components";
import styled from "@emotion/styled";

export default function CardStep4(props: CardStep4Props) {
  const { winner, players, handleRestart } = props;
  return (
    <ResultBox>
      <div>
        <h2>승자</h2>
        <p>👤 {winner.name}</p>
        <p>점수: {winner.score}</p>
        <p>보유카드: {winner.cards.join(", ")}</p>
      </div>
      <ul>
        {players
          .filter((p) => p.name !== winner.name)
          .map((p, i) => (
            <li key={p.name + p.score}>
              <p>
                {i + 2}등 👤 {p.name} 님
              </p>
              <p>점수: {p.score}</p>
              <p>보유카드: {p.cards.join(", ")}</p>
            </li>
          ))}
      </ul>
      <StyledOutlineButton onClick={handleRestart}>
        다시 시작
      </StyledOutlineButton>
    </ResultBox>
  );
}

const ResultBox = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.primary400};
  }

  p {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  button {
    margin-top: 1.5rem;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    border: 0.3rem solid ${(props) => props.theme.colors.primary400};
    width: 50rem;
  }
  > ul {
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 2rem;

    > li {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 0.1rem solid ${(props) => props.theme.colors.line100};
      min-width: 30rem;
      padding: 2rem;
    }
  }
`;
