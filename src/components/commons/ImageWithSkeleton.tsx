import { skeletonAnimation } from "@/styles/animations";
import { ImageSkeletonProps } from "@/types/interfaces/components";
import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";

export default function ImageWithSkeleton(props: ImageSkeletonProps) {
  const { src, width, height, alt } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <ImageWrapper style={{ width, height }}>
      {isLoading && <Skeleton />}

      {!error ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoadingComplete={() => setIsLoading(false)}
          onError={() => {
            setError(true);
            setIsLoading(false);
          }}
          style={{
            opacity: !(isLoading || error) ? 1 : 0,
          }}
        />
      ) : (
        <ErrorBox>
          <span>
            ⚠️ <br />
            이미지 불러오기 실패
          </span>
        </ErrorBox>
      )}
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 auto;

  image {
    object-fit: cover;
    transition: opacity 0.3s ease;
  }
`;

const Skeleton = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;
  animation: pulse 1.5s infinite ease-in-out;

  ${skeletonAnimation}
`;

const ErrorBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  > span {
    line-height: 3rem;
  }
`;
