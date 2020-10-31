// import original module declarations
import 'styled-components';

// Allow us to type our theme through the app
declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: {
      headline: string;
      large: string;
      medium: string;
      small: string;
    };

    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      secondary: string;
      secondaryLight: string;
      secondaryDark: string;
      background: string;
      text: string;
      shadow: string;
    };

    sizes: {
      header: string;
    };
  }
}
