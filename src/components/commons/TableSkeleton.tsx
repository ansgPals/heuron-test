import { SkeletonConfigsType } from "@/types/types/components";
import styled from "@emotion/styled";

export const TableSkeleton = ({
  configs,
}: {
  configs: SkeletonConfigsType;
}) => {
  return (
    <tr>
      {configs.map((style, idx) => (
        <td key={idx}>
          <SkeletonBox style={{ width: style.width, height: style.height }} />
        </td>
      ))}
    </tr>
  );
};

const SkeletonBox = styled.div`
  background-color: ${(props) => props.theme.colors.line100};
  border-radius: 0.4rem;
  animation: skeleton-loading 1.2s ease-in-out infinite;
  margin: 0 auto;

  @keyframes skeleton-loading {
    0% {
      background-color: ${(props) => props.theme.colors.line100};
    }
    50% {
      background-color: ${(props) => props.theme.colors.grey100};
    }
    100% {
      background-color: ${(props) => props.theme.colors.line100};
    }
  }
`;
