import CardStep1 from "@/components/parts/CardStep1";
import CardStep2 from "@/components/parts/CardStep2";
import CardStep3 from "@/components/parts/CardStep3";
import { CARD_COUNT, PLAYER_COUNT, PLAYER_NAMES } from "@/constants";
import { useObjectState } from "@/hooks";
import { StyledOutlineButton } from "@/styles/commons";
import { GameState, Player } from "@/types/interfaces/pages";
import styled from "@emotion/styled";
import { useState } from "react";

export default function Assignment2() {
  const [step, setStep] = useState(1);
  const [winner, setWinner] = useState<Player | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);

  const [gameState, handleGameState, resetGameState] =
    useObjectState<GameState>({
      [PLAYER_COUNT]: 2,
      [PLAYER_NAMES]: [],
      [CARD_COUNT]: 1,
    });

  const generateCards = (count: number) => {
    const cards = [];
    for (let i = 0; i < count; i++) {
      cards.push(Math.floor(Math.random() * 20) + 1);
    }
    return cards;
  };

  const startGame = () => {
    const generatedPlayers = gameState.playerNames.map((name) => {
      const cards = generateCards(gameState.cardCount);
      const score = cards.reduce((sum, cur) => sum + cur, 0);
      return { name, cards, score };
    });

    const sortedPlayers = generatedPlayers
      .map((p, i) => ({ ...p, index: i }))
      .sort((a, b) => {
        if (b.score === a.score) return b.index - a.index;
        return b.score - a.score;
      });

    const winner = sortedPlayers[0];

    setWinner(winner);
    setPlayers(sortedPlayers);
    setStep(4);
  };

  const goToStep = (next: number) => {
    if (step === 1 && next > step) {
      handleGameState(PLAYER_NAMES, Array(gameState[PLAYER_COUNT]).fill(""));
    }
    if (step === 2 && next > step) {
      handleGameState(CARD_COUNT, 1);
    }
    if (step === 3 && next > step) {
      setWinner(null);
    }
    setStep(next);
  };

  return (
    <StyledAssignment2>
      <h1>카드 게임</h1>
      {step === 1 && (
        <CardStep1
          playerCount={gameState[PLAYER_COUNT]}
          setPlayerCount={(value: number) =>
            handleGameState(PLAYER_COUNT, value)
          }
          handleStep={goToStep}
        />
      )}

      {step === 2 && (
        <CardStep2
          handleStep={goToStep}
          handlePlayerNames={(value) => handleGameState(PLAYER_NAMES, value)}
          playerNames={gameState[PLAYER_NAMES]}
        />
      )}

      {step === 3 && (
        <CardStep3
          handleStep={goToStep}
          cardCount={gameState[CARD_COUNT]}
          startGame={startGame}
          handleCardCount={(value) => handleGameState(CARD_COUNT, value)}
        />
      )}

      {step === 4 && winner && (
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
          <StyledOutlineButton
            onClick={() => {
              goToStep(1);
              resetGameState();
            }}
          >
            다시 시작
          </StyledOutlineButton>
        </ResultBox>
      )}
    </StyledAssignment2>
  );
}

const StyledAssignment2 = styled.div`
  padding: 3rem;
`;

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
