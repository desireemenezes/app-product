import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      background: string;
      backgroundContainer: string;
      text: string;
      primary: string;
      textLabel: string;
      error: string;
    };
  }
}
