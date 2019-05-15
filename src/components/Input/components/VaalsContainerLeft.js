import React from 'react';
import styled from 'styled-components';
import FeatherIcon from 'feather-icons-react';

import { ThemeWrapper } from 'vaals';

export const VaalsContainerLeft = props => {
  return (
    <ThemeWrapper>
      <VaalsInputContainerLeft {...props}>
        {props.containerType === 'icon' && <FeatherIcon icon={props.containerContent} size="16" />}
        {props.containerType === 'text' && <div>{props.containerContent}</div>}
      </VaalsInputContainerLeft>
    </ThemeWrapper>
  );
};

const VaalsInputContainerLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spaceXs} ${({ theme }) => theme.spaceXs};
  padding-right: 0;
  min-width: ${({ theme }) => theme.borderRadius};

  background: #fff;

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSizeXs};
  font-weight: ${({ theme }) => theme.fontWeightSemiBold};
  color: ${({ theme }) => theme['gray']['400']};
`;
