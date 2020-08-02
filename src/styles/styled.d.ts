import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      secondary: string;
      lightGrey: string;
      mediumGrey: string;
      darkenGrey: string;
      success: string;
      danger: string;
    },
    fontSizes: {
      default: string;
      huge: string;
      small: string;
      tiny: string;
    },
    spacing: {
      default: string;
      vertical: string;
      horizontal: string;
      huge: string;
    }
  }
}
