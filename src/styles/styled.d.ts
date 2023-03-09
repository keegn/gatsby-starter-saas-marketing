// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      primary: string,
      secondary: string,
      light: string,
      normal: string,
      medium: string,
      semibold: string,
      bold: string,
      extrabold: string,
    },
    font_size: {
      xxxsmall: string,
      xxsmall: string,
      xsmall: string,
      small: string,
      regular: string,
      large: string,
      larger: string,
      xlarge: string,
    },
    color: {
      primary: string,
      secondary: string,
      accent: string,
      background: {
        white: string,
        light: string,
      },
      white: {
        regular: string,
        lessdark: string,
        dark: string,
        darker: string,
      },
      black: {
        lightest: string,
        light: string,
        regular: string,
      },
    },

    screen: {
      xs: string,
      sm: string,
      md: string,
      lg: string,
    },
  }
}