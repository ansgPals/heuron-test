## useSearches - 키워드 기반 필터링 훅

다중 필드 검색이 필요한 테이블 필터, 검색 폼 등에 활용할 수 있는 간단한 유틸리티 훅으로
객체 배열 데이터에 대해 키워드 기반 필터링을 수행.
입력된 키워드를 기준으로 각 필드 값이 포함되는지 여부를 판단해 필터링된 배열을 반환.

### 주요 기능

- 다중 필드에 대한 부분 문자열 매칭 필터링
- 대소문자 구분 없이 검색
- `useMemo`를 사용한 불필요한 재계산 방지
- 동적 필드(key) 대응

### 인자 설명

- data: 필터링할 데이터 배열  
  객체의 모든 값은 문자열이어야 함 (Record<string, string>[])
- searchKeywords: 필드별 키워드 객체  
  { fieldName: "검색어" } 형태의 객체

### 반환값 설명

- filteredData: 필터링 결과 배열  
  주어진 키워드들을 모두 포함하는 항목만 반환됨

### 사용 예시

```tsx
import { useSearches } from "@/hooks/useSearches";

const { filteredData } = useSearches(data, {
  col1: "choco",
  col2: "197",
  col3: "8801",
});
```
