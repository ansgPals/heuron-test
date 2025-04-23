import { dummyData } from "@/dummyData";
import { useObjectState } from "@/hooks";
import { useSearches } from "@/hooks/useSearches";
import { StyledAssignmentWrapper } from "@/styles/commons";
import styled from "@emotion/styled";
import _ from "lodash";
import { useMemo } from "react";
export default function Assignment3() {
  const columns = Object.keys(dummyData[0]);
  const initialKeywordState = Object.fromEntries(
    columns.map((key) => [key, ""])
  );

  const [searchKeywords, handleSearchKeywords] =
    useObjectState(initialKeywordState);

  const { filteredData } = useSearches(dummyData, searchKeywords);

  const searchDebounce = useMemo(
    () =>
      _.debounce((key: string, value: string) => {
        handleSearchKeywords(key, value);
      }, 300),
    [handleSearchKeywords]
  );

  const onChangeSearchKeyword = (key: string, value: string) => {
    searchDebounce(key, value);
  };

  const highlightMatch = (text: string, keyword: string) => {
    if (!keyword) return text;

    const regex = new RegExp(`(${keyword})`, "gi");
    return text
      .split(regex)
      .map((part, i) =>
        regex.test(part) ? <mark key={i}>{part}</mark> : part
      );
  };

  return (
    <StyledAssignmentWrapper>
      <h1>필터링</h1>
      <StyledInputs>
        {columns.map((column) => (
          <input
            type="text"
            key={column}
            placeholder={`${column} 검색어를 입력하세요`}
            onChange={(e) => onChangeSearchKeyword(column, e.target.value)}
          />
        ))}
      </StyledInputs>
      <Table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, i) => (
            <tr key={i}>
              {columns.map((field) => (
                <td key={field}>
                  {highlightMatch(row[field], searchKeywords[field])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </StyledAssignmentWrapper>
  );
}

const StyledInputs = styled.div`
  display: flex;
  gap: 1rem;
  margin: 3rem 0 1rem 0;

  input {
    flex: 1;
    padding: 0.6rem;
    border: 0.1rem solid ${(props) => props.theme.colors.line100};
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  color: ${(props) => props.theme.colors.white};
  th,
  td {
    border: 0.1rem solid ${(props) => props.theme.colors.line300};
    padding: 0.8rem;
    text-align: left;
    font-size: ${(props) => props.theme.fontSizes.size15};
    width: 10rem;
  }

  mark {
    background-color: ${(props) => props.theme.colors.primary300};
    color: ${(props) => props.theme.colors.text};
  }
`;
