import { css, keyframes } from "@emotion/react";

const shimmerEffect = keyframes`
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #f0f0f0;
  }
  100% {
    background-color: #e0e0e0;
  }
`;

export const skeletonAnimation = css`
  animation: ${shimmerEffect} 1.25s infinite;
`;
