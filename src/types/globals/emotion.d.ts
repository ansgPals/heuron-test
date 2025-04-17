// types/globals/emotion.d.ts
import { CustomThemeType } from "@/styles/theme";
import "@emotion/react";

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface Theme extends CustomThemeType {}
}
