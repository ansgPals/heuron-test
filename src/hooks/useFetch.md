## useFetch - 커스텀 데이터 패칭 훅

GET API 호출 로직을 간결하게 관리하고 재사용할 수 있도록 만든 커스텀 훅.  
로딩 상태, 에러 핸들링, 상태 코드, 데이터 등을 관리하며, refetch 기능도 제공.

### 주요 기능

- `GET` 요청을 통한 데이터 패칭
- 쿼리스트링 파라미터 지원
- 로딩 상태 및 에러 상태 관리
- 재호출 (`refetch`) 기능
- 자동 호출 여부를 위한 `immediate` 옵션

### 인자 설명 (`UseApiOptions`)

- url: 호출할 API의 주소 (필수)
- params: 쿼리스트링으로 변환 가능한 객체 (예: { page: "1", limit: "10" }) (선택)
- immediate: 마운트 시 자동 호출 여부 (선택, 기본값은 true)

### 반환값 설명

- data: API 응답 데이터 (제네릭 타입 T)
- error: 에러 발생 시 메시지 (문자열 또는 null)
- status: HTTP 상태 코드 (숫자 또는 null)
- isLoading: 요청 중 여부 (boolean)
- refetch: API 재요청 함수

### 사용 예시

```tsx
import { useFetch } from "@/hooks/useFetch";

const { data, error, isLoading, status, refetch } = useFetch<DataType>({
  url: "https://api.example.com/items",
  params: { limit: "10", sort: "desc" },
  immediate: true, // 생략 시 기본값 true
});
```
