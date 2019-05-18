import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeWrapper } from 'vaals';

export const Block = props => {
  return (
    <ThemeWrapper>
      <VaalsBlock>
        {props.infoVisible && <div>info</div>}
        <VaalsBlockContainer>{props.children}</VaalsBlockContainer>
      </VaalsBlock>
    </ThemeWrapper>
  );
};

Block.propTypes = {
  infoVisible: propTypes.bool,
  infoTitle: propTypes.string,
  infoContent: propTypes.string
};

Block.defaultProps = {
  infoVisible: false
};

const VaalsBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spaceSm} ${({ theme }) => theme.spaceMd};

  background: ${({ theme }) => theme['gray']['100']};
  border: 1px solid ${({ theme }) => theme['gray']['200']};
  border-radius: ${({ theme }) => theme.borderRadius};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSizeSm};
  font-weight: ${({ theme }) => theme.fontWeightRegular};
  color: ${({ theme }) => theme['gray']['700']};
`;

const VaalsBlockContainer = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  flex: 1;
  width: 100%;
  height: 100%;
`;
