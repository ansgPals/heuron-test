export interface Player {
  name: string;
  cards: number[];
  score: number;
}

export interface GameState {
  playerCount: number;
  playerNames: string[];
  cardCount: number;
  [key: string]: number | string[];
}
