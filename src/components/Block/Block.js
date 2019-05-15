import React from 'react';
import styled from 'styled-components';
import { ThemeWrapper } from 'vaals';

export const Block = ({ children }) => {
  return (
    <ThemeWrapper>
      <VaalsBlock>
        <VaalsBlockContainer>{children}</VaalsBlockContainer>
      </VaalsBlock>
    </ThemeWrapper>
  );
};

const VaalsBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme['gray']['100']};
  border: 1px solid ${({ theme }) => theme['gray']['200']};
  border-radius: ${({ theme }) => theme.borderRadius};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSizeSm};
  font-weight: ${({ theme }) => theme.fontWeightRegular};
  color: ${({ theme }) => theme['gray']['700']};
`;

const VaalsBlockContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  height: 100%;
  margin: ${({ theme }) => theme.spaceSm} ${({ theme }) => theme.spaceMd};
`;
