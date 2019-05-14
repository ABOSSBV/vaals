import React from 'react';
import styled from 'styled-components';
import { ThemeWrapper } from 'vaals';

export const Block = ({ children }) => {
  return (
    <ThemeWrapper>
      <VaalsBlock>{children}</VaalsBlock>
    </ThemeWrapper>
  );
};

const VaalsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: ${({ theme }) => theme.spaceMd};

  background: ${({ theme }) => theme['primarygray']['100']};
  border: 1px solid ${({ theme }) => theme['primarygray']['200']};
  border-radius: ${({ theme }) => theme.borderRadius};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSizeSm};
  font-weight: ${({ theme }) => theme.fontWeightRegular};
  color: ${({ theme }) => theme['gray']['700']};
`;
