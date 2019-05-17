import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import styled from 'styled-components';

export const ThemeWrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GeneralStyle>{children}</GeneralStyle>
    </ThemeProvider>
  );
};

export const GeneralStyle = styled.span`
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;
