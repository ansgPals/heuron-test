import ColorPicker from "@/components/commons/ColorPicker";
import ToggleButton from "@/components/commons/Toggle";
import { IMAGE_LOAD_ERROR_MESSAGE, IMAGE_LOAD_MESSAGE } from "@/constants";
import {
  COLOR_OVERLAY,
  DOWN,
  IS_GRAY,
  ROTATION,
  SCALE,
  UP,
} from "@/constants/name";
import { useObjectState } from "@/hooks/useObjectState";
import { StyledOutlineButton } from "@/styles/commons";
import { MouseButton } from "@/types/enums/commons";
import { CanvasViewerProps } from "@/types/interfaces/components";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

export default function CanvasViewer({ src }: CanvasViewerProps) {
  const [mouseClick, setMouseClick] = useState<MouseButton>(MouseButton.NONE);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [canvasState, handleCanvasState, resetCanvasState] = useObjectState({
    [SCALE]: 1,
    [ROTATION]: 0,
    [IS_GRAY]: false,
    [COLOR_OVERLAY]: "#ffffff",
  });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const drawImageOnCanvas = (image: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const scaleToFit = Math.min(
      canvas.width / image.width,
      canvas.height / image.height
    );

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate((canvasState[ROTATION] * Math.PI) / 180);
    ctx.scale(canvasState[SCALE] * scaleToFit, canvasState[SCALE] * scaleToFit);

    const drawX = -image.width / 2;
    const drawY = -image.height / 2;

    ctx.filter = canvasState[IS_GRAY] ? "grayscale(100%)" : "none";
    ctx.drawImage(image, drawX, drawY);
    ctx.globalCompositeOperation = "multiply";
    ctx.fillStyle = canvasState[COLOR_OVERLAY];
    ctx.fillRect(drawX, drawY, image.width, image.height);

    ctx.restore();
  };

  const handleMouse =
    (action: "down" | "up") => (e: React.MouseEvent<HTMLCanvasElement>) => {
      if (action === UP) return setMouseClick(MouseButton.NONE);

      setMouseClick(
        e.button === 0
          ? MouseButton.LEFT
          : e.button === 2
          ? MouseButton.RIGHT
          : MouseButton.NONE
      );
    };

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    const delta = e.deltaY;

    if (mouseClick === MouseButton.LEFT) {
      handleCanvasState(
        SCALE,
        Math.max(0.1, Math.min(5, canvasState[SCALE] - delta * 0.001))
      );
    } else if (mouseClick === MouseButton.RIGHT) {
      handleCanvasState(ROTATION, canvasState[ROTATION] - delta * 0.2);
    }
  };

  useEffect(() => {
    if (!src || !canvasRef.current) return;
    setLoading(true);

    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = src;

    image.onload = () => {
      imageRef.current = image;
      drawImageOnCanvas(image);
      setLoading(false);
    };

    image.onerror = () => {
      setLoading(false);
      setError(true);
    };
  }, [src]);

  useEffect(() => {
    if (imageRef.current) {
      drawImageOnCanvas(imageRef.current);
    }
  }, [canvasState]);

  return (
    <StyledCanvasViewer isBlocked={isLoading || error}>
      <p>{isLoading ? IMAGE_LOAD_MESSAGE : IMAGE_LOAD_ERROR_MESSAGE}</p>
      <canvas
        ref={canvasRef}
        width={500}
        height={400}
        onMouseDown={handleMouse(DOWN)}
        onMouseUp={handleMouse(UP)}
        onMouseLeave={handleMouse(UP)}
        onWheel={handleWheel}
        onContextMenu={(e) => e.preventDefault()}
      />
      <div>
        <ColorPicker
          label="컬러"
          value={canvasState[COLOR_OVERLAY]}
          handleChange={(value) => handleCanvasState(COLOR_OVERLAY, value)}
        />
        <ToggleButton
          value={canvasState[IS_GRAY]}
          handleChange={() => handleCanvasState(IS_GRAY, !canvasState[IS_GRAY])}
          label="흑백모드"
        />
        <StyledOutlineButton onClick={resetCanvasState}>
          초기화
        </StyledOutlineButton>
      </div>
    </StyledCanvasViewer>
  );
}

const StyledCanvasViewer = styled.div<{
  isBlocked: boolean;
}>`
  display: flex;
  column-gap: 1rem;
  > canvas {
    display: ${(props) => (props.isBlocked ? "none" : "block")};
    border: 0.1rem solid ${(props) => props.theme.colors.line100};

    background-color: ${(props) => props.theme.colors.white};
    cursor: crosshair;
    touch-action: "none";
  }

  > p {
    display: ${(props) => (props.isBlocked ? "block" : "none")};
    width: 50.2rem;
    height: 40rem;
    text-align: center;
    line-height: 40rem;
    font-size: ${(props) => props.theme.fontSizes.size15};
  }

  > div {
    display: flex;
    flex-direction: column;
    row-gap: 0.8rem;
    min-width: 12rem;
    padding: 3rem 0 0 0;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  ${StyledOutlineButton} {
    margin: 3rem 0 0;
  }
`;
