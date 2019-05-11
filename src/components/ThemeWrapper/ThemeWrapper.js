import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
export const ThemeWrapper = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
