import CardStep1 from "@/components/parts/CardStep1";
import CardStep2 from "@/components/parts/CardStep2";
import CardStep3 from "@/components/parts/CardStep3";
import CardStep4 from "@/components/parts/CardStep4";
import { CARD_COUNT, PLAYER_COUNT, PLAYER_NAMES } from "@/constants";
import { useObjectState } from "@/hooks";
import { StyledAssignmentWrapper } from "@/styles/commons";
import { GameStateType, PlayerType } from "@/types/types/pages";

import { useState } from "react";

export default function Assignment2() {
  const [step, setStep] = useState(1);
  const [winner, setWinner] = useState<PlayerType | null>(null);
  const [players, setPlayers] = useState<PlayerType[]>([]);

  const [gameState, handleGameState, resetGameState] =
    useObjectState<GameStateType>({
      [PLAYER_COUNT]: 2,
      [PLAYER_NAMES]: [],
      [CARD_COUNT]: 1,
    });

  const goToStep = (next: number) => {
    if (step === 1 && next > step) {
      const playerNameList = Array(gameState[PLAYER_COUNT])
        .fill("")
        .map((el, i) => `Player ${i + 1}`);

      handleGameState(PLAYER_NAMES, playerNameList);
    }
    if (step === 2 && next > step) {
      handleGameState(CARD_COUNT, 1);
    }
    if (step === 3 && next > step) {
      setWinner(null);
    }
    setStep(next);
  };

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

  return (
    <StyledAssignmentWrapper>
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
        <CardStep4
          winner={winner}
          players={players}
          handleRestart={() => {
            goToStep(1);
            resetGameState();
          }}
        />
      )}
    </StyledAssignmentWrapper>
  );
}
