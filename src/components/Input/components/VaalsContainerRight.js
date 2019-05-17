import React from 'react';
import styled from 'styled-components';
import FeatherIcon from 'feather-icons-react';

import { ThemeWrapper } from 'vaals';

export const VaalsContainerRight = props => {
  return (
    <ThemeWrapper>
      <VaalsInputContainerRight {...props}>
        {props.containerType === 'icon' && <FeatherIcon icon={props.containerContent} size="16" />}
        {props.containerType === 'text' && <div>{props.containerContent}</div>}
      </VaalsInputContainerRight>
    </ThemeWrapper>
  );
};

const VaalsInputContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spaceXs} ${({ theme }) => theme.spaceXs};
  padding-left: 0;
  min-width: ${({ theme }) => theme.borderRadius};

  background: #fff;

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSizeXs};
  font-weight: ${({ theme }) => theme.fontWeightSemiBold};
  color: ${({ theme }) => theme['gray']['400']};
`;
