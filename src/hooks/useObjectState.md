## useObjectState - 객체 상태 관리 커스텀 훅

객체 상태를 다룰 때 개별 필드 업데이트와 전체 초기화를 간결하게 처리할 수 있도록 만든 커스텀 훅.

### 주요 기능

- 객체 상태의 특정 key만 업데이트 가능
- 초기 상태로 리셋 가능
- 기존 `useState` 기반의 타입 안정성 유지

### 인자 설명

- initial: 초기 객체 상태  
  (예: `{ name: "", age: 0 }`)

### 반환값 설명

- state: 현재 객체 상태
- setField(key, value): 특정 필드(key)의 값을 업데이트하는 함수
- resetField(): 전체 상태를 초기값으로 되돌리는 함수

### 사용 예시

```tsx
import { useObjectState } from "@/hooks/useObjectState";

const [objectState, handleObject, resetObject] = useObjectState({
  name: "",
  email: "",
});

// 필드 개별 업데이트
setFormField("name", "혜민");
// 상태 초기화
resetForm();
```
