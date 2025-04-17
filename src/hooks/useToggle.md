## useToggle - 불리언 상태 토글 훅

boolean 타입의 상태를 간결하게 토글하거나 초기값으로 리셋할 수 있는 커스텀 훅.

### 주요 기능

- 불리언 상태의 토글
- 초기값으로 리셋
- 간단한 toggle UI 상태 관리에 적합

### 인자 설명

- initialState: 초기 불리언 값 (필수)

### 반환값 설명

- state: 현재 불리언 상태 값 (`true` | `false`)
- handler: 상태를 반전시키는 함수 (`true → false`, `false → true`)
- reset: 상태를 초기값으로 되돌리는 함수

### 사용 예시

```tsx
import { useToggle } from "@/hooks/useToggle";

const [isOpen, toggleOpen, resetOpen] = useToggle(false);

// 상태 토글
toggleOpen(); // true → false, false → true

// 초기값으로 리셋
resetOpen(); // false로 되돌림
```
