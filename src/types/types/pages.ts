export type PlayerType = {
  name: string;
  cards: number[];
  score: number;
};

export type GameStateType = {
  playerCount: number;
  playerNames: string[];
  cardCount: number;
  [key: string]: number | string[];
};
