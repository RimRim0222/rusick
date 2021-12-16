import { CreateStyled } from './CreateStyled';

import _styled from '@emotion/styled';
import { ThemeProvider as BaseThemeProvider } from '@emotion/react';
import { ReactChild } from 'react';

type Theme = {
  colors: {
    bgColor: string;
    textColor: string;
  };
  fonts: { [key: string]: string };
};

interface IThemeProvider {
  theme: Theme;
  children: ReactChild;
}

export function ThemeProvider({ theme, children }: IThemeProvider) {
  return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>;
}

// export const ThemeProvider: React.FC<{ theme: Theme }> = ({ theme, children }) => {
//   return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>;
// };

export const styled = _styled as CreateStyled<Theme>;
