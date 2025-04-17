export interface CanvasViewerProps {
  src: string;
}

export interface CanvasModalProps {
  handleClose: () => void;
  isOpen: boolean;
  imageSrc: string;
}

export interface CardStep1Props {
  playerCount: number;
  setPlayerCount: (value: number) => void;
  handleStep: (step: number) => void;
}
export interface CardStep2Props {
  handleStep: (step: number) => void;
  playerNames: string[];
  handlePlayerNames: (value: string[]) => void;
}

export interface CardStep3Props {
  handleStep: (step: number) => void;
  cardCount: number;
  handleCardCount: (value: number) => void;
  startGame: () => void;
}

export interface ColorPickerProps {
  label?: string;
  value: string;
  handleChange: (value: string) => void;
}

export interface ModalProps {
  children: React.ReactNode;
  handleClose: () => void;
  isOpen: boolean;
}

export interface ToggleButtonProps {
  label?: string;
  value: boolean;
  handleChange: () => void;
  isDisabled?: boolean;
}
