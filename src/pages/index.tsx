import CanvasModal from "@/components/parts/CanvasModal";
import {
  DATA_LOAD_ERROR_MESSAGE,
  DATA_LOAD_MESSAGE,
  EMPTY_DATA_MESSAGE,
} from "@/constants";
import { IMAGE_LIST_API_URL } from "@/constants/url";
import { useFetch } from "@/hooks/useFetch";
import { useToggle } from "@/hooks/useToggle";
import { ImageData } from "@/types/interfaces/data";
import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";

export default function Assignment1() {
  const [selectedImageSrc, setSelectedImageSrc] = useState<string>("");
  const [modalIsOpen, setIsModalOpen] = useToggle(false);

  const { data, error, isLoading } = useFetch<ImageData[]>({
    url: IMAGE_LIST_API_URL,
    params: { page: 1, limit: 10 },
  });

  const onClickRow = (src: string) => () => {
    setSelectedImageSrc(src);
    setIsModalOpen();
  };

  if (isLoading) return <StyledInfo>{DATA_LOAD_MESSAGE}</StyledInfo>;
  if (error)
    return (
      <StyledInfo>
        {DATA_LOAD_ERROR_MESSAGE}
        {error}
      </StyledInfo>
    );
  if (!data?.length) return <StyledInfo>{EMPTY_DATA_MESSAGE}</StyledInfo>;

  return (
    <StyledAssignment1>
      <h1>이미지 목록</h1>
      <Table>
        <thead>
          <tr>
            <th>No</th>
            <th>썸네일</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((img, index) => (
            <tr key={img.id} onClick={onClickRow(img.download_url)}>
              <td>{index + 1}</td>
              <td>
                <Image
                  alt={"이미지"}
                  src={img.download_url}
                  width={150}
                  height={100}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <CanvasModal
        isOpen={modalIsOpen}
        handleClose={setIsModalOpen}
        imageSrc={selectedImageSrc}
      />
    </StyledAssignment1>
  );
}

const StyledAssignment1 = styled.div`
  padding: 3rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: ${(props) => props.theme.fontSizes.size15};
  margin: 3rem 0;
  th,
  td {
    padding: 1.2rem;
    border-top: 0.1rem solid ${(props) => props.theme.colors.line100};
    text-align: left;
  }
  tbody > tr {
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.colors.grey100};
    }
    &:last-of-type {
      border-bottom: 0.1rem solid ${(props) => props.theme.colors.line100};
    }

    img {
      object-fit: contain;
    }
  }
`;
const StyledInfo = styled.div`
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.size14};
  line-height: 10rem;
  text-align: center;
  white-space: pre-line;
`;
