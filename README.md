# 🧑‍💻 프론트엔드 과제 - Next.js

Next.js 기반으로 진행한 과제입니다.  
총 3개의 과제로 구성되어 있습니다.

## 프로젝트 실행 방법

```bash
# 패키지 설치
yarn install
# 로컬 개발 서버 실행
yarn dev
```

## 사용한 주요 기술 및 라이브러리

- Next.js
  React 기반의 프레임워크로, 파일 시스템 기반 라우팅과 함께 CSR, SSR, SSG, ISR 등 다양한 렌더링 방식을 유연하게 선택할 수 있는 것이 가장 큰 장점입니다.
  작업 초기에는 과제에 사용하기엔 오버스팩인것같은 느낌에 vite와 고민했지만, 실무 환경과 유사한 구조를 맞추기 위해 최종적으로 Next.js를 선택했습니다.

- Emotion
  CSS-in-JS 스타일링 방식으로, 컴포넌트 파일 내에서 스타일을 함께 정의하고 모듈화할 수 있어 유지보수성과 재사용성이 뛰어납니다.
  글로벌 스타일(Global)과 테마 설정(ThemeProvider)을 분리해 프로젝트 전반의 일관된 디자인을 유지할 수 있었고,
  조건부 스타일링 및 동적 스타일 적용도 훨씬 유연하게 다룰 수 있습니다.

- Lodash
  debounce 기능을 활용하여 입력 이벤트 발생 시 불필요한 연산과 렌더링을 방지하고, 성능 최적화를 도모했습니다.
  Lodash는 전 세계적으로 널리 사용되는 안정적인 라이브러리로, 직접 구현하는 것보다 간결하고 오류 가능성이 적기 때문에 채택하게 되었습니다.

## 커스텀 훅 목록 / src > hooks > 각 md 파일 참조

- useFetch : GET API 호출, 로딩/에러/상태코드 관리
- useObjectState : 객체 상태를 부분적으로 업데이트 가능
- useToggle : 불리언 상태를 토글 및 초기화
- useSearches : 객체 배열 필터링 (대소문자 구분 없이 검색)

## 프로젝트 구조

    src
    ┣ components
    ┃ ┣ commons > 공통 컴포넌트
    ┃ ┗ parts > 페이지 전용 컴포넌트
    ┣ constants > 상수모음
    ┣ hooks > 커스텀 훅 및 커스텀 훅 설명문서
    ┣ layouts > 레이아웃
    ┣ pages
    ┣ styles
    ┣ types
    ┃ ┣ enums
    ┃ ┃ ┗ commons.ts > 공통 enum타입
    ┃ ┣ globals > 타입 보강 관련
    ┃ ┃ ┗ emotion.d.ts
    ┃ ┣ interfaces > src 하위 디렉토리별 interface
    ┃ ┃ ┣ components.ts
    ┃ ┃ ┣ data.ts
    ┃ ┃ ┣ hooks.ts
    ┃ ┃ ┗ pages.ts
    ┃ ┣ types > 공통 type선언
    ┃ ┗ index.ts
    ┗ dummyData.ts > 과제3 필터링용 더미데이터
